import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-add-modal',
  standalone: true,
  imports: [NgIf],
  templateUrl: './add-modal.component.html',
  styleUrl: './add-modal.component.scss'
})
export class AddModalComponent {
  isVisible=true;
  close() {
    this.isVisible = false;
  }


}


