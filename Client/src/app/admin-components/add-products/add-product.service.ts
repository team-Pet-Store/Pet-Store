import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
    private apiUrl = 'http://localhost:3000/api/product/admin';
    constructor(private http: HttpClient) { }


    createProduct(product: any, image: File | null): Observable<any> {
        const formData = new FormData();
        formData.append('name', product.name);
        formData.append('description', product.description);
        formData.append('price', product.price);
        formData.append('animal', product.animal);
        formData.append('category', product.category);
        if (image) {
          formData.append('productImage', image, image.name);
        }
    
        return this.http.post(this.apiUrl, formData);
      }
}