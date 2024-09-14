import { Component  } from '@angular/core';
import { RouterModule  } from '@angular/router';
import { FooterComponent } from '../shared/footar/footer.component';
import { HeaderComponent } from "../shared/header/header.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, FooterComponent, HeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  paddinggH2 = false;
  pageTitle=["Dashboard"];

}
