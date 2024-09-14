import { Component, ViewChild } from '@angular/core';
import { HeaderComponent } from "../../shared/header/header.component";
import { FooterComponent } from '../../shared/footar/footer.component';
import { NgClass } from '@angular/common';
@Component({
  selector: 'app-attendance',
  standalone: true,
  imports: [HeaderComponent,FooterComponent,NgClass],
  templateUrl: './attendance.component.html',
  styleUrl: './attendance.component.scss'
})
export class AttendanceComponent {
  pageTitle=["Attendance"];
}
