import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-emp3',
  templateUrl: './emp3.component.html',
  styleUrls: ['./emp3.component.css']
})
export class Emp3Component {
  emp3 : any |undefined;
  constructor(private employee:EmployeeService){

  }
  display3(){
    this.emp3 = this.employee.fun3();
  }
}
