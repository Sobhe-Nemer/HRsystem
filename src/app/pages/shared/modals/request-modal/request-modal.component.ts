import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-request-modal',
  standalone: true,
  imports: [NgIf],
  templateUrl: './request-modal.component.html',
  styleUrl: './request-modal.component.scss'
})
export class RequestModalComponent {
  isVisible=true;
  close() {
    this.isVisible = false;
  }


}
