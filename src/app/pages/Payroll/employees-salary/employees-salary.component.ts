import {Component,OnInit} from '@angular/core';
import { HeaderComponent } from "../../shared/header/header.component";
import { FooterComponent } from "../../shared/footar/footer.component";
import { EmployeeTableComponent } from "../../shared/employee-table/employee-table.component";
import { RouterLink } from '@angular/router';
import { EmployeeService } from '../../shared/services/employee.service';
import { Employee } from '../../shared/models/Employee';
import { TableService } from '../../shared/services/table.service';
import { Columns } from '../../shared/models/Columns';

@Component({
  selector: 'app-employees-salary',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, EmployeeTableComponent,RouterLink],
  templateUrl: './employees-salary.component.html',
  styleUrl: './employees-salary.component.scss'
})
export class EmployeesSalaryComponent implements OnInit {

  ngOnInit(): void {
    this.Salaydata = this.employeeServcie.getEmployee()
    this.headerSalary = this.tableService.getColumns('employee-salary')
  }
  constructor(private employeeServcie:EmployeeService,private tableService:TableService){

  }
  Salaydata:Employee[] = [];
  headerSalary:Columns[]=[];
  pageTitle=["Employees Salary"];
}
