import { Component } from '@angular/core';
import { Foto } from 'src/app/interfaces/fotos.interface';
import { HeroesBDV1Service } from 'src/app/services/heroes-bdv1.service';

@Component({
  selector: 'app-fotos-api',
  templateUrl: './fotos-api.component.html',
  styleUrls: ['./fotos-api.component.css']
})
export class FotosApiComponent {
  fotos: Foto[] = [];
  heroeId: number | undefined;

  cargando: any;

  constructor(private dataBD: HeroesBDV1Service) {}

  ngOnInit() {
    this.cargarHeroesV1();
  }

  cargarHeroesV1() {
    this.cargando = true;
    this.dataBD.getHeroes().subscribe(
      (resp: any) => {
        this.fotos = resp.resp;
        this.cargando = false;
      },
      (error: any) => {
        console.error('Error al cargar héroes:', error);
        this.cargando = false;
      }
    );
  }

}
