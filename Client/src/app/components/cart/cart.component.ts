import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';       
import { MainServiceService } from 'src/app/service/main-service.service';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { DeleteCartComponent } from '../delete-cart/delete-cart.component';
import { DeleteCartAllComponent } from '../delete-cart-all/delete-cart.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  products: any[]=[];
  quantityOptions: number[] = [1, 2, 3, 4, 5];
  subtotal=0;
  isCheckoutVisible=false


 
  constructor(
    private myservice:CartService, public mainservice :MainServiceService, public http:HttpClient , private dialog: MatDialog
  ){ }
   ngOnInit():void{
    this.getCartProducts()
 
    }
    caluculateSubtotal (): void{
      this.subtotal = this.products.slice().reduce((total, el) => total + (el.price*el.quantity), 0)
      this.subtotal =parseFloat(this.subtotal.toFixed(2))

    }
    onSelect(): void {
      this.caluculateSubtotal()
    }
    getCartProducts(): void {
      this.myservice.getCartProducts().subscribe({
        next:(response: any) => {
          console.log('products:', response);
          this.products = response.map((elem:any)=>({...elem,quantity:1})); 
          this.caluculateSubtotal()

      
      
      },
        error:(error:any) => {
          console.error('Error fetching cart products:', error);
        }
      });
    }
    removeFromCart(productID: number): void {
      this.myservice. removeFromCart(productID).subscribe({
        next:(response:any) => {
         
          this.products = this.products.filter((product) => product.id !== productID);
          this.caluculateSubtotal()        },
       error: (error) => {
        
          console.error('Error deleting product:', error);
        }
    });
    }
    openDeleteConfirmation(productID: number): void {
      const dialogRef = this.dialog.open(DeleteCartComponent);
  
      dialogRef.afterClosed().subscribe(result => {
        if (result === true) {
          this.removeFromCart(productID); 
        }
      });
    }
    openDeleteAllConfirmation(): void {
      const dialogRef = this.dialog.open(DeleteCartAllComponent);
  
      dialogRef.afterClosed().subscribe(result => {
        if (result === true) {
          this.removeAllFromCart(); 
        }
      });
    }
    
    removeAllFromCart(): void {
      this.myservice.removeAllFromCart().subscribe({
        next: (response: any) => {
          
          this.products = [];
    
       
          this.subtotal = 0;
        },
        error: (error) => {
          console.error('Error deleting products:', error);
        }
      });
    }
    toggleModal() {
      this.isCheckoutVisible = !this.isCheckoutVisible;
    }
   
   
  
    
  }

      
        
       