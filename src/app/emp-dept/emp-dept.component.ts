import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'app-emp-dept',
  template: `
  
  <h2>Name of Employees & their dept collected from Service are:</h2>
  <ul *ngFor="let person of emp">
  <li>{{person.name}} {{person.dept}}</li>
  </ul>
  `,
  styleUrls: ['./emp-dept.component.css']
})
export class EmpDeptComponent implements OnInit {
  public emp =  [{ name: '', dept: '' }];

  constructor(private _employeeService: EmployeeServiceService) { }

  ngOnInit(): void {
    this.emp = this._employeeService.getEmployeeInfo();
  }

}
