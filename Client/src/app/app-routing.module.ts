import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './components/signup/signup.component'
import { LoginComponent } from './components/login/login.component'
import {HomePageComponent} from './components/home-page/home-page.component'
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { authGuard } from './service/auth.guard';
// import { adminGuard } from './service/admin.guard';



const routes: Routes = [
  {path: 'home-page', component: HomePageComponent, canActivate:[authGuard], },
  {path: 'signup', component: SignupComponent},
  {path: 'login', component: LoginComponent},
  {path : '' ,  component : LandingPageComponent, },
];
// canActivate:[adminGuard]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }