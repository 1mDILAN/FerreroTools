import { Component } from '@angular/core';
import { HeroesService } from 'src/app/services/heroes.service';


@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent {

  titulo:string = "Algo";
name: any;
filterPost: any;

ngOnInit(){

    this.heroesService.filtroHeroe;

  }


  constructor(public heroesService: HeroesService){

  }

  
}
