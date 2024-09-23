import { NgIf } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-salary-modal',
  standalone: true,
  imports: [NgIf],
  templateUrl: './salary-modal.component.html',
  styleUrls: ['./salary-modal.component.scss']
})
export class SalaryModalComponent {
  @Input() isVisible = false; 
  @Output() close = new EventEmitter<void>();

  closeModal() {
    this.close.emit();
  }
}
