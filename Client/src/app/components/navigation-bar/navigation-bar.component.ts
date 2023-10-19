import { Component } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { GeneralService } from 'src/app/service/genral.service';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent {
  constructor(public GeneralServices :GeneralService, public AuthServices :AuthService ){}
  ngOnInit(): void {
  }
  logout(){
    return this.AuthServices.logout()
  }
  isLoggedIn(): boolean {
    return this.GeneralServices.isLoggedIn();
  }
}
