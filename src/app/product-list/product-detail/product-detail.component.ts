import { ProductService } from './../../services/product.service';
import { ProductRepository } from '../../models/product.repository';
import { Product } from '../../models/product';
import { Component,EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  // @Input() prd:Product
  // @Output() unSelectEvent=new EventEmitter<void>()

  product:Product
  productRepository:ProductRepository
  constructor(private route:ActivatedRoute,private productService:ProductService) { 
    this.productRepository=new ProductRepository()
  }

  ngOnInit(): void {
    this.route.params.subscribe(param=>
    {const id=param["productId"]
      this.productService.getProductById(id).subscribe(result=>{this.product={...result,id:id}})
    })
  }

  // unselectProduct(){
  //   this.unSelectEvent.emit()
  // }

}
