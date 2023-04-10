import { Component } from '@angular/core';

import { CartlistService } from '../cartlist.service';


@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})

export class ParentComponent {
  rows: any[] ;
  constructor(private cartlist: CartlistService) {} 

 displaycart() {
   this.rows = this.cartlist.getrow();
 }
   

  
  
  
  
  getTotalProducts(): number {
    return this.cartlist.getTotalProducts();
  }

  getTotalQuantity(): number {
    return this.cartlist.getTotalQuantity();
  }

  getTotalSum(): number {
    return this.cartlist.getTotalSum();
  }
}
