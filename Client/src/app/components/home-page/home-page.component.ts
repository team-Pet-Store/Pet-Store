import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent {
  public selectedCategory: { animal: string; category: string } | null = null;

  onCategorySelected(event: { animal: string; category: string }): void {
    if (event.animal === '' && event.category === '') {
      this.selectedCategory = null;
    } else {
      this.selectedCategory = event;
    }
  }
}
