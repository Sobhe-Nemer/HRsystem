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
  const email = (document.querySelector('input[type="email"]') as HTMLInputElement).value;
  const password = (document.querySelector('input[type="password"]') as HTMLInputElement).value;

  if (!email || !password) {

    return;
  }

  localStorage.setItem('LoggedIn', 'true');
  this.router.navigate(['/home']);
}

}

