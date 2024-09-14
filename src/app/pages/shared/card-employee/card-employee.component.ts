import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-employee',
  standalone: true,
  imports: [NgFor],
  templateUrl: './card-employee.component.html',
  styleUrl: './card-employee.component.scss'
})
export class CardEmployeeComponent {
  @Input() data:any[]=[];
}
