import { NgForm } from '@angular/forms';
import { CategoryService } from './../services/category.service';
import { Category } from './../models/category';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from './../models/product';
import { ProductService } from './../services/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  loading:boolean=false
  product: Product;
  categories: Category[] = [];
  model: any = {
    name: "this.product.name",
    price: 20000,
    categoryId: "1"
  };
  error: string = "";
  constructor(private productService:ProductService,private router:Router,private route:ActivatedRoute, private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.route.params.subscribe(param=>
      {
        const id=param["productId"]
        this.productService.getProductById(id)
        .subscribe(result=>
          {
            this.product={...result,id:id}
          })
      })
      this.categoryService.getCategories().subscribe(data => {
        this.categories = data;
      });
  }
  updateProduct(form: NgForm) {

    const extensions = ["jpeg","jpg","png"];
    const extension = this.product.imageUrl.split(".").pop();

    if(extensions.indexOf(extension) == -1) {
      this.error ="resim uzantısı sadece jpeg, jpg, png olmalıdır.";
      return;
    }

    this.product.name=form.value.name
    this.product.price=form.value.price
    this.product.imageUrl=form.value.imageUrl
    this.product.description=form.value.description
    this.product.isActive=form.value.isActive
    this.product.categoryId=form.value.categoryId

    // const product = { 
    //   id: this.product.id, 
    //   name: this.product.name, 
    //   price: this.product.price, 
    //   imageUrl: this.product.imageUrl, 
    //   description: this.product.description, 
    //   isActive: this.product.isActive, 
    //   categoryId: this.product.categoryId
    // }
    console.log(this.product)
    if(form.valid) {
      this.productService.updateProduct(this.product).subscribe(data => {
        this.router.navigate(['/products']);
      });
    } else {
      this.error ="formu kontrol ediniz.";
    }

  }

}
