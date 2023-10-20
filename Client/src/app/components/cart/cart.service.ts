import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MainServiceService } from "src/app/service/main-service.service"; 
import { Observable } from 'rxjs';



@Injectable({
    providedIn:'root'
})

export class CartService{
  products:any =[];
   
    Url=this.mainService.baseUrl+"carts"
    
    constructor(private http :HttpClient,public mainService:MainServiceService) {}
   
      getCartProducts():Observable<any> {
       return  this.http.get(this.Url,{})
       
      }
      removeFromCart(productID:number):Observable<any>{
        return this.http.delete(`${this.Url}/${productID}`,{})
      }
      removeAllFromCart():Observable<any>{
        return this.http.delete(`${this.Url}`,{})
      }
}
