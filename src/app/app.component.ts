import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AllLeaveComponent } from "./pages/leave-management/all-leave/all-leave.component";
import { HeaderComponent } from "./pages/shared/header/header.component";
import { FooterComponent } from './pages/shared/footar/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FooterComponent, AllLeaveComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'HR-System';
}

