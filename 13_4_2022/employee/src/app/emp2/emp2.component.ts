import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-emp2',
  templateUrl: './emp2.component.html',
  styleUrls: ['./emp2.component.css']
})
export class Emp2Component {
  emp2 :any
  constructor(private employee:EmployeeService){

    
  }
  display2(){
    this.emp2= this.employee.fun2();
  }
}
