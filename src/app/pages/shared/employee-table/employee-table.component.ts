import { NgClass, NgFor, NgIf, } from '@angular/common';
import { Component,Input,Output,EventEmitter } from '@angular/core';
import { Columns } from '../models/Columns';

@Component({
  selector: 'app-employee-table',
  standalone: true,
  imports: [NgFor,NgIf,NgClass],
  templateUrl: './employee-table.component.html',
  styleUrl: './employee-table.component.scss'
})
export class EmployeeTableComponent {
  @Input() data: any[] = [];
  @Input() columns: Columns[] = [];
  @Input() actions: string[] = [];
  @Input( ) edits:string[]=[];

  @Output() actionEvent = new EventEmitter<{ action: string, row: any }>();
  @Output() editEvent = new EventEmitter<{ edit: string, row: any }>();

  onActionClick(action: string, row: any) {
    this.actionEvent.emit({ action, row });
  }
  onEditClick(edit: string, row: any) {
    this.editEvent.emit({ edit, row });
  }
}
