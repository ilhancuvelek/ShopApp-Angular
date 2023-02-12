import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isAuthenticated:boolean=false

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
    this.authService.user.subscribe(user=>{
      this.isAuthenticated=!!user //user null ise ilk ! nullu false yapar ikinci ! true yapar
    })
  }

}
