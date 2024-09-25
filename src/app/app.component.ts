import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AllLeaveComponent } from "./pages/leave-management/all-leave/all-leave.component";
import { HeaderComponent } from "./pages/shared/header/header.component";
import { FooterComponent } from './pages/shared/footar/footer.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FooterComponent, AllLeaveComponent, HeaderComponent,TranslateModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'HR-System';
}

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);

}

