import { Component } from '@angular/core';
import {  RouterModule,Router } from '@angular/router';
import { FooterComponent } from '../../pages/shared/footar/footer.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, FooterComponent ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(private router: Router) {}

  login() {
    localStorage.setItem('LoggedIn', 'true');
    this.router.navigate(['/home']);
  }
}
