import { Category } from './category';
export class CategoryRepository{

    private categories:Category[]=[
        {id:1,name:"Telefon"},
        {id:2,name:"Bilgisayar"},
        {id:3,name:"Beyaz Eşya"},
      ]
      getCategories(){
        return this.categories
      }
      
}