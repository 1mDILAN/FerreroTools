import { Component } from '@angular/core';
import { Heroe } from 'src/app/interfaces/heroes.interface';
import { HeroesBDV1Service } from 'src/app/services/heroes-bdv1.service';

import { MongoDBService } from '../../services/mongo-db.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.css']
})
export class HeroesListComponent {
  
  Heroes!: Heroe[];
  unResultado!:any;
  unaAccion: string = 'Mensaje';
  unMensaje: string = '';


  constructor(
    private dataBD: MongoDBService,
    private router: Router,
  ) {
    
  }

  ngOnInit(){
    this.cargarHeroesBD();
  }

  async cargarHeroesBD() {
    //this.cargando = true;
    await this.dataBD
    .getHeroes()
    .toPromise()
    .then((data:any) =>{
      this.Heroes = data.resp;
      console.log(this.Heroes)
    });


  }

  editarHeroe(unIdHeroe:any){
    this.router.navigate(['/heroeedit', unIdHeroe]);
  }

  eliminarHeroe(unHeroe: any) {
    //console.log(this.unaDivision);
    this.dataBD.crud_Heroes(unHeroe, 'eliminar').subscribe(
      (res: any) => {
        this.unResultado = res;

        //console.log(this.unResultado);
        if (this.unResultado.Ok == true) {

           Swal.fire({
            icon: 'info',
            title: 'Information',
            text: 'Heroe Eliminado',
          });

          this.unaAccion = 'Mensaje:';
          this.unMensaje = 'Heroe Eliminado';
          setTimeout(() => (this.unMensaje = ''), 3000);


          this.cargarHeroesBD() ;

        } else {
          Swal.fire({
            icon: 'info',
            title: 'Information',
            text: this.unResultado.msg,
          });
    

          this.unaAccion = 'Error:';
          this.unMensaje = this.unResultado.msg;
          setTimeout(() => (this.unMensaje = ''), 3000);
        }
      }
      ,(error:any) => {
        console.error(error)
      }
    );
  }


  editarFotos(unHeroe:any){

  }
}
