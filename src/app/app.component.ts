import { Router } from '@angular/router';
import { AuthService } from './../services/rest/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private readonly _authService: AuthService,
    private readonly _router: Router
  ) {}

  ngOnInit() {}

  isLogedin(): boolean {
    return this._authService.usuario != undefined;
  }

  getNombreUsuario(): string {
    if (this.isLogedin()) {
      return this._authService.usuario.nombre;
    } else {
      return '';
    }
  }

  logout(flag) {
    this._authService.usuario = undefined;
    const url = ['/'];

    this._router.navigate(url);
  }
}
