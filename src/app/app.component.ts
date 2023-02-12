import { AuthService } from './services/auth.service';
import { ProductService } from './services/product.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{


  constructor(private authService:AuthService) { }

  ngOnInit(): void {
    this.authService.autoLogin()
  }
  

}
