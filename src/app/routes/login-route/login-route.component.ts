import { Router } from '@angular/router';
import { AuthService } from './../../../services/rest/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-route',
  templateUrl: './login-route.component.html',
  styleUrls: ['./login-route.component.css']
})
export class LoginRouteComponent implements OnInit {
  usuario = {
    correo: '',
    password: ''
  };

  constructor(
    private readonly _authService: AuthService,
    private readonly _router: Router
  ) {}

  ngOnInit() {}

  login() {
    const respuestaLogin$ = this._authService.login(
      this.usuario.correo,
      this.usuario.password
    );
    respuestaLogin$.subscribe(
      usuario => {
        this._authService.usuario = usuario;
        const url = ['/usuario-inicio'];

        this._router.navigate(url);
      },
      error => {
        console.error(error);
      }
    );
  }
}
