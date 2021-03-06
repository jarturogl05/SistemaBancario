import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserGuardGuard implements CanActivate {

  constructor(private cookieService: CookieService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    const checkrole = this.cookieService.check('role')
    const role = this.cookieService.get('role');
    console.log(checkrole)
    if(!checkrole){
      return true      
    }else{
      switch(role){
        case 'admin':
          this.router.navigate(['/', 'admin']);
          break;
        case 'client':
          this.router.navigate(['/', 'client']);
          break;
        case 'cashier':
          this.router.navigate(['/', 'cashier'])
      }
    }
    return true
  }
  
}
