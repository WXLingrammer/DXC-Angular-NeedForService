import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  constructor() { }

  getEmployeeInfo(){
    return [{"id":1,"name":"Alpha","dept":"training"},
            {"id":2,"name":"Bravo","dept":"jfs"},
            {"id":3,"name":"Charlie","dept":"jfs"}
    ];
  }
}
