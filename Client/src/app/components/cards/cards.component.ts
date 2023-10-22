import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../interfaces/product.interface';
import { HttpClient } from '@angular/common/http';
import { MainServiceService } from 'src/app/service/main-service.service';
import { CardService } from './cards.service';
import { GeneralService } from 'src/app/service/genral.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
})
export class CardsComponent implements OnInit {
  @Input() selectedCategory: { animal: string; category: string } | null = null;
  @Input() searchTerm: string = '';
  @Output() onAddToCart = new EventEmitter<void>();

  public products: Product[] = [];
  public selectedProduct: Product | null = null;
  public filteredProducts: Product[] = [];

  constructor(
    private myservice: CardService,
    public mainservice: MainServiceService,
    private http: HttpClient,
    public generalServices: GeneralService
  ) {}

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts(): void {
    this.http
      .get<Product[]>('http://localhost:3000/api/product')
      .subscribe((data: any) => {
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
    } else if (this.searchTerm) {
      this.http
        .get<Product[]>(
          `http://localhost:3000/api/product?searchTerm=${this.searchTerm}`
        )
        .subscribe((data: any) => {
          this.filteredProducts = data;
        });
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
  addToCart(productID: number): void {
    console.log('trigger');
    this.myservice.addToCart(productID).subscribe({
      next: (response: any) => {
        console.log('Product added to cart:', response);
        this.onAddToCart.emit();
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }
  isLoggedIn(): boolean {
    return this.generalServices.isLoggedIn();
  }
}
