import { Component } from '@angular/core';
import { FooterComponent } from '../../pages/shared/footar/footer.component';
import { RouterModule,Router } from '@angular/router';

@Component({
  selector: 'app-forget-passowrd',
  standalone: true,
  imports: [FooterComponent,RouterModule],
  templateUrl: './forget-passowrd.component.html',
  styleUrl: './forget-passowrd.component.scss'
})
export class ForgetPassowrdComponent {

  
}
