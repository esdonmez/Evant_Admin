import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AccountService } from '../providers/account.service';
import { isNullOrUndefined } from 'util';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(public router: Router) {}

  canActivate(): boolean {
    const token = sessionStorage.getItem('token');
    
    if(token != null && token != "") {
      return true;
    } else {
      this.router.navigate(['/account']);
      return false;
    }
  }
}