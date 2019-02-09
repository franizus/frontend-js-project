import { Casa } from './../../interfaces/casa';
import { AuthService } from './../../../services/rest/auth.service';
import { CasaRestService } from './../../../services/rest/casa-rest.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crear-casa-route',
  templateUrl: './crear-casa-route.component.html',
  styleUrls: ['./crear-casa-route.component.css']
})
export class CrearCasaRouteComponent implements OnInit {
  casa = {
    nombre: '',
    descripcion: ''
  };

  constructor(
    private readonly _casaRestService: CasaRestService,
    private readonly _authService: AuthService,
    private readonly _router: Router
  ) {}

  ngOnInit() {}

  crearCasa() {
    const crearCasa$ = this._casaRestService.create(
      this.casa.nombre,
      this.casa.descripcion,
      this._authService.usuario.id
    );

    crearCasa$.subscribe(
      (casa: Casa) => {
        const url = ['/usuario-inicio'];

        this._router.navigate(url);
      },
      error => {
        console.error('Error: ', error);
      }
    );
  }
}
