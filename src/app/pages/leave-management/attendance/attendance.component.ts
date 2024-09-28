import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../../shared/header/header.component";
import { FooterComponent } from '../../shared/footar/footer.component';
import { NgClass } from '@angular/common';
import { EmployeeTableComponent } from "../../shared/employee-table/employee-table.component";
import { RouterLink } from '@angular/router';
import { EmployeeService } from '../../shared/services/employee.service';
import { TableService } from '../../shared/services/table.service';
import { Employee } from '../../shared/models/Employee';
import { Columns } from '../../shared/models/Columns';
import { TranslateModule } from '@ngx-translate/core';
@Component({
  selector: 'app-attendance',
  standalone: true,
  imports: [HeaderComponent, FooterComponent,TranslateModule, NgClass, EmployeeTableComponent,RouterLink],
  templateUrl: './attendance.component.html',
  styleUrl: './attendance.component.scss'
})
export class AttendanceComponent implements OnInit  {
  ngOnInit():void {
    this.attendanceData=this.employeeServise.getEmployee();
    this.headers=this.tableService.getColumns('attendanse');
  }


  constructor(private employeeServise:EmployeeService,private tableService:TableService){

  }
  attendanceData:Employee[]=[];
  headers:Columns[]=[];
  pageTitle="Attendance";
}

