import { Injectable } from '@angular/core';
import { Foto } from '../interfaces/fotos.interface';

@Injectable({
  providedIn: 'root'
})
export class FotosService {

  constructor() {
  }

  public fotos:Foto[] = [
    {
      nombre: "Foto Spider-Man 616",
    descripcion: "Esta foto es tomada por el diario el clarin",
    heroeId:1,
    img: "https://i.pinimg.com/originals/40/da/d8/40dad8cbc9b04c431dbf4c115ee9a69c.jpg",
    id: 1,
    },
    {
      nombre: "Foto Spider-Man 616",
    descripcion: "Esta foto es tomada por el diario el clarin",
    heroeId:1,
    img: "https://i.pinimg.com/564x/f8/4c/6d/f84c6d9a946d988fc4556f24cd91932f.jpg",
    id: 2,
    },
    {
      nombre: "Foto Spider-Man 616",
    descripcion: "Esta foto es tomada por el diario el clarin",
    heroeId:1,
    img: "https://i.pinimg.com/564x/37/82/b7/3782b72e9b668e17a7dd594a17faafc5.jpg",
    id: 3,
    },
    {
      nombre: "Foto Spider-Man 616",  
    descripcion: "Esta foto es tomada por el diario el clarin",
    heroeId:1,
    img: "https://i.pinimg.com/originals/6d/9a/7f/6d9a7ffaa663e1ec262d0bc985f51de9.jpg",
    id: 4,
    },



    {
      nombre: "Foto Spider-Gwen",
    descripcion: "Esta foto es tomada por el diario el clarin",
    heroeId:2,
    img: "https://i.pinimg.com/564x/af/ac/c4/afacc46c1bf91ccd39c84ccbeb1bbeec.jpg",
    id: 5,
    },
    {
      nombre: "Foto Spider-Gwen",
    descripcion: "Esta foto es tomada por el diario el clarin",
    heroeId:2,
    img: "https://i.pinimg.com/564x/d6/71/9e/d6719e2f84f398c21bb4850bfd858584.jpg",
    id: 6,
    },
    {
      nombre: "Foto Spider-Gwen",
    descripcion: "Esta foto es tomada por el diario el clarin",
    heroeId:2,
    img: "https://i.pinimg.com/564x/18/ca/bd/18cabd3f41d3d7aa255b6d2098678727.jpg",
    id: 7,
    },
    {
      nombre: "Spider-Gwen sin mascara",  
    descripcion: "Esta foto es tomada por el diario el clarin",
    heroeId:2,
    img: "https://i.pinimg.com/564x/18/c9/c9/18c9c96645ed7fc0c4ec7b7c5ca0f9ab.jpg",
    id: 8,
    },



    {
      nombre: "Spider-Man Miles Morales",
    descripcion: "Esta foto es tomada por el diario el clarin",
    heroeId:3,
    img: "https://i.pinimg.com/564x/2b/c0/17/2bc0179f32b01f6e595c63bd1efb995a.jpg",
    id: 9,
    },
    {
      nombre: "Spider-Man Miles Morales",
    descripcion: "Esta foto es tomada por el diario el clarin",
    heroeId:3,
    img: "https://i.pinimg.com/564x/c9/b2/c7/c9b2c7631df2a87f44b58d181f53a907.jpg",
    id: 10,
    },
    {
      nombre: "Spider-Man Miles Morales",
    descripcion: "Esta foto es tomada por el diario el clarin",
    heroeId:3,
    img: "https://i.pinimg.com/564x/62/a8/44/62a844ddc7cbe899d569d60b392fad86.jpg",
    id: 11,
    },
    {
      nombre: "Spider-Man Miles Morales",  
    descripcion: "Esta foto es tomada por el diario el clarin",
    heroeId:3,
    img: "https://i.pinimg.com/564x/2f/f0/7c/2ff07c2126bdf9664c783f5137f34632.jpg",
    id: 12,
    },


    {
      nombre: "Superior Spider-Man",
    descripcion: "Esta foto es tomada por el diario el clarin",
    heroeId:4,
    img: "https://i.pinimg.com/564x/0b/d4/4c/0bd44cf9a99dea25fa09fd479c193725.jpg",
    id: 13,
    },
    {
      nombre: "Superior Spider-Man",
    descripcion: "Esta foto es tomada por el diario el clarin",
    heroeId:4,
    img: "https://i.pinimg.com/564x/f9/a8/63/f9a863165f1cdb5245c6d85394dc3898.jpg",
    id: 14,
    },
    {
      nombre: "Superior Spider-Man",
    descripcion: "Esta foto es tomada por el diario el clarin",
    heroeId:4,
    img: "https://i.pinimg.com/564x/8b/48/0d/8b480d149303e93a27c792328ae71fd4.jpg",
    id: 15,
    },
    {
      nombre: "Superior Spider-Man",  
    descripcion: "Esta foto es tomada por el diario el clarin",
    heroeId:4,
    img: "https://i.pinimg.com/564x/ca/5d/6a/ca5d6ae5fbc43c840cb65ddfee731cd8.jpg",
    id: 16,
    },


    {
      nombre: "Scarlet Spider",
    descripcion: "Esta foto es tomada por el diario el clarin",
    heroeId:5,
    img: "https://i.pinimg.com/564x/d5/ac/79/d5ac79992d3acecb6b5df3e95bf055ae.jpg",
    id: 17,
    },
    {
      nombre: "Scarlet Spider",
    descripcion: "Esta foto es tomada por el diario el clarin",
    heroeId:5,
    img: "https://i.pinimg.com/564x/a9/21/59/a921597786ba508d98ae7e9ff760db7d.jpg",
    id: 18,
    },
    {
      nombre: "Scarlet Spider",
    descripcion: "Esta foto es tomada por el diario el clarin",
    heroeId:5,
    img: "https://i.pinimg.com/564x/ca/f7/eb/caf7eba78be19ce59eec93736fb47771.jpg",
    id: 19,
    },
    {
      nombre: "Scarlet Spider",  
    descripcion: "Esta foto es tomada por el diario el clarin",
    heroeId:5,
    img: "https://i.pinimg.com/564x/eb/13/eb/eb13eb9aa7e3c8ff80bbad98883881db.jpg",
    id: 20,
    },


    {
      nombre: "Spider-Punk",
    descripcion: "Esta foto es tomada por el diario el clarin",
    heroeId:6,
    img: "https://i.pinimg.com/564x/65/6b/46/656b467a45bccd5c3caeec8da644e34d.jpg",
    id: 21,
    },
    {
      nombre: "Spider-Punk",
    descripcion: "Esta foto es tomada por el diario el clarin",
    heroeId:6,
    img: "https://i.pinimg.com/564x/a6/e8/8d/a6e88d07fe185943e14155bcd02b86b0.jpg",
    id: 22,
    },
    {
      nombre: "Spider-Punk",
    descripcion: "Esta foto es tomada por el diario el clarin",
    heroeId:6,
    img: "https://i.pinimg.com/564x/f0/07/bb/f007bb576c6b96325547e1d616b83a0b.jpg",
    id: 23,
    },
    {
      nombre: "Spider-Punk",  
    descripcion: "Esta foto es tomada por el diario el clarin",
    heroeId:6,
    img: "https://i.pinimg.com/564x/e9/6e/95/e96e9589626bd293aa89549447ad1ddf.jpg",
    id: 24,
    },


    {
      nombre: "Spider-Man 2099",
    descripcion: "Esta foto es tomada por el diario el clarin",
    heroeId:7,
    img: "https://i.pinimg.com/564x/6c/4c/89/6c4c89ef712d3e6697dba9bac86cb7ac.jpg",
    id: 25,
    },
    {
      nombre: "Spider-Man 2099",
    descripcion: "Esta foto es tomada por el diario el clarin",
    heroeId:7,
    img: "https://i.pinimg.com/564x/18/2a/e5/182ae5e23addeb1925b4af6cc0ff424c.jpg",
    id: 26,
    },
    {
      nombre: "Spider-Man 2099",
    descripcion: "Esta foto es tomada por el diario el clarin",
    heroeId:7,
    img: "https://i.pinimg.com/564x/01/11/82/011182680249ad6a7fc62b509dd15bd4.jpg",
    id: 27,
    },
    {
      nombre: "Spider-Man 2099",  
    descripcion: "Esta foto es tomada por el diario el clarin",
    heroeId:7,
    img: "https://i.pinimg.com/564x/19/33/3b/19333bc3506ac5ffa2ae014de806af2f.jpg",
    id: 28,
    },


    {
      nombre: "Spider-Man India",
    descripcion: "Esta foto es tomada por el diario el clarin",
    heroeId:8,
    img: "https://i.pinimg.com/564x/d4/a3/a4/d4a3a46caac387159021c49b841b8163.jpg",
    id: 29,
    },
    {
      nombre: "Spider-Man India",
    descripcion: "Esta foto es tomada por el diario el clarin",
    heroeId:8,
    img: "https://i.pinimg.com/564x/c5/4e/7b/c54e7bb8fd890ebf010122d327ef1d16.jpg",
    id: 30,
    },
    {
      nombre: "Spider-Man India",
    descripcion: "Esta foto es tomada por el diario el clarin",
    heroeId:8,
    img: "https://i.pinimg.com/564x/da/b0/b0/dab0b0b7db26ebbe5c4ee18ef463d525.jpg",
    id: 31,
    },
    {
      nombre: "Spider-Man India",  
    descripcion: "Esta foto es tomada por el diario el clarin",
    heroeId:8,
    img: "https://i.pinimg.com/736x/c7/f4/d3/c7f4d30d646518c3c44f99524e5934e3.jpg",
    id: 32,
    },


    
  ];

  getFotos():Foto[]{
    return this.fotos;
  }

  getFoto( idx: number ){
    return this.fotos[idx - 1];
  }

}
