import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { FooterComponent } from '../../shared/footar/footer.component';
import { RouterModule } from '@angular/router';
import { EmployeeTableComponent } from '../../shared/employee-table/employee-table.component';
import { EmployeeService } from '../../shared/services/employee.service';
import { TableService } from '../../shared/services/table.service';
import { Employee } from '../../shared/models/Employee';
import { Columns } from '../../shared/models/Columns';

@Component({
  selector: 'app-employee-request',
  standalone: true,
  imports: [RouterModule, FooterComponent, HeaderComponent,EmployeeTableComponent],
  templateUrl: './employee-request.component.html',
  styleUrl: './employee-request.component.scss'
})
export class EmployeeRequestComponent implements OnInit {
  ngOnInit() {
    this.requestdata=this.employeeService.getEmployee();
    this.header=this.tableService.getColumns('request')
  }
constructor(private employeeService:EmployeeService,private tableService:TableService){

}
  requestdata :Employee[]= [];
  header:Columns[]=[];

  handleAction(event: { action: string, row: any }) {
    if (event.action === 'Approve') {
      console.log('Approve clicked');
    }
  }
  pageTitle=["Employee Request"]
}
