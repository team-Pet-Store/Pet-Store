import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service'


@Component({
  selector: 'app-admin-navigation-bar',
  templateUrl: './admin-navigation-bar.component.html',
  styleUrls: ['./admin-navigation-bar.component.css']
})
export class AdminNavigationBarComponent {

    constructor(private router: Router , public authService: AuthService){}

  logout(){
    this.authService.logout()
    this.router.navigate([""])
}
logo() {
  this.router.navigate(["admin-home"]);
  window.location.reload();
}
}
