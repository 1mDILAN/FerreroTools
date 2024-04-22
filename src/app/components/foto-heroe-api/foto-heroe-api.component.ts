import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Foto } from 'src/app/interfaces/fotos.interface';
import { HeroesBDV1Service } from 'src/app/services/heroes-bdv1.service';

@Component({
  selector: 'app-foto-heroe-api',
  templateUrl: './foto-heroe-api.component.html',
  styleUrls: ['./foto-heroe-api.component.css']
})
export class FotoHeroeApiComponent implements OnInit {
  
  foto: Foto | null = null;
  fotos: Foto[] = []; // Ahora almacenamos múltiples fotos en lugar de un solo héroe
  cargando: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private dataBD: HeroesBDV1Service
  ) {}

  ngOnInit() {
    // Obtener el ID del héroe de la URL
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        // Cargar las fotos del héroe utilizando el ID obtenido
        this.cargarFotosPorId(id);
      } else {
        console.error('ID del héroe no proporcionado en la URL.');
      }
    });
  }

  cargarFotosPorId(id: string) {
    this.cargando = true;
    this.dataBD.getFoto(id).subscribe(
      (resp: any) => {
        // Asigna la respuesta (un array de fotos) a `this.fotos`
        this.foto = resp.resp;
        this.cargando = false;
      },
      (error: any) => {
        console.error('Error al cargar fotos del héroe:', error);
        this.cargando = false;
      }
    );
  }
}

