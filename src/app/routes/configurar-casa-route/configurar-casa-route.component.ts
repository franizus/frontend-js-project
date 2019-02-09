import { FocoRestService } from './../../../services/rest/foco-rest.service';
import { LedsRestService } from './../../../services/rest/leds-rest.service';
import { Casa } from 'src/app/interfaces/casa';
import { CasaRestService } from './../../../services/rest/casa-rest.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-configurar-casa-route',
  templateUrl: './configurar-casa-route.component.html',
  styleUrls: ['./configurar-casa-route.component.css']
})
export class ConfigurarCasaRouteComponent implements OnInit {
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
          const totalLed$ = this._ledsRestService.getTotalLed();

          totalLed$.subscribe(
            total => {
              for (let i = 0; i < total.totalLEDs; i++) {
                const obj = {
                  idPlaca: i,
                  estado: false,
                  guardado: false
                };
                this.leds.push(obj);
              }
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

  guardarFoco(idLed) {
    const led = this.leds[idLed];
    this.leds[idLed].guardado = true;
    const guardarFoco$ = this._focoRestService.create(
      led.idPlaca,
      led.estado,
      led.nombreLugar,
      this.casa.id
    );

    guardarFoco$.subscribe(
      foco => {
        console.log(foco);
      },
      error => {
        console.error(error);
      }
    );
  }

  cambiarEstado(idLed) {
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
  }
}
