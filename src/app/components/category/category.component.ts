import { Component, OnInit } from '@angular/core';
import { Category } from '../../models/category';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent implements OnInit {
  categories : Category[] = [];
  currentCategory:Category;
 
  constructor(private categoryService:CategoryService) { }
  
  ngOnInit(): void {
    this.getCategories();
    }

  getCategories(){
    this.categoryService.getCategories().subscribe(response=>{
      this.categories=response.data
    })
  }
  
  setCurrentCategory(category:Category){
  this.currentCategory=category
  }

  getCurrentCategoryClass(Category:Category){
    if(Category == this.currentCategory){
      return "list-group-item active"
    }else{
      return "list-group-item"
    }
  }

  getAllCategoryClass(){
    if (!this.currentCategory){
      return"list-group-item active"
    }
    else {
      return "list-group-item"
    }
  }

}
