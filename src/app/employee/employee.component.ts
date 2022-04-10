import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'app-employee',
  template: `
  <h2>Name of Employees collected from the Service are:</h2>
  <ul *ngFor="let person of emp">
  <li>{{person.name}}</li>
  </ul>
  `,
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  public emp =  [{ name: '', dept: '' }];
  constructor(private _employeeService: EmployeeServiceService) { }

  ngOnInit(): void {
    this.emp = this._employeeService.getEmployeeInfo();
  }

}
