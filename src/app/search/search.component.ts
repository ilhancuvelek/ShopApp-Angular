import { NgForm } from '@angular/forms';
import { Product } from './../models/product';
import { ProductService } from './../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  products:Product[]=[]
  query1:string
  loading:boolean=false
  model: any = {
    query:""
  };
  constructor(private route:ActivatedRoute,private productService:ProductService,private router:Router) { }

  ngOnInit(): void {
    
  }
  getProductsByQuery(form:NgForm){
    this.query1=form.value.query
    this.router.navigate(["/products/search/"+this.query1])
  }
 

}
