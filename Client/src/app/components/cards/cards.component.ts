import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../interfaces/product.interface';
import { HttpClient } from '@angular/common/http';
import { MainServiceService } from 'src/app/service/main-service.service';
import { CardService } from './cards.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
})
export class CardsComponent implements OnInit {
  public products: Product[] = [];
  public selectedProduct: Product | null = null;

  constructor(private myservice:CardService, public mainservice :MainServiceService, private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts(): void {
    this.http.get<Product[]>('http://localhost:3000/api/product')
      .subscribe((data : any) => {
        this.products = data;
      });
  }
  openModal(product: Product): void {
    this.selectedProduct = product;
    this.toggleModal();
  }

  public modal = false;
  toggleModal(): void {
    this.modal = !this.modal;
    if (this.modal) {
      document.body.classList.add('active-modal');
    } else {
      document.body.classList.remove('active-modal');
    }
  }
  addToCart( productID: number): void {
    console.log('trigger')
    this.myservice.addToCart(productID).subscribe({
      next: (response: any) => {
        console.log('Product added to cart:', response);
      },
     error: (err:any)=>{
        console.log(err)
      }
    }
    );
  }
}
