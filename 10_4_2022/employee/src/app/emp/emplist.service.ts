import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmplistService {
  employees = [
    { name: 'Rajesh Kumar', id: 1, email: 'rajeshkumar@gmail.com' },
    { name: 'Priya Sharma', id: 2, email: 'priyasharma@gmail.com' },
    { name: 'Amit Patel', id: 3, email: 'amitpatel@gmail.com' }
];

  constructor() { }

  getEmployees() {
    return this.employees;
  }

  
}
