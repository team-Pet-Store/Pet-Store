import { Component } from '@angular/core';
import { CartService } from '../cart/cart.service';
import { MainServiceService } from 'src/app/service/main-service.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
})
export class OrderComponent {
  products: any = [];
  subtotal:number=0
  orderDate: Date = new Date(); 

  constructor(
    private myservice:CartService, public mainservice :MainServiceService, public http:HttpClient
  ) {}

  ngOnInit(): void {
    this.getProducts()
    this.removeAllFromCart()
  }
  getProducts() {
    const items = localStorage.getItem('cart-products')
    const total=localStorage.getItem('subtotal')
    if (items && total)
    {
      this.products=JSON.parse(items)
      this.subtotal=JSON.parse(total)
      localStorage.removeItem("cart-products")
    }

  }
  removeAllFromCart(): void {
    this.myservice.removeAllFromCart().subscribe({
      next: (response: any) => {
      },
      error: (error) => {
        console.error('Error deleting products:', error);
      }
    });
  }
}
