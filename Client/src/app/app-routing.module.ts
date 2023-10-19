import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { HomePageComponent } from './components/home-page/home-page.component';
// import { authGuard } from './service/auth.guard';
import { AdminHomeComponent } from './admin-components/admin-home/admin-home.component';
import { CartComponent } from './components/cart/cart.component';
// import { adminGuard } from './service/admin.guard';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  {path : 'admin-home', component : AdminHomeComponent, } ,
  {path:'cart', component:CartComponent}
];
// canActivate:[adminGuard]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
