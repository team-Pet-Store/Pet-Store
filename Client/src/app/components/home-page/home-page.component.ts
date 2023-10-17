import { Component, Input } from '@angular/core';
import { ProductList } from '../product-list/product-list.component';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent {
  @Input() items: ProductList[] = [];
  @Input() currentUser: any;

  // handleSelect(event: any) {
  // }

  // onSearch(event: any) {
  // }

  // addToCart(userId: number, productId: number) {
  // }
}
