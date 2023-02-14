import { NgForm } from '@angular/forms';
import { Product } from './../models/product';
import { ProductService } from './../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {

  products:Product[]=[]
  loading:boolean=false

  constructor(private route:ActivatedRoute,private productService:ProductService,private router:Router) { 
  }

  ngOnInit(): void {
    this.route.params.subscribe(param=>
      {
        this.loading=true
        this.productService.getProducts(param["categoryId"])
        .subscribe(data=>
          {
            this.products=data
            this.loading=false
          })
      })
  }
  deleteProduct(product:Product){
    this.productService.deleteProduct(product).subscribe(prd=>{
      this.router.navigate(['/products'])
    })
  }

}
