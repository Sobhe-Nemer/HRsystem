import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { ForgetPassowrdComponent } from './auth/forget-passowrd/forget-passowrd.component';
import { AllEmployeesComponent } from './pages/Employees/all-employees/all-employees.component';
import { AllLeaveComponent } from './pages/leave-management/all-leave/all-leave.component';
import { AttendanceComponent } from './pages/leave-management/attendance/attendance.component';
import { OvertimeComponent } from './pages/leave-management/overtime/overtime.component';
import { EmployeesSalaryComponent } from './pages/Payroll/employees-salary/employees-salary.component';
import { EmployeeRequestComponent } from './pages/Request-approval/employee-request/employee-request.component';
import { LandingComponent } from './pages/landing/landing.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { AuthGuard } from './auth.guard';
import { ReportsComponent } from './pages/reports/reports.component';
import { CardEmployeeComponent } from './pages/shared/card-employee/card-employee.component';


export const routes: Routes = [
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'forgetpassword',
    component:ForgetPassowrdComponent
  },
  {
    path:'home',
    component:HomeComponent,
    canActivate:[AuthGuard]
  },
  {
    path: '', redirectTo: '/home', pathMatch: 'full'
  },

  {
    path:'landing-page',
    component:LandingComponent
  },

  {
    path:'all-leave',
    component:AllLeaveComponent,
    canActivate:[AuthGuard]

  },
  {
    path:'attendance',
    component:AttendanceComponent,
    canActivate:[AuthGuard]

  },
  {
    path:'overtime',
    component:OvertimeComponent,
    canActivate:[AuthGuard]

  },
  {
    path:'employees-salary',
    component:EmployeesSalaryComponent,
    canActivate:[AuthGuard]

  },
  {
    path:'employees-request',
    component:EmployeeRequestComponent,
    canActivate:[AuthGuard]

  },

  {
    path:'all-employees',
    component:AllEmployeesComponent,
    canActivate:[AuthGuard]

  },

  {
    path:'reports',
    component:ReportsComponent,
    canActivate:[AuthGuard]

  },
  {
    path:'profile',
    component:ProfileComponent,
    canActivate:[AuthGuard]

  },
  {
    path:'card-employee',
    component:CardEmployeeComponent,
  }
];
