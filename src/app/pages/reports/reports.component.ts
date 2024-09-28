import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from '../shared/footar/footer.component';
import { HeaderComponent } from '../shared/header/header.component';
import { OvertimeComponent } from '../leave-management/overtime/overtime.component';
import { EmployeesSalaryComponent } from '../Payroll/employees-salary/employees-salary.component';
import { AllLeaveComponent } from '../leave-management/all-leave/all-leave.component';
import { NgIf } from '@angular/common';
import { EmployeeTableComponent } from "../shared/employee-table/employee-table.component";
import { Employee } from '../shared/models/Employee';
import { Columns } from '../shared/models/Columns';
import { EmployeeService } from '../shared/services/employee.service';
import { TableService } from '../shared/services/table.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [RouterModule,
    FooterComponent,
    HeaderComponent,
    OvertimeComponent,
    EmployeesSalaryComponent,
    AllLeaveComponent, NgIf,TranslateModule, EmployeeTableComponent],
  templateUrl: './reports.component.html',
  styleUrl: './reports.component.scss'
})
export class ReportsComponent implements OnInit{

  paddinggH2 = false;
  pageTitle="Reports";
  showsalary=true;
  showleave=false;
  showovertime=false;
  noneDisplay=true;

  Salaydata:Employee[] = [];
  headerSalary:Columns[]=[];
  overtimeData:Employee[]=[];
  headerOvertime:Columns[]=[];
  leaveData:Employee[]=[];
  headerLeave:Columns[]=[];
ngOnInit() {
  this.Salaydata=this.employeeService.getEmployee();
  this.headerSalary=this.tableService.getColumns('employee-salary');

}
constructor(private employeeService:EmployeeService,private tableService:TableService){

}

    toggleSalaryReport(reportType:string){
    this.showsalary=reportType==='salary';
    this.Salaydata=this.employeeService.getEmployee();
    this.headerSalary=this.tableService.getColumns('employee-salary');
    this.showleave=false;
    this.showovertime=false;

  }

  toggleLeaveReport(reportType:string){
    this.showleave=reportType==='leave';
    this.leaveData=this.employeeService.getEmployee();
    this.headerLeave=this.tableService.getColumns('allLeave');
    this.showsalary=false;
    this.showovertime=false;
  }
  toggleOvertimeReport(reportType:string){
    this.showovertime=reportType==='overtime';
    this.overtimeData=this.employeeService.getEmployee();
    this.headerOvertime=this.tableService.getColumns('overtime');
    this.showsalary=false;
    this.showleave=false;
    }

}
