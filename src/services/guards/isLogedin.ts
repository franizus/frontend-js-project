import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../rest/auth.service';

@Injectable()
export class IsLogedIn implements CanActivate {
  constructor(
    private readonly _authService: AuthService,
    private readonly _router: Router
  ) {}

  canActivate(): boolean {
    if (this._authService.usuario != undefined) {
      return true;
    } else {
      this._router.navigate(['/login']);
      return false;
    }
  }
}
