import { Usuario } from './../../interfaces/usuario';
import { UsuarioRestService } from './../../../services/rest/usuario-rest.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-route',
  templateUrl: './register-route.component.html',
  styleUrls: ['./register-route.component.css']
})
export class RegisterRouteComponent implements OnInit {
  usuario = {
    nombre: '',
    correo: '',
    password: ''
  };
  constructor(
    private readonly _usuarioRestService: UsuarioRestService,
    private readonly _router: Router
  ) {}

  ngOnInit() {}

  register() {
    const crearUsuario$ = this._usuarioRestService.create(
      this.usuario.nombre,
      this.usuario.correo,
      this.usuario.password
    );

    crearUsuario$.subscribe(
      (usuario: Usuario) => {
        const url = ['/login'];

        this._router.navigate(url);
      },
      error => {
        console.error('Error: ', error);
      }
    );
  }
}
