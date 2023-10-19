import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-navigation-bar',
  templateUrl: './admin-navigation-bar.component.html',
  styleUrls: ['./admin-navigation-bar.component.css']
})
export class AdminNavigationBarComponent {

    constructor(private router: Router){}

  logout(){
   localStorage.clear()
  // return this.router.navigate(["login"])
}

}
