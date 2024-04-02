import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Foto } from 'src/app/interfaces/fotos.interface';
import { FotosService } from 'src/app/services/fotos.service';

@Component({
  selector: 'app-heroes-fotos',
  templateUrl: './heroes-fotos.component.html',
  styleUrls: ['./heroes-fotos.component.css']
})
export class HeroesFotosComponent implements OnInit {

  fotos: Foto[] = [];
  heroeId: number | undefined;

  constructor(private activatedRoute: ActivatedRoute, private fotosService: FotosService) { }

  ngOnInit(): void {
    // Obtener el ID del héroe de la URL
    this.activatedRoute.params.subscribe(params => {
      if (params['id']) {
        this.heroeId = +params['id'];
        // Filtrar las fotos basadas en el ID del héroe si se proporciona
        this.fotos = this.fotosService.getFotos().filter(foto => foto.heroeId === this.heroeId);
      } else {
        // Si no se proporciona un ID, cargar todas las fotos
        this.fotos = this.fotosService.getFotos();
      }
    });
  }
}
