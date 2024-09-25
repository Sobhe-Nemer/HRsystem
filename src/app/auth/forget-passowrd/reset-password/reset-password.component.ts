import { Component } from '@angular/core';
import { FooterComponent } from '../../../pages/shared/footar/footer.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [FooterComponent,TranslateModule],
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.scss'
})
export class ResetPasswordComponent {

}
