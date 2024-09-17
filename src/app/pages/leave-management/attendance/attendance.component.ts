import { Component, ViewChild } from '@angular/core';
import { HeaderComponent } from "../../shared/header/header.component";
import { FooterComponent } from '../../shared/footar/footer.component';
import { NgClass } from '@angular/common';
import { EmployeeTableComponent } from "../../shared/employee-table/employee-table.component";
@Component({
  selector: 'app-attendance',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, NgClass, EmployeeTableComponent],
  templateUrl: './attendance.component.html',
  styleUrl: './attendance.component.scss'
})
export class AttendanceComponent {
  attendanceData = [
    { Employee: ['assets/img1.jpg', 'John Doe'], Sep01: 'Present', Sep02: 'Absent', Sep03: 'Present' ,Sep04: 'Absent', Sep05: 'Absent', Sep06: 'Absent',Sep07: 'Absent' ,Sep08: 'Absent',Sep09: 'Absent',Sep10: 'Absent'},
    { Employee: ['assets/img1.jpg', 'Jane Doe'], Sep01: 'Absent', Sep02: 'Present', Sep03: 'Present' ,Sep04: 'Absent', Sep05: 'Absent', Sep06: 'Absent',Sep07: 'Absent',Sep08: 'Absent',Sep09: 'Absent',Sep10: 'Absent'},
    { Employee: ['assets/img1.jpg', 'Jane Doe'], Sep01: 'Absent', Sep02: 'Present', Sep03: 'Present' ,Sep04: 'Absent', Sep05: 'Absent', Sep06: 'Absent',Sep07: 'Absent',Sep08: 'Absent',Sep09: 'Absent',Sep10: 'Absent'},
    { Employee: ['assets/img1.jpg', 'Jane Doe'], Sep01: 'Absent', Sep02: 'Present', Sep03: 'Present' ,Sep04: 'Absent', Sep05: 'Absent', Sep06: 'Absent',Sep07: 'Absent',Sep08: 'Absent',Sep09: 'Absent',Sep10: 'Absent'},
    { Employee: ['assets/img1.jpg', 'Jane Doe'], Sep01: 'Absent', Sep02: 'Present', Sep03: 'Present' ,Sep04: 'Absent', Sep05: 'Absent', Sep06: 'Absent',Sep07: 'Absent',Sep08: 'Absent',Sep09: 'Absent',Sep10: 'Absent'},
    { Employee: ['assets/img1.jpg', 'Jane Doe'], Sep01: 'Absent', Sep02: 'Present', Sep03: 'Present' ,Sep04: 'Absent', Sep05: 'Absent', Sep06: 'Absent',Sep07: 'Absent',Sep08: 'Absent',Sep09: 'Absent',Sep10: 'Absent'}
  ];

  headers = ['Employee', 'Sep01', 'Sep02', 'Sep03','Sep04','Sep05','Sep06','Sep07','Sep08','Sep09','Sep10'];
  pageTitle=["Attendance"];
}
