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

  ngOnInit(): void {
    this.getcartCountFromStorage()
  }
  onProductSelected(): void {
    console.log(this.cartCount+1)
  this.cartCount++
  }

  onSearch(query: string): void {
    this.searchTerm = query;
  }
  getcartCountFromStorage ():void{
    const items=localStorage.getItem('cart-products')
    if (items )
    {
      this.cartCount=JSON.parse(items).length
    }
  }
}
