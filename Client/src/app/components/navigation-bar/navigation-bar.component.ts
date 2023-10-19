import { Component, Output, EventEmitter } from '@angular/core';
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
  constructor(
    public generalServices: GeneralService,
    public authService: AuthService
  ) {}
  ngOnInit(): void {}
  onCategorySelected(animal: string, category: string): void {
    this.categorySelected.emit({ animal, category });
  }
  logout() {
    return this.authService.logout();
  }
  isLoggedIn(): boolean {
    return this.generalServices.isLoggedIn();
  }
}
