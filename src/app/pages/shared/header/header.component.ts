import { NgClass, NgIf } from '@angular/common';
import { Component ,Input} from '@angular/core';
import {  RouterModule,Router } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgClass,RouterModule,NgIf,TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isSidebarOpen=true;
  isEmployee=false;
  isLeave=false;
  isRequests=false;
  isPayroll=false;

  openSideBar() {
    this.isSidebarOpen =! this.isSidebarOpen;
  }
  Employee(){
    this.isEmployee =! this.isEmployee;
    this.isLeave=false;
    this.isRequests=false;
    this.isPayroll=false;
  }
  Leave(){
    this.isLeave =! this.isLeave;
    this.isEmployee=false;
    this.isRequests=false;
    this.isPayroll=false;

    }
    Requests(){
    this.isRequests =! this.isRequests;
    this.isEmployee=false;
    this.isLeave=false;
    this.isPayroll=false;

}
payroll(){
  this.isPayroll =! this.isPayroll;
    this.isEmployee=false;
    this.isLeave=false;
    this.isRequests=false;
}
@Input() isTitle : string[]=[];

isDropdownOpen = false;
selectedLanguage: string = 'English';

constructor(private router: Router,private translate: TranslateService) {
  translate.addLangs(['en', 'ar']);
  translate.setDefaultLang('en');
    }
    switchLanguage(lang: string) {
     // this.translate.use(lang);
      this.isDropdownOpen = false;
        this.selectedLanguage = lang === 'en' ? 'English' : 'العربية';
    }
    toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
    }

  logout() :void{
    localStorage.removeItem('LoggedIn');
    this.router.navigate(["/login"]);

  }

}
