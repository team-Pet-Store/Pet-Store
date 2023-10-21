import { Component, Output, EventEmitter,Input } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { GeneralService } from 'src/app/service/genral.service';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css'],
})
export class NavigationBarComponent {
  @Output() categorySelected = new EventEmitter<{
    animal: string;
    category: string;
  }>();
  @Output() searchQuery = new EventEmitter<string>();
  searchedValue = '';
  @Input() cartCount:number= 0;
  
  constructor(
    public generalServices: GeneralService,
    public authService: AuthService
  ) {}
  ngOnInit(): void {}
  onCategorySelected(animal: string, category: string): void {
    this.categorySelected.emit({ animal, category });
  }
  onSearch() {
    this.searchQuery.emit(this.searchedValue);
  }
  logout() {
    return this.authService.logout();
  }
  isLoggedIn(): boolean {
    return this.generalServices.isLoggedIn();
  }
}
