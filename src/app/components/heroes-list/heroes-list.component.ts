import { Component } from '@angular/core';
import { Heroe } from 'src/app/interfaces/heroes.interface';
import { HeroesBDV1Service } from 'src/app/services/heroes-bdv1.service';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.css']
})
export class HeroesListComponent {
  heroes:Heroe[] = [];
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
