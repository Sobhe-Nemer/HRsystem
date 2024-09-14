import { Component } from '@angular/core';
import { AllLeaveComponent } from "../leave-management/all-leave/all-leave.component";
import { HeaderComponent } from "../shared/header/header.component";
import { FooterComponent } from "../shared/footar/footer.component";

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [AllLeaveComponent, HeaderComponent, FooterComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {

}
