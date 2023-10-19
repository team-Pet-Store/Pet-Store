import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';       
import { MainServiceService } from 'src/app/service/main-service.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  products: any[]=[];
  quantityOptions: number[] = [1, 2, 3, 4, 5];
  subtotal=0;
 
  constructor(
    private myservice:CartService, public mainservice :MainServiceService, public http:HttpClient
  ){ }
   ngOnInit():void{
    this.getCartProducts()
    }
    onSelect(): void {
      this.subtotal = this.products.slice().reduce((total, el) => total + (el.price*el.quantity), 0)
      // Your logic here with the selected quantity and item index
    }
    getCartProducts(): void {
      this.myservice.getCartProducts().subscribe({
        next:(response: any) => {
          console.log('products:', response);
          this.products = response.map((elem:any)=>({...elem,quantity:1})); 
          this.subtotal = this.products.slice().reduce((total, el) => total + (el.price*el.quantity), 0)

        },
        error:(error:any) => {
          console.error('Error fetching cart products:', error);
        }
      });
    }
  }

      
        
       