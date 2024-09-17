import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { FooterComponent } from '../../shared/footar/footer.component';
import { RouterModule } from '@angular/router';
import { EmployeeTableComponent } from '../../shared/employee-table/employee-table.component';

@Component({
  selector: 'app-employee-request',
  standalone: true,
  imports: [RouterModule, FooterComponent, HeaderComponent,EmployeeTableComponent],
  templateUrl: './employee-request.component.html',
  styleUrl: './employee-request.component.scss'
})
export class EmployeeRequestComponent {

  requestdata = [
    { Employee: ['assets/img1.jpg', 'Sobhe Nemer'], typeRequest: "promotion request", email: 'sobhe@gmail.com', reason:"df" },
    { Employee: ['assets/img1.jpg', 'Sobhe Nemer'], typeRequest: "promotion request", email: 'sobhe@gmail.com ', reason:"fg" },
    { Employee: ['assets/img1.jpg', 'Sobhe Nemer'], typeRequest: "promotion request", email: 'sobhe@gmail.com', reason:"fdgdfg" },
    { Employee: ['assets/img1.jpg', 'Sobhe Nemer'], typeRequest: "promotion request", email: 'sobhe@gmail.com',  reason:"nm," },
    ];

  handleAction(event: { action: string, row: any }) {
    if (event.action === 'Approve') {
      console.log('Approve clicked');
    }
  }
  pageTitle=["Employee Request"]
}
