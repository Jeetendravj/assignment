import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employees = [
    { name: 'Sneha Desai', id: 4, email: 'snehadesai@gmail.com' },
    { name: 'Manoj Singh', id: 5, email: 'manojsingh@gmail.com' },
    { name: 'Smita Gupta', id: 6, email: 'smitagupta@gmail.com' },
    { name: 'Rajeev Sharma', id: 7, email: 'rajeevsharma@gmail.com' },
    { name: 'Nidhi Patel', id: 8, email: 'nidhipatel@gmail.com' },
    { name: 'Alok Khanna', id: 9, email: 'alokkhanna@gmail.com' }
  ];
  

  constructor() { }

  getEmployees() {
    return this.employees;
  }

}