import { environment } from './../../environments/environment';
import { Usuario } from './../../app/interfaces/usuario';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class UsuarioRestService {
  nombreModelo = '/Usuario';

  constructor(private readonly _httpClient: HttpClient) {}

  findAll(): Observable<Usuario[]> {
    const razas$ = this._httpClient.get(
      environment.url + this.nombreModelo
    ) as Observable<Usuario[]>;

    return razas$;
  }

  delete(id: number): Observable<Usuario> {
    return this._httpClient.delete(
      environment.url + this.nombreModelo + `/${id}`
    ) as Observable<Usuario>;
  }

  create(
    nombre: string,
    correo: string,
    password: string
  ): Observable<Usuario> {
    const objetoAGuardar = {
      nombre: nombre,
      correo: correo,
      password: password
    };

    const url = environment.url + this.nombreModelo;

    return this._httpClient.post(url, objetoAGuardar) as Observable<Usuario>;
  }

  findOneById(id: number | string): Observable<Usuario> {
    const url = environment.url + this.nombreModelo + '/' + id;

    return this._httpClient.get(url) as Observable<Usuario>;
  }

  updateOneById(usuario: Usuario) {
    const url = environment.url + this.nombreModelo + '/' + usuario.id;

    return this._httpClient.put(url, usuario) as Observable<Usuario>;
  }
}
