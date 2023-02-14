import { AuthService } from './auth.service';
import { Product } from './../models/product';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map,delay, take, exhaustMap, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private url =""

  constructor(private http:HttpClient,private authService:AuthService) { }

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
      }),
      delay(1000)
    )
  }

  getProductById(id:string):Observable<Product>{
    return this.http.get<Product>(this.url+"products/"+id+".json").pipe(delay(1000))
  }
  updateProduct(product: Product):Observable<Product>{
      return this.authService.user.pipe(
            take(1),
            tap(user => console.log(user)),
            exhaustMap(user => {
                return this.http.patch<Product>(this.url + "products/"+product.id+".json?auth=" + user?.token, product);//"products.json?auth=" + user?.getToken() firebase da böyle olması gerekiyor
            })
        );
  }

  createProduct(product: Product): Observable<Product> {

    //JWT
    //her kullanıcı  ürün ekleyemesin diye. (firebasede de rule güncellendi bunun için)
    return this.authService.user.pipe(
        take(1),
        tap(user => console.log(user)),
        exhaustMap(user => {
            return this.http.post<Product>(this.url + "products.json?auth=" + user?.token, product);//"products.json?auth=" + user?.getToken() firebase da böyle olması gerekiyor
        })
    );
  }
  deleteProduct(product: Product): Observable<Product>{
    return this.authService.user.pipe(
      take(1),
      exhaustMap(user => {
        return this.http.delete<Product>(this.url + "products/"+product.id+".json?auth=" + user?.token);//"products.json?auth=" + user?.getToken() firebase da böyle olması gerekiyor
      })
    );
    
  }
}
