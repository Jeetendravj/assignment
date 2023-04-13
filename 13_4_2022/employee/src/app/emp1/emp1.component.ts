import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-emp1',
  templateUrl: './emp1.component.html',
  styleUrls: ['./emp1.component.css']
})
export class Emp1Component {
 emp1:any
   constructor(private employee:EmployeeService){  
   }
   display1(){
     this.emp1=this.employee.fun1();
  }
}
