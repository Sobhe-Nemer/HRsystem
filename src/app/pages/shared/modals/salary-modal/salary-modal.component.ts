import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-salary-modal',
  standalone: true,
  imports: [NgIf],
  templateUrl: './salary-modal.component.html',
  styleUrl: './salary-modal.component.scss'
})
export class SalaryModalComponent {
  isVisible=true;
  close() {
    this.isVisible = false;
  }


}
