import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  emp1={id:1,name:'ramesh',designation:'dev'}
  emp2={id:2,name:'suresh',designation:'non dev'}
  emp3={id:3,name:'mahima',designation:'support'}
  constructor() { }
  
   fun1(){
    return this.emp1;
   }
   fun2(){
    return this.emp2;
   }
   
   fun3(){
    return this.emp3;
   }
   
   
   

}
