import { Component, OnInit, Input } from '@angular/core';
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
  @Input() selectedCategory: { animal: string; category: string } | null = null;
  @Input() searchTerm: string = '';
  public products: Product[] = [];
  public selectedProduct: Product | null = null;
  public filteredProducts: Product[] = [];
  showPlusOne = false;

  constructor(
    private myservice: CardService,
    public mainservice: MainServiceService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts(): void {
    this.http.get<Product[]>('http://localhost:3000/api/product')
      .subscribe((data : any) => {
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
      this.filteredProducts = this.filteredProducts.filter((product) =>
        product.name.toLowerCase().includes(this.searchTerm.toLowerCase())
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
  addToCart(productID: number): void {
    console.log('trigger');
    this.myservice.addToCart(productID).subscribe({
      next: (response: any) => {
        console.log('Product added to cart:', response);
        this.showPlusOne = true;
      
      },
      error: (err: any) => {
        console.log(err);
      },
    });
   onShow(productID){
    setTimeout(() => {
      this.showPlusOne = false;
    }, 1000);
  }

  }
  

 
}
