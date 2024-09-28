import { AfterViewInit, Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from '../shared/footar/footer.component';
import { HeaderComponent } from "../shared/header/header.component";
import { Chart } from 'chart.js/auto';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import { CalendarOptions } from '@fullcalendar/core';
import interactionPlugin from '@fullcalendar/interaction';
import { AllLeaveComponent } from "../leave-management/all-leave/all-leave.component";
import { EmployeeTableComponent } from "../shared/employee-table/employee-table.component";
import { Employee } from '../shared/models/Employee';
import { Columns } from '../shared/models/Columns';
import { EmployeeService } from '../shared/services/employee.service';
import { TableService } from '../shared/services/table.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule,
            FooterComponent,
            HeaderComponent,
            FullCalendarModule,
            AllLeaveComponent,
            EmployeeTableComponent,TranslateModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit,OnInit {
  ngOnInit():void {
    this.leaveData=this.employeeService.getEmployee();
    this.headerLeave=this.tableService.getColumns('dashboard');
  }
constructor(private employeeService:EmployeeService,private tableService:TableService){

}

  paddinggH2 = false;
  pageTitle = "Dashboard";
  presentCount = 70;
  absentCount = 30;
  leaveData:Employee[]=[];
    headerLeave:Columns[]=[];
  monthlyOvertime = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    data: [15, 20, 25, 30, 20, 15, 25, 35, 30, 20, 25, 40]
  };
  calendarOptions:CalendarOptions = {
    plugins: [dayGridPlugin, interactionPlugin],
    initialView: 'dayGridMonth',
    selectable: true,
    editable: true,
    events: [
      { title: 'Event 1', date: '2024-09-01' },
      { title: 'Event 2', date: '2024-09-15' }
    ],
    eventClick: this.handleEventClick.bind(this),
  };

  handleEventClick(eventClickInfo: any) {
    alert('Event: ' + eventClickInfo.event.title);
  }
  ngAfterViewInit() {
    this.createPieChart();
    this.createBarChart();
  }

  createPieChart() {
    new Chart("myPieChart", {
      type: 'pie',
      data: {
        labels: ['present', 'absent'],
        datasets: [{
          data: [this.presentCount, this.absentCount],
          backgroundColor: ['#056FFF', '#676564'],
          hoverBackgroundColor: ['#056FFF', '#676564']
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'right',
            labels: {
              usePointStyle: true,
              pointStyle: 'circle'
            }
          },
          tooltip: {
            callbacks: {
              label: function(tooltipItem: any) {
                const data = tooltipItem.raw;
                const total = tooltipItem.dataset.data.reduce((sum: number, value: number) => sum + value, 0);
                const percentage = ((data / total) * 100).toFixed(2);
                return `${tooltipItem.label}: ${percentage}% ${data}`;
              }
            }
          }
        }
      }
    });
  }

  createBarChart() {
    new Chart("myBarChart", {
      type: 'bar',
      data: {
        labels: this.monthlyOvertime.labels,
        datasets: [{
          label: 'Average Overtime ',
          data: this.monthlyOvertime.data,
          backgroundColor: '#4e73df',
          borderColor: '#4e73df',
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        scales: {
          x: {
            beginAtZero: true,
            title: {
              display: false,

            }
          },
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Average Overtime (hours)'
            }
          }
        },
        plugins: {
          legend: {
            display:false
          },
          tooltip: {
            callbacks: {
              label: function(tooltipItem: any) {
                return `${tooltipItem.label}: ${tooltipItem.raw} hours`;
              }
            }
          }
        }
      }
    });
  }
}
