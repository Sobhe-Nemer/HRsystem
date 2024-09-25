import {Component,OnInit} from '@angular/core';
import { HeaderComponent } from "../../shared/header/header.component";
import { FooterComponent } from "../../shared/footar/footer.component";
import { EmployeeTableComponent } from "../../shared/employee-table/employee-table.component";
import { RouterLink } from '@angular/router';
import { EmployeeService } from '../../shared/services/employee.service';
import { Employee } from '../../shared/models/Employee';
import { TableService } from '../../shared/services/table.service';
import { Columns } from '../../shared/models/Columns';
import { SalaryModalComponent } from '../../shared/modals/salary-modal/salary-modal.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-employees-salary',
  standalone: true,
  imports: [HeaderComponent, FooterComponent,TranslateModule, EmployeeTableComponent,RouterLink,SalaryModalComponent],
  templateUrl: './employees-salary.component.html',
  styleUrl: './employees-salary.component.scss'
})
export class EmployeesSalaryComponent implements OnInit {
  Salaydata: Employee[] = [];
  headerSalary: Columns[] = [];
  pageTitle = ["Employees Salary"];
  isModalVisible = false;

  constructor(private employeeServcie: EmployeeService, private tableService: TableService) {}

  ngOnInit(): void {
    this.Salaydata = this.employeeServcie.getEmployee();
    this.headerSalary = this.tableService.getColumns('employee-salary');
  }

  onEditClick(event: { edit: string; row: any }) {
    if (event.edit === 'Edit') {
      console.log('edit clicked');
      this.isModalVisible = true;
    }
  }

  closeModal() {
    this.isModalVisible = false;
  }
}
