import { Injectable } from '@angular/core';
import { Employee } from '../models/Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private employeeList:Employee[] = [
    { id:1,employee: ['assets/img1.jpg', 'sobhe '],  email: 'sobhe@gmail.com',salary: '5245', overtimeDay: '2h', overtimeMonth:'30h', totalovertime:'100h' ,Sep01: 'Present', Sep02: 'Absent', Sep03: 'Present' ,Sep04: 'Absent', Sep05: 'Absent', Sep06: 'Absent',Sep07: 'Absent' ,Sep08: 'Absent',Sep09: 'Absent',Sep10: 'Absent',typeLeave:'medical leave ',from:'30/8/2024',to:'30/8/2024',reason:"Influenza disease",typeRequest:'promotion request',approved:'scac',position:"developer"},
    { id:2,employee: ['assets/img1.jpg', 'ahmad '],  email: 'sobhe@gmail.com',salary: '5254', overtimeDay: '2h', overtimeMonth:'30h', totalovertime:'100h',Sep01: 'Present', Sep02: 'Absent', Sep03: 'Present' ,Sep04: 'Absent', Sep05: 'Absent', Sep06: 'Absent',Sep07: 'Absent' ,Sep08: 'Absent',Sep09: 'Absent',Sep10: 'Absent',typeLeave:'medical leave ',from:'30/8/2024',to:'30/8/2024',reason:"Influenza disease",typeRequest:'promotion request',approved:'scac' ,position:"developer"},
    {id:3 ,employee: ['assets/img1.jpg', 'sara '],  email: 'sobhe@gmail.com',salary: '5254', overtimeDay: '2h', overtimeMonth:'30h', totalovertime:'100h',Sep01: 'Present', Sep02: 'Absent', Sep03: 'Present' ,Sep04: 'Absent', Sep05: 'Absent', Sep06: 'Absent',Sep07: 'Absent' ,Sep08: 'Absent',Sep09: 'Absent',Sep10: 'Absent',typeLeave:'medical leave ',from:'30/8/2024',to:'30/8/2024',reason:"Influenza disease",typeRequest:'promotion request',approved:'scac' ,position:"developer"},
    { id:4,employee: ['assets/img1.jpg', 'hala '],  email: 'sobhe@gmail.com',salary: '500', overtimeDay: '2h', overtimeMonth:'30h', totalovertime:'100h',Sep01: 'Present', Sep02: 'Absent', Sep03: 'Present' ,Sep04: 'Absent', Sep05: 'Absent', Sep06: 'Absent',Sep07: 'Absent' ,Sep08: 'Absent',Sep09: 'Absent',Sep10: 'Absent' ,typeLeave:'medical leave ',from:'30/8/2024',to:'30/8/2024',reason:"Influenza disease",typeRequest:'promotion request',approved:'scac',position:"marketing"}
  ];
  constructor() { }
  getEmployee(){
    return this.employeeList
  }

}
