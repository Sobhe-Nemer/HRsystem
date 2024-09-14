import { Component } from '@angular/core';
import { HeaderComponent } from "../../shared/header/header.component";
import { FooterComponent } from "../../shared/footar/footer.component";
import { EmployeeTableComponent } from "../../shared/employee-table/employee-table.component";

@Component({
  selector: 'app-employees-salary',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, EmployeeTableComponent],
  templateUrl: './employees-salary.component.html',
  styleUrl: './employees-salary.component.scss'
})
export class EmployeesSalaryComponent {
  Salaydata = [
    { Employee: ['assets/img1.jpg', 'sobhe nemer'],  Email: 'sobhe@gmail.com',Salary: '5245' },
    { Employee: ['assets/img1.jpg', 'sobhe nemer'],  Email: 'sobhe@gmail.com',Salary: '5254' },
    { Employee: ['assets/img1.jpg', 'sobhe nemer'],  Email: 'sobhe@gmail.com',Salary: '5254' },
    { Employee: ['assets/img1.jpg', 'sobhe nemer'],  Email: 'sobhe@gmail.com',Salary: '500' }
  ];
  headers = ['Employee',  'Email', 'Salary'];
  pageTitle=["Employees Salary"];
}
