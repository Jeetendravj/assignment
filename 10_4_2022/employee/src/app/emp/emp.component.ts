import { Component } from '@angular/core';
import { EmplistService } from './emplist.service';

@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.css']
})
export class EmpComponent {
  employee: any[] | undefined;

  constructor(private employeeService: EmpComponent) {} // extends 

  displayEmployees() {
    this.employee = this.employeeService.getEmployees();
  }
  getEmployees(): any[] | undefined {
    throw new Error('Method not implemented.');
  }
}

