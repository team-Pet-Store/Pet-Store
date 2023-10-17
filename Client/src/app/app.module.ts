import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CartComponent } from './components/cart/cart.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { CardsComponent } from './components/cards/cards.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { TokenInterceptor } from './service/http-interceptor.service';
import { userRoutingModule } from './routes/routes';


@NgModule({
  declarations: [
    
    NavigationBarComponent,
    LoginComponent,
    SignupComponent,
    CardsComponent,
    CartComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    userRoutingModule,
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
