import { environment } from './../../environments/environment';
import { Usuario } from './../../app/interfaces/usuario';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {
  usuario: any;
  constructor(private readonly _httpClient: HttpClient) {}

  login(username: string, password: string): Observable<Usuario> {
    const url = environment.url + '/Usuario/login';

    return this._httpClient.post(url, {
      username: username,
      password: password
    }) as Observable<Usuario>;
  }
}
