import { Component } from '@angular/core';
import { FooterComponent } from '../../pages/shared/footar/footer.component';
import { RouterModule,Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-forget-passowrd',
  standalone: true,
  imports: [FooterComponent,RouterModule,TranslateModule],
  templateUrl: './forget-passowrd.component.html',
  styleUrl: './forget-passowrd.component.scss'
})
export class ForgetPassowrdComponent {


}
