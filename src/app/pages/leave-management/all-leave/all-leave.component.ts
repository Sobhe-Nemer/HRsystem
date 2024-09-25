import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { HeaderComponent } from "../../shared/header/header.component";
import { FooterComponent } from '../../shared/footar/footer.component';
import { EmployeeTableComponent } from "../../shared/employee-table/employee-table.component";
import { NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';
import { EmployeeService } from '../../shared/services/employee.service';
import { TableService } from '../../shared/services/table.service';
import { Employee } from '../../shared/models/Employee';
import { Columns } from '../../shared/models/Columns';
import { LeaveModalComponent } from '../../shared/modals/leave-modal/leave-modal.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-all-leave',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, TranslateModule,EmployeeTableComponent,NgClass,RouterLink,LeaveModalComponent],
  templateUrl: './all-leave.component.html',
  styleUrls: ['./all-leave.component.scss']
})
export class AllLeaveComponent implements AfterViewInit,OnInit {
  ngOnInit():void {
    this.leaveData=this.employeeServise.getEmployee();
    this.headerLeave=this.tableService.getColumns('allLeave');
  }
constructor(private employeeServise:EmployeeService,private tableService:TableService){

}
  leaveData:Employee[]=[];
  headerLeave:Columns[]=[];


  @ViewChild(HeaderComponent) headerComponent!: HeaderComponent;
  showModal=false;
  addModal(){
    this.showModal=!this.showModal;
  }
  paddinggH2 = false;

  ngAfterViewInit() {
    this.updatePaddingH2();
  }

  updatePaddingH2() {
    this.paddinggH2 = this.headerComponent.isSidebarOpen;
  }

  handleAction(event: { action: string, row: any }) {
    if (event.action === 'Approve') {
      console.log('Approve clicked');
    }
  }
  pageTitle=["All Leave "];


}
