import { Injectable } from '@angular/core';

import { Heroe } from '../interfaces/heroes.interface';

import { Observable } from 'rxjs';
import { ArrayType } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  constructor( ){
 }

 filtroHeroe = '';

  public heroes:Heroe[] = [
    {
      nombre: "Spider-Man 2099",
      bio: "Miguel O'Hara es un joven científico mitad irlandés mitad mexicano que trabaja para la corporación Alchemax en un proyecto para crear seres humanos mejorados genéticamente, inspirándose en las habilidades del Spider-Man del siglo XX.",
      img: "../assets/img/spiderman2099.jpg",
      aparicion: "1974-11-01",
      casa: "Marvel",
      id:7
    }
  ];


  getHeroes():Heroe[]{
    return this.heroes;
  }



  getHeroe( idx: number ){
    return this.heroes[idx - 1 ];
  }

}
