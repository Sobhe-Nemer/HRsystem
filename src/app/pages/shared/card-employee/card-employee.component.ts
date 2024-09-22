import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { AddModalComponent } from "../modals/add-modal/add-modal.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card-employee',
  standalone: true,
  imports: [NgFor, AddModalComponent,RouterLink],
  templateUrl: './card-employee.component.html',
  styleUrl: './card-employee.component.scss'
})
export class CardEmployeeComponent {
  @Input() data:any[]=[];
  showModal=false;
  
  addModal(){
    this.showModal=!this.showModal;
  }
}
