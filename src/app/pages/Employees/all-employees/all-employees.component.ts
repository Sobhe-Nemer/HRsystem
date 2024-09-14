import { Component } from '@angular/core';
import { RouterModule  } from '@angular/router';
import { FooterComponent } from '../../shared/footar/footer.component';
import { HeaderComponent } from '../../shared/header/header.component';
import { CardEmployeeComponent } from "../../shared/card-employee/card-employee.component";

@Component({
  selector: 'app-all-employees',
  standalone: true,
  imports: [RouterModule, FooterComponent, HeaderComponent, CardEmployeeComponent],
  templateUrl: './all-employees.component.html',
  styleUrl: './all-employees.component.scss'
})
export class AllEmployeesComponent {
  profileData=[
    {img:'../../../../assets/img1.jpg',name:'Sobhe Nemer',position:'developer'},
    {img:'../../../../assets/img1.jpg',name:'Sobhe Nemer',position:'developer'},
    {img:'../../../../assets/img1.jpg',name:'Sobhe Nemer',position:'developer'},
    {img:'../../../../assets/img1.jpg',name:'Sobhe Nemer',position:'developer'},
    {img:'../../../../assets/img1.jpg',name:'Sobhe Nemer',position:'developer'},
    {img:'../../../../assets/img1.jpg',name:'Sobhe Nemer',position:'developer'}

  ];
  pageTitle=["All Employee"];


}
