import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdditemComponent } from './additem/additem.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {
    path:'',component:LoginComponent
  },
  {
    path:'signup',component:SignupComponent
  },
  {
    path:'home',component:HomeComponent
  },
  {
    path:'additem',component:AdditemComponent
  },
  {
    path:'products',component:ProductsComponent
  },
  {
    path:'cartItems',component:CartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
