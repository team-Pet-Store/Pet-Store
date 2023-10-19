import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MainServiceService } from "src/app/service/main-service.service"; 



@Injectable({
    providedIn:'root'
})

export class CardService{
    products:any =[];
    url=this.mainService.baseUrl+"product"
    uurl=this.mainService.baseUrl+"carts"
    
    constructor(private http :HttpClient,public mainService:MainServiceService) {}
    getProducts(){
this.products=this.http.get(this.url)
return this.products
    }
    addToCart( productID: number){
        return  this.http.post(`${this.uurl}/${productID}`,{});
      }
      
}
