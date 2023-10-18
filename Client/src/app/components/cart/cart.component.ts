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
  userID:number=1;
  constructor(
    private myservice:CartService, public mainservice :MainServiceService, public http:HttpClient
  ){ }
   ngOnInit():void{
    this.getCartProducts(this.userID)
    }
    getCartProducts(userID: number): void {
      this.myservice.getCartProducts(userID).subscribe(
        (response: any) => {
          console.log('products:', response);
          this.products = response; 
        },
        (error) => {
          console.error('Error fetching cart products:', error);
        }
      );
    }
  }

      
        
       