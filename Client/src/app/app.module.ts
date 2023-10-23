import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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

import { TokenInterceptor } from './service/http-interceptor.service';
import { AdminHomeComponent } from './admin-components/admin-home/admin-home.component';
import { RouterModule } from '@angular/router';

import { MdbModalService, MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { CartComponent } from './components/cart/cart.component';
import { AppRoutingModule } from './app-routing.module';
import { JwtModule } from '@auth0/angular-jwt';
import { DeleteConfirmationComponent } from './admin-components/delete-confirmation/delete-confirmation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { DeleteCartComponent } from './components/delete-cart/delete-cart.component';
import { ChekoutComponent } from './components/chekout/chekout.component';
import { DeleteProductsConfirmationComponent } from './admin-components/delete-products-confirmation/delete-products-confirmation.component';
import { DeleteCartAllComponent } from './components/delete-cart -all/delete-cart.component';
import { OrderComponent } from './components/order/order.component';
import { ProductsListComponent } from './admin-components/products-list/products-list.component';
import { UpdateProductComponent } from './admin-components/update-product/update-product.component';
import { AddProductsComponent } from './admin-components/add-products/add-products.component';
import { FooterComponent } from './components/footer/footer.component';

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
    CartComponent,
    AdminHomeComponent,
    DeleteConfirmationComponent,
    ProductsListComponent,
    DeleteCartComponent,
    ChekoutComponent,
    DeleteProductsConfirmationComponent,
    DeleteCartAllComponent,
    OrderComponent,
    UpdateProductComponent,
    AddProductsComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
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
    MdbModalService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
