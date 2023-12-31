import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/api/users/';

  constructor(private http: HttpClient) { }

  signup(firstName: string, lastName: string, email: string, password: string): Observable<any> {
    const userData = { firstName, lastName, email, password };
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http.post(`${this.apiUrl}signup`, userData, httpOptions);
  }

  login(email: string, password: string): Observable<any> {
    const userData = { email, password };
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http.post(`${this.apiUrl}signin`, userData, httpOptions);
  }

  logout (){
   const clear =  localStorage.clear()
   return clear
  }
}
