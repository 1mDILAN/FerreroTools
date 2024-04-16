import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URL_SERVICIOS_MONGODB } from '../config/url.servicios';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  userToken: any;

  constructor(private http: HttpClient) { }

  //Token
 public leerToken() {
    if (localStorage.getItem('token')) {
      this.userToken = localStorage.getItem('token');
    } else {
      this.userToken = '';
    }

    return this.userToken;
  }


//GetHeroes
getHeroes(): //Observable<Heroe[]>
   any {
     var headers_object = new HttpHeaders().set('x-token', this.leerToken());
 
     //console.log(headers_object);
 
     //let url1 = URL_SERVICIOS_MONGODB + "/heroes";
 
     let url = `${URL_SERVICIOS_MONGODB}/heroes`;
 
     //console.log(url);
 
     return this.http.get(url).pipe(
       map((data: any) => {
         console.log(data);
         return data;
       })
     );
   }

   // Obtener héroe por ID
  getHeroe(id: string): Observable<any> {
    const headers_object = new HttpHeaders().set('x-token', this.leerToken());
    const url = `${URL_SERVICIOS_MONGODB}/heroes/${id}`;

    return this.http.get(url, { headers: headers_object });
  }


  // Obtener Imagenes

  getFotos():any
  {
    var headers_object = new HttpHeaders().set('x-token', this.leerToken());

    let url = `${URL_SERVICIOS_MONGODB}/multimedias`;

    return this.http.get(url).pipe(
      map((data: any) => {
        console.log(data);
        return data;
      })
    );
  }

}
