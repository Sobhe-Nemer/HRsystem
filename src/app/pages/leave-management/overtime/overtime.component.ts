import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../../shared/header/header.component";
import { FooterComponent } from "../../shared/footar/footer.component";
import { EmployeeTableComponent } from "../../shared/employee-table/employee-table.component";
import { RouterLink } from '@angular/router';
import { EmployeeService } from '../../shared/services/employee.service';
import { TableService } from '../../shared/services/table.service';
import { Employee } from '../../shared/models/Employee';
import { Columns } from '../../shared/models/Columns';

@Component({
  selector: 'app-overtime',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, EmployeeTableComponent,RouterLink],
  templateUrl: './overtime.component.html',
  styleUrl: './overtime.component.scss'
})
export class OvertimeComponent implements OnInit  {
  ngOnInit():void {
    this.overtimeData=this.employeeServise.getEmployee();
    this.headerOvertime=this.tableService.getColumns('overtime');
  }


  constructor(private employeeServise:EmployeeService,private tableService:TableService){

  }
  overtimeData:Employee[]=[];
  headerOvertime:Columns[]=[];
  pageTitle=["Overtime"];
}
