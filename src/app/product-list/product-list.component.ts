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
  productRepository:ProductRepository
  
  // selectedProduct:Product | null

  constructor(private route:ActivatedRoute,private productService:ProductService) { 
    //this.productRepository=new ProductRepository()
    // this.products=this.productRepository.getProducts()
  }

  ngOnInit(): void {
    this.route.params.subscribe(param=>
      {
        this.productService.getProducts(param["categoryId"]).subscribe(data=>{this.products=data})
      })
  }
  // selectProduct(product:Product){
  //   this.selectedProduct=product
  // }
  // unselectProduct(){
  //   this.selectedProduct=null
  // }

}
