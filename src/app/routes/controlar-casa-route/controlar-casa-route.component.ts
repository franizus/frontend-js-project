import { FocoRestService } from './../../../services/rest/foco-rest.service';
import { CasaRestService } from './../../../services/rest/casa-rest.service';
import { Casa } from './../../interfaces/casa';
import { LedsRestService } from 'src/services/rest/leds-rest.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-controlar-casa-route',
  templateUrl: './controlar-casa-route.component.html',
  styleUrls: ['./controlar-casa-route.component.css']
})
export class ControlarCasaRouteComponent implements OnInit {
  casa: Casa;
  leds: any[] = [];

  constructor(
    private readonly _route: ActivatedRoute,
    private readonly _casaRestService: CasaRestService,
    private readonly _ledsRestService: LedsRestService,
    private readonly _focoRestService: FocoRestService
  ) {}

  ngOnInit() {
    const rutaActiva$ = this._route.params;

    rutaActiva$.subscribe(parametros => {
      const casaEncontrada = this._casaRestService.findOneById(
        +parametros.idCasa
      );

      casaEncontrada.subscribe(
        casa => {
          this.casa = casa;
          const focos$ = this._focoRestService.findAllByCasa(this.casa.id);
          focos$.subscribe(
            focos => {
              this.leds = focos;
              console.log(this.leds);
            },
            error => {
              console.error(error);
            }
          );
        },
        error => {
          console.error(error);
        }
      );
    });
  }

  cambiarEstado(idLed) {
    const led = this.leds[idLed];
    const estado = !this.leds[idLed].estado;
    const status = estado ? 'on' : 'off';
    this.leds[idLed].estado = estado;
    const ledSwitch$ = this._ledsRestService.switchLed(idLed, status);
    ledSwitch$.subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.error(error);
      }
    );
    const focos$ = this._focoRestService.updateOneById(led);
    focos$.subscribe(
      focos => {
        console.log(focos);
      },
      error => {
        console.error(error);
      }
    );
  }
}
