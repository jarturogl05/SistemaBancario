import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import {MenuItem} from '../../../interfaces/MenuItem'

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @Input()
  menuItems!: MenuItem[];
  
  constructor(private cookieService: CookieService, private router: Router ) { }

  ngOnInit(): void {
  }

  logOut(){
    this.cookieService.set('role','');
    this.cookieService.set('token','');
    this.router.navigate(['/', 'login'])

  }

}
