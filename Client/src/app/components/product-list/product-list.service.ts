import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { MainServiceService } from "src/app/service/main-service.service"; 


@Injectable({
    providedIn:'root'
})

export class ProductListService{
    products:any =[];
    url=this.mainService.baseUrl+"product"
    constructor(private http :HttpClient,public mainService:MainServiceService) {}
    getProducts(){
this.products=this.http.get(this.url)
return this.products
    }
    addToCart(userID,productID){
        this.http.post(this.url+"/addToCart",userID,productID)
    }
}
