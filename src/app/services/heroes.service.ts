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
      nombre: "Spider-Man 616",
      bio: "Peter Parker era un estudiante de preparatoria que fue mordido por una araña radiactiva en la secundaria. La picadura le llevó a desarrollar poderes similares a los de una araña. Pronto fue capaz de trepar por las paredes y sentir el peligro inminente. Cuando dejó escapar a un ladrón que más tarde asesinó a su tío Ben, Peter aprendió que «Un gran poder conlleva una gran responsabilidad», y así se convirtió en el asombroso Spider-Man.",
      img: "../assets/img/spiderman616.jpg",
      aparicion: "1941-11-01",
      casa:"Marvel",
      id:1  
    },
    {
      nombre: "Spider-Gwen",
      bio: "Estudiante de ciencias e hija de un capitán de policía retirado, siempre fue el vértice más interesante del triángulo completado por Parker (algo más que un amigo) y Mary Jane Watson. Tras culpar a Spider-Man del accidente que acabó con la vida de su padre, Gwen dejó Nueva York por Europa durante una temporada.",
      img: "../assets/img/spidergwen.jpg",
      aparicion: "1939-05-01",
      casa:"Marvel",
      id:2
    },
    {
      nombre: "Spider-Man Miles Morales",
      bio: "Miles Gonzalo Morales es un adolescente de ascendencia afroamericana y latina residente en Brooklyn; quien después de haber sido mordido por una araña genéticamente modificada diseñada por el némesis de Spider-Man, Norman Osborn, asumió la identidad de Spider-Man en el Universo Ultimate tras la muerte de Peter Parker.",
      img: "../assets/img/spidermanmilesmorales.jpg",
      aparicion: "1964-01-01",
      casa: "Marvel",
      id:3
    },
    {
      nombre: "Superior Spider-Man",
      bio: "Agobiado por los recuerdos más trágicos de Parker -la muerte de Gwen Stacy, la del tío Ben y otros tropiezos-, Otto Octavius se dispone a convertirse en un mejor Spider-Man/Peter de lo que fue su rival. Un Spidey superior, según se lee en los paneles del cómic lanzado en 2013 y escrito por Dan Slott.",
      img: "../assets/img/superiorspiderman.png",
      aparicion: "1962-05-01",
      casa:"Marvel",
      id:4
    },
    {
      nombre: "Scarlet Spider",
      bio: "Para resumir los eventos que rodean a Ben Reilly (y lo necesitamos, porque su saga es una de las más enredadas en la historia de Spider-Man) se trata de un clon de Peter Parker que aparece por primera vez en Amazing Spider-Man #149 (1975). En esta historia un villano conocido como el Jackal crea un clon de Spider-Man y de Gwen Stacy en un intento de torturarlo. Después de pelear contra el Peter original el clon aparentemente muere, pero en otras historias se reveló que sobrevivió el encuentro y durante algunos viajó intentando encontrar su propósito y lugar en el mundo adoptando el nombre de su tío y el apellido de soltera de su tía: Ben Reilly.",
      img: "../assets/img/scarletspider.jpg",
      aparicion: "1940-06-01",
      casa: "Marvel",
      id:5
    },
    {
      nombre: "Spider-Punk",
      bio: "Apareció en The Amazing Spider-Man Vol. 3 #10 en enero de 2015, como un adolescente sin hogar al que le cambió la vida cuando una araña radioactiva le picó. Dicho insecto se encontraba irradiado debido a la cantidad de desechos tóxicos vertidos por el presidente Norman Osborn.",
      img: "../assets/img/spiderpunk.jpg",
      aparicion: "1962-08-01",
      casa: "Marvel",
      id:6
    },
    {
      nombre: "Spider-Man 2099",
      bio: "Miguel O'Hara es un joven científico mitad irlandés mitad mexicano que trabaja para la corporación Alchemax en un proyecto para crear seres humanos mejorados genéticamente, inspirándose en las habilidades del Spider-Man del siglo XX.",
      img: "../assets/img/spiderman2099.jpg",
      aparicion: "1974-11-01",
      casa: "Marvel",
      id:7
    },
    {
      nombre: "Spider-Man India",
      bio: "Pavitr Prabhakar obtuvo sus poderes de un Fajir que se los entregó porque creía que ese era su Karma. Pero cuando Pavitr Prabhakar vio que unos ladrones querían asaltar a una mujer, no hizo nada por evitarlo. Su tío Bhim trató de ayudar a la mujer y los asaltantes lo mataron. Pavitr se entera y busca a los ladrones, los atrapa y decide pelear contra el crimen.",
      img: "../assets/img/spidermanindia.jpg",
      aparicion: "1974-11-01",
      casa: "Marvel",
      id:8
    }
    
  ];


  getHeroes():Heroe[]{
    return this.heroes;
  }


  
  getHeroe( idx: number ){
    return this.heroes[idx - 1 ];
  }

}
