import { Component } from '@angular/core';
import { Heroe } from 'src/app/interfaces/heroes.interface';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class  HeroesComponent {

  heroes:Heroe[] = [];

  constructor( private data:HeroesService){
     this.heroes = data.getHeroes();
     console.log(this.heroes);
  }

}
