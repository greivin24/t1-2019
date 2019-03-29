import { DataStorageService } from './../data-storage.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../class/interface';


@Injectable()
export class AuthGuard implements CanActivate {


  constructor(private dataStorageService: DataStorageService, private _router: Router) {
  }

  user:User;
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    this.user = this.dataStorageService.getObjectValue("activo")
    if (this.user != null) {
        return true;
    }

    // navigate to login page
    this._router.navigate(['/login']);
    // you can save redirect url so after authing we can move them back to the page they requested
    return false;

  }

}
