import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from '../shared/footar/footer.component';
import { HeaderComponent } from '../shared/header/header.component';
import { OvertimeComponent } from '../leave-management/overtime/overtime.component';
import { EmployeesSalaryComponent } from '../Payroll/employees-salary/employees-salary.component';
import { AllLeaveComponent } from '../leave-management/all-leave/all-leave.component';
import { NgIf } from '@angular/common';
import { EmployeeTableComponent } from "../shared/employee-table/employee-table.component";

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [RouterModule,
    FooterComponent,
    HeaderComponent,
    OvertimeComponent,
    EmployeesSalaryComponent,
    AllLeaveComponent, NgIf, EmployeeTableComponent],
  templateUrl: './reports.component.html',
  styleUrl: './reports.component.scss'
})
export class ReportsComponent {
  paddinggH2 = false;
  pageTitle=["Reports"];
  showsalary=false;
  showleave=false;
  showovertime=false;
  Salaydata = [
    { Employee: ['assets/img1.jpg', 'sobhe nemer'],  Email: 'sobhe@gmail.com',Salary: '5245' },
    { Employee: ['assets/img1.jpg', 'sobhe nemer'],  Email: 'sobhe@gmail.com',Salary: '5254' },
    { Employee: ['assets/img1.jpg', 'sobhe nemer'],  Email: 'sobhe@gmail.com',Salary: '5254' },
    { Employee: ['assets/img1.jpg', 'sobhe nemer'],  Email: 'sobhe@gmail.com',Salary: '500' }
  ];
  headers = ['Employee',  'Email', 'Salary'];

  leaveData = [
    { Employee: ['assets/img1.jpg', 'Sobhe'], typeLeave: 'Annual', email: 'sobhe@example.com', from: '2023-09-01', to: '2023-09-10', reason:"df" },
    { Employee: ['assets/img1.jpg','sobhe'], typeLeave: 'Annual', email: 'sobhe@example.com', from: '2023-09-01', to: '2023-09-10',reason:"fg" },
    { Employee: ['assets/img1.jpg', 'sobhe'], typeLeave: 'Annual', email: 'sobhe@example.com', from: '2023-09-01', to: '2023-09-10', reason:"fdgdfg" },
    { Employee: ['assets/img1.jpg', 'sobhe'], typeLeave: 'Annual', email: 'sobhe@example.com', from: '2023-09-01', to: '2023-09-10', reason:"nm," },
    { Employee: ['assets/img1.jpg', 'sobhe'], typeLeave: 'Annual', email: 'sobhe@example.com', from: '2023-09-01', to: '2023-09-10', reason:"nm," },
    { Employee: ['assets/img1.jpg', 'sobhe'], typeLeave: 'Annual', email: 'sobhe@example.com', from: '2023-09-01', to: '2023-09-10', reason:"nm," },
    { Employee: ['assets/img1.jpg', 'sobhe'], typeLeave: 'Annual', email: 'sobhe@example.com', from: '2023-09-01', to: '2023-09-10', reason:"nm," },
    { Employee: ['assets/img1.jpg', 'sobhe'], typeLeave: 'Annual', email: 'sobhe@example.com', from: '2023-09-01', to: '2023-09-10', reason:"nm," },
    ];
    headerLeave=['Employee', 'typeLeave', 'email', 'from', 'to','reason'];

    overtimeData = [
      { Employee: ['assets/img1.jpg', 'John Doe'], Overtime: '5 hours', Email: 'Sobhenemer@gmail.com' },
      { Employee: ['assets/img1.jpg', 'John Doe'], Overtime: '5 hours', Email: 'Sobhenemer@gmail.com' },
      { Employee: ['assets/img1.jpg', 'John Doe'], Overtime: '5 hours', Email: 'Sobhenemer@gmail.com' },
      { Employee: ['assets/img1.jpg', 'John Doe'], Overtime: '5 hours', Email: 'Sobhenemer@gmail.com' }
    ];
    headersOvertime = ['Employee', 'Overtime', 'Email'];

    toggleSalaryReport(reportType:string){
    this.showsalary=reportType==='salary';
    this.showleave=false;
    this.showovertime=false;
  }
  toggleLeaveReport(reportType:string){
    this.showleave=reportType==='leave';
    this.showsalary=false;
    this.showovertime=false;
  }
  toggleOvertimeReport(reportType:string){
    this.showovertime=reportType==='overtime';
    this.showsalary=false;
    this.showleave=false;
  }
}
