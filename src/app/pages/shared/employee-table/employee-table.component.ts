import { NgFor, NgIf } from '@angular/common';
import { Component,Input,Output,EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-employee-table',
  standalone: true,
  imports: [NgFor,NgIf],
  templateUrl: './employee-table.component.html',
  styleUrl: './employee-table.component.scss'
})
export class EmployeeTableComponent {
  @Input() data: any[] = [];
  @Input() columns: string[] = [];
  @Input() actions: string[] = [];

  @Output() actionEvent = new EventEmitter<{ action: string, row: any }>();

  onActionClick(action: string, row: any) {
    this.actionEvent.emit({ action, row });
  }
}
