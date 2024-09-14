import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from '../shared/footar/footer.component';
import { HeaderComponent } from '../shared/header/header.component';

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [RouterModule, FooterComponent, HeaderComponent],
  templateUrl: './reports.component.html',
  styleUrl: './reports.component.scss'
})
export class ReportsComponent {
  paddinggH2 = false;
  pageTitle=["Reports"];
}
