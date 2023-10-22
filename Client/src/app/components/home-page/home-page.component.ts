import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent {
  public selectedCategory: { animal: string; category: string } | null = null;
  public searchTerm: string | '' = '';
  public cartCount:number=0;

  onCategorySelected(event: { animal: string; category: string }): void {
    if (event.animal === '' && event.category === '') {
      this.selectedCategory = null;
    } else {
      this.selectedCategory = event;
    }
  }
  onProductSelected(): void {
    console.log(this.cartCount+1)
  this.cartCount++
  }

  onSearch(query: string): void {
    this.searchTerm = query;
  }
}
