import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartlistService {
  rows = [
    { item: 'Apples', quantity: 3, price: 1, total: 3 },
    { item: 'Oranges', quantity: 2, price: 2, total: 4 },
    { item: 'Bananas', quantity: 1, price: 1, total: 1 },
    { item: 'Grapes', quantity: 4, price: 3, total: 12 },
    { item: 'Mangoes', quantity: 12, price: 2, total: 24 }
    ];
  getrow() {
    return this.rows;
  }
  getTotalProducts(): number {
    return this.rows.length;
  }

  getTotalQuantity(): number {
    return this.rows.reduce((sum, row) => sum + row.quantity, 0);
  }

  getTotalSum(): number {
    return this.rows.reduce((sum, row) => sum + row.total, 0);
  }
  constructor() { }
 
}
