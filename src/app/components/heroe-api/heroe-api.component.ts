import { Component } from '@angular/core';
import { Heroe } from 'src/app/interfaces/heroes.interface';
import { ApiService } from 'src/app/services/api.service';
import { HeroesBDV1Service } from 'src/app/services/heroes-bdv1.service';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-heroe-api',
  templateUrl: './heroe-api.component.html',
  styleUrls: ['./heroe-api.component.css']
})
export class HeroeApiComponent {

  
  heroes: Heroe[] = [];
  cargando: any;

  constructor(private dataBD: HeroesBDV1Service) {}

  ngOnInit() {
    this.cargarHeroesV1();
  }

  cargarHeroesV1() {
    this.cargando = true;
    this.dataBD.getHeroes().subscribe(
      (resp: any) => {
        this.heroes = resp.resp;
        this.cargando = false;
      },
      (error: any) => {
        console.error('Error al cargar héroes:', error);
        this.cargando = false;
      }
    );
  }

}
