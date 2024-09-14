import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { HeaderComponent } from "../../shared/header/header.component";
import { FooterComponent } from '../../shared/footar/footer.component';
import { EmployeeTableComponent } from "../../shared/employee-table/employee-table.component";
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-all-leave',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, EmployeeTableComponent,NgClass],
  templateUrl: './all-leave.component.html',
  styleUrls: ['./all-leave.component.scss']
})
export class AllLeaveComponent implements AfterViewInit {

  @ViewChild(HeaderComponent) headerComponent!: HeaderComponent;

  leaveData = [
    { Employee: ['assets/img1.jpg', 'John Doe'], typeLeave: 'Annual', email: 'john@example.com', from: '2023-09-01', to: '2023-09-10', reason:"df" },
    { Employee: ['assets/img1.jpg', 'John Doe'], typeLeave: 'Annual', email: 'john@example.com', from: '2023-09-01', to: '2023-09-10',reason:"fg" },
    { Employee: ['assets/img1.jpg', 'John Doe'], typeLeave: 'Annual', email: 'john@example.com', from: '2023-09-01', to: '2023-09-10', reason:"fdgdfg" },
    { Employee: ['assets/img1.jpg', 'John Doe'], typeLeave: 'Annual', email: 'john@example.com', from: '2023-09-01', to: '2023-09-10', reason:"nm," },
    ];

  paddinggH2 = false;

  ngAfterViewInit() {
    this.updatePaddingH2();
  }

  updatePaddingH2() {
    this.paddinggH2 = this.headerComponent.isSidebarOpen;
  }

  handleAction(event: { action: string, row: any }) {
    if (event.action === 'Approve') {
      console.log('Approve clicked');
    }
  }
  pageTitle=["All Leave "];

}
