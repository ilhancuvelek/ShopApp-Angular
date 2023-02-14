import { Product } from './../models/product';
import { ProductService } from './../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {

  products:Product[]=[]
  loading:boolean=false

  constructor(private route:ActivatedRoute,private productService:ProductService) { 
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

}
