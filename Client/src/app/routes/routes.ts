import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from '../app.component'
import { LoginComponent } from '../components/login/login.component'
import { SignupComponent } from '../components/signup/signup.component';

  

const routes: Routes = [

  {path : '', component : AppComponent },

  {path : 'login', component : LoginComponent},

  {path : 'signup', component : SignupComponent}

];

  
@NgModule({

  imports: [RouterModule.forChild(routes)],

  exports: [RouterModule]

})

export class userRoutingModule { }