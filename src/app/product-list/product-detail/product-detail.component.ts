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
  loading:boolean=false

  constructor(private route:ActivatedRoute,private productService:ProductService) { 
  }

  ngOnInit(): void {
    this.route.params.subscribe(param=>
    {
      this.loading=true
      const id=param["productId"]
      this.productService.getProductById(id)
      .subscribe(result=>
        {
          this.product={...result,id:id}
          this.loading=false
        })
    })
  }

  // unselectProduct(){
  //   this.unSelectEvent.emit()
  // }

}
