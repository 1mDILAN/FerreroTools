import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesBDV1Service } from 'src/app/services/heroes-bdv1.service';
import { Heroe } from 'src/app/interfaces/heroes.interface';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {
  heroe: Heroe | null = null;
  cargando: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private dataBD: HeroesBDV1Service
  ) {}

  ngOnInit() {
    // Obtener el ID del héroe de la URL
    this.route.paramMap.subscribe(params => {
      const idHeroe = params.get('id');
      if (idHeroe) {
        // Cargar los detalles del héroe utilizando el ID obtenido
        this.cargarHeroePorId(idHeroe);
      } else {
        console.error('ID del héroe no proporcionado en la URL.');
      }
    });
  }

  cargarHeroePorId(id: string) {
    this.cargando = true;
    this.dataBD.getHeroe(id).subscribe(
      (resp: any) => {
        this.heroe = resp.resp;
        this.cargando = false;
      },
      (error: any) => {
        console.error('Error al cargar héroe:', error);
        this.cargando = false;
      }
    );
  }
}
