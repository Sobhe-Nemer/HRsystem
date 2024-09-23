import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TableService {
  constructor() { }
  getColumns(key:string){
    switch(key){

      case 'employee-salary':
        return [{title:'Id',key:'id'},{title:'Employee',key:'employee'},  {title:'Email',key:'email'}, {title:'Salary',key:'salary'}]

        case 'overtime':
        return [{title:'Id',key:'id'},{title:'Employee',key:'employee'},  {title:'Emplfvfvvoyee',key:'email'}, {title:'No on hours in day',key:'overtimeDay'},{title:'No on hours in Month',key:'overtimeMonth'},{title:'Total hours since start work',key:'overtimeDay'}]

        case('attendanse'):
      return[{title:'Id',key:'id'},{title:'Employee',key:'employee'},{title:'Sep01',key:'Sep01'},{title:'Sep02',key:'Sep02'},{title:'Sep03',key:'Sep03'},{title:'Sep04',key:'Sep04'},{title:'Sep05',key:'Sep05'},{title:'Sep06',key:'Sep06'},{title:'Sep07',key:'Sep07'},{title:'Sep08',key:'Sep08'},{title:'Sep09',key:'Sep09'},{title:'Sep10',key:'Sep10'}]

      case('allLeave'):
      return [{title:'Id',key:'id'},{title:'Employee',key:'employee'},{title:'Email',key:'email'},{title:'TypeLeave',key:'typeLeave'},{title:'From',key:'from'},{title:'To',key:'to'},{title:'Reason',key:'reason'}]

      case('request'):
      return [{title:'Id',key:'id'},{title:'Employee',key:'employee'},{title:'Email',key:'email'},{title:'Type Request',key:'typeRequest'},{title:'Reason Requset',key:'approved'}]

      case('dashboard'):
      return [{title:'Id',key:'id'},{title:'Employee',key:'employee'},{title:'Email',key:'email'},{title:'From',key:'from'},{title:'To',key:'to'}]


    }

    return []
  }
}
