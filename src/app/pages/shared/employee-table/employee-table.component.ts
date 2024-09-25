import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Columns } from '../models/Columns';
import { FormsModule } from '@angular/forms';
import { Employee } from '../models/Employee';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employee-table',
  standalone: true,
  imports: [NgFor, NgIf, NgClass,FormsModule],
  templateUrl: './employee-table.component.html',
  styleUrls: ['./employee-table.component.scss']
})
export class EmployeeTableComponent implements OnInit{
  @Input() data: any[] = [];
  @Input() columns: Columns[] = [];
  @Input() actions: string[] = [];
  @Input() edits: string[] = [];
  filteredData: Employee[] = [];

  constructor(private employeeService: EmployeeService) {}

  ngOnInit() {
    this.filteredData = this.employeeService.getEmployee();
  }

  @Output() actionEvent = new EventEmitter<{ action: string, row: any }>();
  @Output() editEvent = new EventEmitter<{ edit: string, row: any }>();

  searchEmployeeId: string = '';
  searchEmployeeName: string = '';



  onActionClick(action: string, row: any) {
    this.actionEvent.emit({ action, row });
  }

  onEditClick(edit: string, row: any) {
    this.editEvent.emit({ edit, row });
  }
  search() {
    this.filteredData = this.data.filter(row => {
      const matchesId = this.searchEmployeeId ? row.id.toString().includes(this.searchEmployeeId) : true;
      const matchesName = this.searchEmployeeName ? row.employee[1].toLowerCase().includes(this.searchEmployeeName.toLowerCase()) : true;
      return matchesId && matchesName;
    });
}clear(){
  this.searchEmployeeName = "";
  this.searchEmployeeId = ""
  this.filteredData=this.data
}
}
