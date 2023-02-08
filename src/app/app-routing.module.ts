import { ProductCreateComponent } from './product-create/product-create.component';
import {  ProductDetailComponent } from './product-list/product-detail/product-detail.component';
import { ProductListComponent } from './product-list/product-list.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"products/create",component:ProductCreateComponent},
  {path:"products",component:ProductListComponent},
  {path:"products/:productId",component:ProductDetailComponent},
  {path:"products/category/:categoryId",component:ProductListComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
