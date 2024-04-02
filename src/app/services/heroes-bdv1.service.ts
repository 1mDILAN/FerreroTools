import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeroesBDV1Service {

  constructor(public http : HttpClient) { }
}
