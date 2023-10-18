import { Component, OnInit } from '@angular/core';
import { Product } from '../../interfaces/product.interface';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  public products: Product[] = [];
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts(): void {
    this.http
      .get<Product[]>('http://localhost:3000/api/product')
      .subscribe((data) => {
        this.products = data;
      });
  }
  deleteProduct(productId: number): void {
    this.http
      .delete(`http://localhost:3000/api/product/${productId}`)
      .subscribe(() => {
        this.products = this.products.filter((product) => product.id !== productId);
      });
  }

}
