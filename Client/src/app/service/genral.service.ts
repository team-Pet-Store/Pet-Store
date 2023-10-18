import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {
   token!: any
   role!:any
  constructor(private jwtHelper : JwtHelperService) {
    this.getToken()
    this.getRole()
   }


  getToken(){
    this.token = localStorage.getItem('token') 
  }
  checkToken(token :string){
  const isTokenExpired = this.jwtHelper.isTokenExpired(token)
  return isTokenExpired
  }
  getRole(){
    this.role = localStorage.getItem("role")
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('token') !== null;
  }
}
