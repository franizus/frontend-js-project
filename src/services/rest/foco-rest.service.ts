import { Foco } from './../../app/interfaces/foco';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class FocoRestService {
  nombreModelo = '/Foco';

  constructor(private readonly _httpClient: HttpClient) {}

  findAll(): Observable<Foco[]> {
    const razas$ = this._httpClient.get(
      environment.url + this.nombreModelo
    ) as Observable<Foco[]>;

    return razas$;
  }

  delete(id: number): Observable<Foco> {
    return this._httpClient.delete(
      environment.url + this.nombreModelo + `/${id}`
    ) as Observable<Foco>;
  }

  create(
    idPlaca: string,
    estado: boolean,
    nombreLugar: string,
    idCasa: number
  ): Observable<Foco> {
    const objetoAGuardar = {
      idPlaca: idPlaca,
      estado: estado,
      nombreLugar: nombreLugar,
      idCasa: idCasa
    };

    const url = environment.url + this.nombreModelo;

    return this._httpClient.post(url, objetoAGuardar) as Observable<Foco>;
  }

  findOneById(id: number | string): Observable<Foco> {
    const url = environment.url + this.nombreModelo + '/' + id;

    return this._httpClient.get(url) as Observable<Foco>;
  }

  findAllByCasa(idCasa: number | string): Observable<Foco[]> {
    const url =
      environment.url + this.nombreModelo + '/buscarPorIdCasa?idCasa=' + idCasa;
    return this._httpClient.get(url) as Observable<Foco[]>;
  }

  updateOneById(foco: Foco) {
    const url = environment.url + this.nombreModelo + '/' + foco.id;

    return this._httpClient.put(url, foco) as Observable<Foco>;
  }
}
