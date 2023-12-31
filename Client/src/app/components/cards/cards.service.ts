import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MainServiceService } from "src/app/service/main-service.service"; 
import { Subject } from "rxjs";





@Injectable({
    providedIn:'root'
})

export class CardService{
    products:any =[];
    url=this.mainService.baseUrl+"product"
    uurl=this.mainService.baseUrl+"carts"
    productAdded = new Subject<void>();
    constructor(private http :HttpClient,public mainService:MainServiceService) {}
    getProducts(){
this.products=this.http.get(this.url)
return this.products
    }
    addToCart( productID: number){
        return  this.http.post(`${this.uurl}/${productID}`,{});
       
      }
     
}
