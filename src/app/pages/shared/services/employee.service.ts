import { Injectable } from '@angular/core';
import { Employee } from '../models/Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private employeeList:Employee[] = [
    { employee: ['assets/img1.jpg', 'sobhe nemer'],  email: 'sobhe@gmail.com',salary: '5245', overtimeDay: '2h', overtimeMonth:'30h', totalovertime:'100h' ,Sep01: 'Present', Sep02: 'Absent', Sep03: 'Present' ,Sep04: 'Absent', Sep05: 'Absent', Sep06: 'Absent',Sep07: 'Absent' ,Sep08: 'Absent',Sep09: 'Absent',Sep10: 'Absent',typeLeave:'medical leave ',from:'30/8/2024',to:'30/8/2024',reason:"Influenza disease",typeRequest:'promotion request',approved:'scac'},
    { employee: ['assets/img1.jpg', 'sobhe nemer'],  email: 'sobhe@gmail.com',salary: '5254', overtimeDay: '2h', overtimeMonth:'30h', totalovertime:'100h',Sep01: 'Present', Sep02: 'Absent', Sep03: 'Present' ,Sep04: 'Absent', Sep05: 'Absent', Sep06: 'Absent',Sep07: 'Absent' ,Sep08: 'Absent',Sep09: 'Absent',Sep10: 'Absent',typeLeave:'medical leave ',from:'30/8/2024',to:'30/8/2024',reason:"Influenza disease",typeRequest:'promotion request',approved:'scac' },
    { employee: ['assets/img1.jpg', 'sobhe nemer'],  email: 'sobhe@gmail.com',salary: '5254', overtimeDay: '2h', overtimeMonth:'30h', totalovertime:'100h',Sep01: 'Present', Sep02: 'Absent', Sep03: 'Present' ,Sep04: 'Absent', Sep05: 'Absent', Sep06: 'Absent',Sep07: 'Absent' ,Sep08: 'Absent',Sep09: 'Absent',Sep10: 'Absent',typeLeave:'medical leave ',from:'30/8/2024',to:'30/8/2024',reason:"Influenza disease",typeRequest:'promotion request',approved:'scac' },
    { employee: ['assets/img1.jpg', 'sobhe nemer'],  email: 'sobhe@gmail.com',salary: '500', overtimeDay: '2h', overtimeMonth:'30h', totalovertime:'100h',Sep01: 'Present', Sep02: 'Absent', Sep03: 'Present' ,Sep04: 'Absent', Sep05: 'Absent', Sep06: 'Absent',Sep07: 'Absent' ,Sep08: 'Absent',Sep09: 'Absent',Sep10: 'Absent' ,typeLeave:'medical leave ',from:'30/8/2024',to:'30/8/2024',reason:"Influenza disease",typeRequest:'promotion request',approved:'scac'}
  ];
  constructor() { }
  getEmployee(){
    return this.employeeList
  }

}
