import { Product } from './../models/product';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private url ="https://ng-shopapp-dc819-default-rtdb.firebaseio.com/"

  constructor(private http:HttpClient) { }

  getProducts(categoryId):Observable<Product[]>{ // categoryId varsa ona göre getir yoksa hepsini getir
    return this.http
    .get<Product[]>(this.url+"products.json")
    .pipe(
      map(data=>{
        const products:Product[]=[]
        for (const key in data) {
          if (categoryId) {
            if (categoryId==data[key].categoryId) {
              products.push({...data[key],id:key})
            }
          }else{
            products.push({...data[key],id:key})
          }
        }
        return products
      })
    )
  }
  createProduct(product:Product):Observable<Product>{
    return this.http.post<Product>(this.url+"products.json",product)
  }
  getProductById(id:string):Observable<Product>{
    return this.http.get<Product>(this.url+"products/"+id+".json")
  }
}
