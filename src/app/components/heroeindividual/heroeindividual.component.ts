import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Heroe } from 'src/app/interfaces/heroes.interface';
import { HeroesBDV1Service } from 'src/app/services/heroes-bdv1.service';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-heroeindividual',
  templateUrl: './heroeindividual.component.html',
  styleUrls: ['./heroeindividual.component.css']
})
export class HeroeindividualComponent implements OnInit {
  
  id: any;
  heroes: Heroe[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
  private dataBD: HeroesBDV1Service,
  private heroesService: HeroesService
) {
  
}

  ngOnInit() :void {
    
    this.activatedRoute.params.subscribe(params => {
      if (params['id']) {
        this.id = +params['id'];
        // Filtrar las fotos basadas en el ID del héroe si se proporciona
        this.heroes = this.heroesService.getHeroes().filter(foto => foto.id === this.id);
      } else {
        // Si no se proporciona un ID, cargar todas las fotos
        this.heroes = this.heroesService.getHeroes();
      }
    });
}
}
