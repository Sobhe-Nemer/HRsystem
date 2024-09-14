import { Component } from '@angular/core';
import { HeaderComponent } from "../../shared/header/header.component";
import { FooterComponent } from "../../shared/footar/footer.component";
import { EmployeeTableComponent } from "../../shared/employee-table/employee-table.component";

@Component({
  selector: 'app-overtime',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, EmployeeTableComponent],
  templateUrl: './overtime.component.html',
  styleUrl: './overtime.component.scss'
})
export class OvertimeComponent {
  overtimeData = [
    { Employee: ['assets/img1.jpg', 'John Doe'], Overtime: '5 hours', Email: 'Sobhenemer@gmail.com' },
    { Employee: ['assets/img1.jpg', 'John Doe'], Overtime: '5 hours', Email: 'Sobhenemer@gmail.com' },
    { Employee: ['assets/img1.jpg', 'John Doe'], Overtime: '5 hours', Email: 'Sobhenemer@gmail.com' },
    { Employee: ['assets/img1.jpg', 'John Doe'], Overtime: '5 hours', Email: 'Sobhenemer@gmail.com' }
  ];
  headers = ['Employee', 'Overtime', 'Email'];
  pageTitle=["Overtime"];
}
