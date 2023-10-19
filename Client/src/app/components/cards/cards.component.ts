import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../interfaces/product.interface';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
})
export class CardsComponent implements OnInit {
  @Input() selectedCategory: { animal: string; category: string } | null = null;
  public products: Product[] = [];
  public selectedProduct: Product | null = null;
  @Input() filteredProducts: Product[] = [];
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts(): void {
    this.http
      .get<Product[]>('http://localhost:3000/api/product')
      .subscribe((data) => {
        this.products = data;
        this.filteredProducts = this.products;
      });
  }
  ngOnChanges(): void {
    this.filterProducts();
  }

  filterProducts(): void {
    if (this.selectedCategory) {
      const { animal, category } = this.selectedCategory;
      this.filteredProducts = this.products.filter(
        (product) =>
          product.animal.toLowerCase() === animal.toLowerCase() &&
          product.category.toLowerCase() === category.toLowerCase()
      );
    } else {
      this.filteredProducts = this.products;
    }
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
}
