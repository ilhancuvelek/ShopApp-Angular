import { ProductService } from './../services/product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  constructor(private productService:ProductService,private router:Router) { }

  ngOnInit(): void {
  }
  saveProduct(name,imageUrl,description,price,isActive,categoryId){

    const product= {id:1,
       name:name.value,
       price:price.value,
       imageUrl:imageUrl.value,
       description:description.value,
       isActive:isActive.value,
       categoryId:categoryId.value
     }
 
     this.productService.createProduct(product)
     .subscribe(data=>{
      this.router.navigate(["/products"])
    })
   }

}
