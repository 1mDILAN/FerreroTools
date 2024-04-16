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
  activatedRoute: any;
  fotosService: any;

  constructor(private dataBD: HeroesBDV1Service) {}

  ngOnInit() {
    this.cargarFotos();
    // this.activatedRoute.params.subscribe((params: { [x: string]: string | number; }) => {
    //   if (params['id']) {
    //     this.heroeId = +params['id'];
    //     // Filtrar las fotos basadas en el ID del héroe si se proporciona
    //     this.fotos = this.cargarFotos.getFotos().filter((foto: { heroeId: number | undefined; }) => foto.heroeId === this.heroeId);
    //   } else {
    //     // Si no se proporciona un ID, cargar todas las fotos
    //     this.fotos = this.fotosService.getFotos();
    //   }
    // });
  
  }

  cargarFotos() {
    this.cargando = true;
    this.dataBD.getFotos().subscribe(
      (resp: any) => {
        this.fotos = resp.resp;
        this.cargando = false;
      },
      (error: any) => {
        console.error('Error al cargar heroes:', error);
        this.cargando = false;
      }
    );
  }

}
