import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-leave-modal',
  standalone: true,
  imports: [NgIf],
  templateUrl: './leave-modal.component.html',
  styleUrl: './leave-modal.component.scss'
})
export class LeaveModalComponent {
  isVisible=true;
  close() {
    this.isVisible = false;
  }

}
