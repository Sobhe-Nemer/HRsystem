import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { FooterComponent } from '../../shared/footar/footer.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-employee-request',
  standalone: true,
  imports: [RouterModule, FooterComponent, HeaderComponent],
  templateUrl: './employee-request.component.html',
  styleUrl: './employee-request.component.scss'
})
export class EmployeeRequestComponent {
  pageTitle=["Employee Request"]
}
