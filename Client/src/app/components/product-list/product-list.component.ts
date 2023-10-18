import { Component, OnInit } from '@angular/core';
import { ProductListService } from './product-list.service';
import { MainServiceService } from 'src/app/service/main-service.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: any=[];
  constructor(
    private myservice:ProductListService, public mainservice :MainServiceService, public http:HttpClient
   ){ }
    

ngOnInit():void{
this.getAllProducts()
}
getAllProducts(){
  this.myservice.getProducts().subscribe(
    (data:any)=>{
       this.products=data;
       console.log(data);
  },
  (err:any)=>{
    console.log(err)
  }
  )
}




addToCart(userID: number, productID: number): void {
  this.myservice.addToCart(userID, productID).subscribe({
    next: (response: any) => {
      console.log('Product added to cart:', response);
    },
   
  });
}



}

