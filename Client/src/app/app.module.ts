import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


import { AppComponent } from './app.component';

import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { CardsComponent } from './components/cards/cards.component';
import { UsersListComponent } from './admin-components/users-list/users-list.component';
import { AdminNavigationBarComponent } from './admin-components/admin-navigation-bar/admin-navigation-bar.component';

import { TokenInterceptor } from './service/http-interceptor.service';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { JwtModule } from '@auth0/angular-jwt';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CartComponent } from './components/cart/cart.component';

export function tokenGetter() {
  return localStorage.getItem("token");
}

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    LoginComponent,
    SignupComponent,
    CardsComponent,
    UsersListComponent,
    AdminNavigationBarComponent,
   CartComponent,
    ProductListComponent,
  
   

  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    AppRoutingModule,
    JwtModule.forRoot({
      config : {
        tokenGetter : tokenGetter ,
        allowedDomains: ['*'],
        disallowedRoutes: [],
      }
    })
    

    
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
