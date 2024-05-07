import { Component } from '@angular/core';
import { Foto } from 'src/app/interfaces/fotos.interface';

import { MongoDBService } from '../../services/mongo-db.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-fotos-list',
  templateUrl: './fotos-list.component.html',
  styleUrls: ['./fotos-list.component.css']
})
export class FotosListComponent {
  dataBD: any;


  Fotos!: Foto[];
  unResultado!:any;
  unaAccion: string = 'Mensaje';
  unMensaje: string = '';

  ngOnInit(){
    this.cargarFotosBD();
  }

  async cargarFotosBD() {
    //this.cargando = true;
    await this.dataBD
    .getFotos()
    .toPromise()
    .then((data:any) =>{
      this.Fotos = data.resp;
      console.log(this.Fotos)
    });


  }
}
