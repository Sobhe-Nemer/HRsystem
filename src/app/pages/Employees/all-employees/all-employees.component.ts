import { Component, OnInit } from '@angular/core';
import { RouterModule  } from '@angular/router';
import { FooterComponent } from '../../shared/footar/footer.component';
import { HeaderComponent } from '../../shared/header/header.component';
import { CardEmployeeComponent } from "../../shared/card-employee/card-employee.component";
import { Employee } from '../../shared/models/Employee';
import { TableService } from '../../shared/services/table.service';
import { EmployeeService } from '../../shared/services/employee.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-all-employees',
  standalone: true,
  imports: [RouterModule, FooterComponent, HeaderComponent, CardEmployeeComponent,TranslateModule],
  templateUrl: './all-employees.component.html',
  styleUrl: './all-employees.component.scss'
})
export class AllEmployeesComponent implements OnInit {
ngOnInit():void {
  this.profileData=this.employeeServise.getEmployee();

}
constructor(private employeeServise:EmployeeService,private tableService:TableService){

}

  profileData:Employee[]=[];
  pageTitle=["All Employee"];


}
