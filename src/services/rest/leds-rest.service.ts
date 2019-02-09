import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class LedsRestService {
  nombreModelo = '/led';

  constructor(private readonly _httpClient: HttpClient) {}

  getTotalLed() {
    const toltalLed$ = this._httpClient.get(
      environment.url + this.nombreModelo + '/totalLed'
    ) as Observable<any>;

    return toltalLed$;
  }

  switchLed(ledNumber: number, status: string) {
    const switchLed$ = this._httpClient.post(
      environment.url + this.nombreModelo + '/controlLed',
      {
        led: ledNumber,
        status: status
      }
    );

    return switchLed$;
  }
}
