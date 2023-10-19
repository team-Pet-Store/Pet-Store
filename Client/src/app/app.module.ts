import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';



import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { CardsComponent } from './components/cards/cards.component';
import { UsersListComponent } from './admin-components/users-list/users-list.component';
import { AdminNavigationBarComponent } from './admin-components/admin-navigation-bar/admin-navigation-bar.component';
import { ProductsListComponent } from './admin-components/products-list/products-list.component';
import { TokenInterceptor } from './service/http-interceptor.service';
import { AdminHomeComponent } from './admin-components/admin-home/admin-home.component';
import { RouterModule } from '@angular/router';


import { MdbModalService, MdbModalRef } from 'mdb-angular-ui-kit/modal';


import { AppRoutingModule } from './app-routing.module';
import { JwtModule } from '@auth0/angular-jwt';
import { DeleteConfirmationComponent } from './admin-components/delete-confirmation/delete-confirmation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { DeleteProductsConfirmationComponent } from './admin-components/delete-products-confirmation/delete-products-confirmation.component';
import { AddProductsComponent } from './admin-components/add-products/add-products.component';


export function tokenGetter() {
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ProductDetailsComponent,
    NavigationBarComponent,
    LoginComponent,
    SignupComponent,
    CardsComponent,
    UsersListComponent,
    AdminNavigationBarComponent,
    ProductsListComponent,
    AdminHomeComponent,
    DeleteConfirmationComponent,
    DeleteProductsConfirmationComponent,
    AddProductsComponent,


  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    AppRoutingModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ['*'],
        disallowedRoutes: [],
      },
    }),
    BrowserAnimationsModule,
    MatDialogModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
      
    },
    MdbModalService
  ],
  bootstrap: [AppComponent],
 
})
export class AppModule {}
