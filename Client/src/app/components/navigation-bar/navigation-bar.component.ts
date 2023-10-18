import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css'],
})
export class NavigationBarComponent {
  @Output() categorySelected: EventEmitter<{
    animal: string;
    category: string;
  }> = new EventEmitter();

  onCategorySelected(animal: string, category: string): void {
    this.categorySelected.emit({ animal, category });
  }
}
