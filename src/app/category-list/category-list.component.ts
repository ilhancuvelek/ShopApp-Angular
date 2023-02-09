import { CategoryService } from './../services/category.service';
import { CategoryRepository } from './../models/category.repository';
import { Category } from './../models/category';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  categories:Category[]
  categoryRepository:CategoryRepository

  selectedCategory:Category | null

  constructor(private categoryService:CategoryService) {
   
   }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(data=>{this.categories=data })
  }

  displayAll=true
  selectCategory(category?:Category){
    if (category) {
      this.selectedCategory=category
      this.displayAll=false
    }else{
      this.selectedCategory=null
      this.displayAll=true
    }
    
  }
}
