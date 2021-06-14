import { UsersService } from './../../services/users.service';
import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private UsersService:UsersService, private cookieService: CookieService ) { }

  ngOnInit(): void {
  }

  public doLogin(data:any){

    this.UsersService.postLogin('http://localhost:8000/login', data).subscribe( (respuesta:any) =>{
      this.cookieService.set('token', respuesta.token);
      this,this.cookieService.set('role', respuesta.role);
    })

  }
}
