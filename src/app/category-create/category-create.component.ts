import { Router } from '@angular/router';
import { Category } from './../models/category';
import { CategoryService } from './../services/category.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  styleUrls: ['./category-create.component.css']
})
export class CategoryCreateComponent implements OnInit {

  category:Category
  constructor(private categoryService:CategoryService,private router:Router) { }

  ngOnInit(): void {
  }

  saveCategory(name:any){
    this.categoryService.createCategory({id:0,name:name.value}).subscribe(data=>{this.router.navigate(["/products"])})
  }
}
