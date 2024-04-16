import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URL_SERVICIOS_MONGODB } from '../config/url.servicios';
import { map } from 'rxjs/operators'; // Importa map desde 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class HeroesBDV1Service {
  userToken: any;

  constructor(private http: HttpClient) { // Inyecta HttpClient en el constructor
  }

  // Token
  public leerToken() {
    if (localStorage.getItem('token')) {
      this.userToken = localStorage.getItem('token');
    } else {
      this.userToken = '';
    }

    return this.userToken;
  }

  // GetHeroes
  getHeroes(): any {
    const headers_object = new HttpHeaders().set('x-token', this.leerToken());
    const url = `${URL_SERVICIOS_MONGODB}/heroes`;

    return this.http.get(url, { headers: headers_object }).pipe( // Agrega headers a la solicitud
      map((data: any) => {
        console.log(data);
        return data;
      })
    );
  }
}
