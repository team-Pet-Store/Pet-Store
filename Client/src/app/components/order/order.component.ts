import { Component } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
})
export class OrderComponent {
  products: any = [];
  subtotal:number=0
  orderDate: Date = new Date(); 

  constructor() {}

  ngOnInit(): void {
    this.getProducts()
  }
  getProducts() {
    const items = localStorage.getItem('cart-products')
    const total=localStorage.getItem('subtotal')
    if (items && total)
    {
      this.products=JSON.parse(items)
      this.subtotal=JSON.parse(total)
    }

  }
}
