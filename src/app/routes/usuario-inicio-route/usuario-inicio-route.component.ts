import { Casa } from './../../interfaces/casa';
import { AuthService } from './../../../services/rest/auth.service';
import { CasaRestService } from './../../../services/rest/casa-rest.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuario-inicio-route',
  templateUrl: './usuario-inicio-route.component.html',
  styleUrls: ['./usuario-inicio-route.component.css']
})
export class UsuarioInicioRouteComponent implements OnInit {
  casas = [];

  constructor(
    private readonly _casaRestService: CasaRestService,
    private readonly _authService: AuthService
  ) {}

  ngOnInit() {
    const casas$ = this._casaRestService.findAllByUsuario(
      this._authService.usuario.id
    );

    casas$.subscribe(
      (casas: Casa[]) => {
        this.casas = casas;
      },
      error => {
        console.error('Error', error);
      }
    );
  }

  borrarCasa(idCasa: number) {
    const casaEliminada$ = this._casaRestService.delete(idCasa);

    casaEliminada$.subscribe(
      (casaEliminada: Casa) => {
        console.log('Se elimino:', casaEliminada);

        const indice = this.casas.findIndex(casa => casa.id === idCasa);

        this.casas.splice(indice, 1);
      },
      error => {
        console.error('Error', error);
      }
    );
  }
}
