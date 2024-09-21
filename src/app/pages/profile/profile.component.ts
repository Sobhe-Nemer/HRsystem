import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { FooterComponent } from '../shared/footar/footer.component';
import { HeaderComponent } from '../shared/header/header.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [RouterModule, FooterComponent, HeaderComponent,RouterLink],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  pageTitle=["Profile"]
}
