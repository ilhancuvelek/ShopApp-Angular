import { Category } from './../models/category';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  url="https://ng-shopapp-dc819-default-rtdb.firebaseio.com/"
  constructor(private http:HttpClient) { }

  getCategories():Observable<Category[]>{
    return this.http.get<Category[]>(this.url+"categories.json")
    .pipe(
      map(data=>{
        const categories:Category[]=[]

        for (const key in data) {
          categories.push({...data[key],id:key})
        }

        return categories
      })
    )
  }
  createCategory(category:Category):Observable<Category>{
    return this.http.post<Category>(this.url+"categories.json",category)
  }
}
