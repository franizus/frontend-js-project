import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Casa } from 'src/app/interfaces/casa';

@Injectable()
export class CasaRestService {
  nombreModelo = '/Casa';

  constructor(private readonly _httpClient: HttpClient) {}

  findAll(): Observable<Casa[]> {
    const razas$ = this._httpClient.get(
      environment.url + this.nombreModelo
    ) as Observable<Casa[]>;

    return razas$;
  }

  delete(id: number): Observable<Casa> {
    return this._httpClient.delete(
      environment.url + this.nombreModelo + `/${id}`
    ) as Observable<Casa>;
  }

  create(
    nombre: string,
    descripcion: string,
    idUsuario: string
  ): Observable<Casa> {
    const objetoAGuardar = {
      nombre: nombre,
      descripcion: descripcion,
      idUsuario: idUsuario
    };

    const url = environment.url + this.nombreModelo;

    return this._httpClient.post(url, objetoAGuardar) as Observable<Casa>;
  }

  findOneById(id: number | string): Observable<Casa> {
    const url = environment.url + this.nombreModelo + '/' + id;

    return this._httpClient.get(url) as Observable<Casa>;
  }

  findAllByUsuario(idUsuario: number | string): Observable<Casa[]> {
    const url =
      environment.url +
      this.nombreModelo +
      '/buscarPorIdUsuario?idUsuario=' +
      idUsuario;
    return this._httpClient.get(url) as Observable<Casa[]>;
  }

  updateOneById(casa: Casa) {
    const url = environment.url + this.nombreModelo + '/' + casa.id;

    return this._httpClient.put(url, casa) as Observable<Casa>;
  }
}
