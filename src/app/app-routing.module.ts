import { AuthGuard } from './guards/auth-guard';
import { AdminGuard } from './guards/admin-guard';
import { AuthComponent } from './auth/auth.component';
import { CategoryCreateComponent } from './category-create/category-create.component';
import { ProductCreateComponent } from './product-create/product-create.component';
import {  ProductDetailComponent } from './product-list/product-detail/product-detail.component';
import { ProductListComponent } from './product-list/product-list.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"products/create",component:ProductCreateComponent,canActivate:[AdminGuard]},
  {path:"categories/create",component:CategoryCreateComponent,canActivate:[AdminGuard]},
  {path:"products",component:ProductListComponent},
  {path:"products/:productId",component:ProductDetailComponent,canActivate:[AuthGuard]},
  {path:"products/category/:categoryId",component:ProductListComponent},
  {path:"auth",component:AuthComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
