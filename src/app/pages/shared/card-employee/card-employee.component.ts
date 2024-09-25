import { NgFor, NgIf } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { AddModalComponent } from "../modals/add-modal/add-modal.component";
import { RouterLink } from '@angular/router';
import { Employee } from '../models/Employee';
import { EmployeeService } from '../services/employee.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-card-employee',
  standalone: true,
  imports: [NgFor, AddModalComponent,RouterLink,FormsModule,NgIf],
  templateUrl: './card-employee.component.html',
  styleUrl: './card-employee.component.scss'
})
export class CardEmployeeComponent implements OnInit {

  ngOnInit() {
    this.fillterData=this.employeeService.getEmployee();
  }
  constructor(private employeeService:EmployeeService){

  }
  @Input() data:any[]=[];
  fillterData:Employee[]=[];
  showModal=false;
  searchPosition:string="";
  searchName:string="";
  addModal(){
    this.showModal=!this.showModal;
  }
  search(){
    this.fillterData=this.data.filter(data=>{
      const matchPosition = this.searchPosition ? data.position.toString().includes(this.searchPosition.toLowerCase()):true;
      const matcheName=this.searchName ? data.employee[1].toLowerCase().includes(this.searchName.toLowerCase()):true;
      return matchPosition && matcheName;
    });
  }
  clear(){
    this.searchName = "";
    this.searchPosition = ""
    this.fillterData=this.data
  }
}
