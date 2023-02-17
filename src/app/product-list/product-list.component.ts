import { ProductService } from './../services/product.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { ProductRepository } from './../models/product.repository';
import { Product } from './../models/product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products:Product[]=[]
  loading:boolean=false

  constructor(private route:ActivatedRoute,private productService:ProductService) { 
  }

  ngOnInit(): void {
    this.route.params.subscribe(param=>
      {
        if (param["categoryId"]) {
          this.loading=true
          this.productService.getProducts(param["categoryId"])
          .subscribe(data=>
          {
            this.products=data
            this.loading=false
          })
        }else if(param["query"])
          this.loading=true
          this.productService.getProductsByQuery(param["query"])
          .subscribe(data=>
          {
            this.products=data
            this.loading=false
          })
      })
  }
  // selectProduct(product:Product){
  //   this.selectedProduct=product
  // }
  // unselectProduct(){
  //   this.selectedProduct=null
  // }

}
