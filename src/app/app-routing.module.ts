import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HomeComponent } from './components/home/home.component';
import { HeroeTarjetaComponent } from './components/heroe-tarjeta/heroe-tarjeta.component';
import { HeroesFotosComponent } from './components/heroes-fotos/heroes-fotos.component';
import { NuevoHeroeComponent } from './components/nuevo-heroe/nuevo-heroe.component';
import { HeroeApiComponent } from './components/heroe-api/heroe-api.component';
import { FotosApiComponent } from './components/fotos-api/fotos-api.component';
import { FotoHeroeApiComponent } from './components/foto-heroe-api/foto-heroe-api.component';
import { HeroesListComponent } from './components/heroes-list/heroes-list.component';
import { HeroeEditComponent } from './components/heroe-edit/heroe-edit.component';
import { FotosListComponent } from './components/fotos-list/fotos-list.component';

const routes: Routes = [
  { path: 'hogar', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent},
  { path: 'heroes', component: HeroesComponent},
  { path: 'heroest', component: HeroeTarjetaComponent},
  { path: 'heroe/:id', component: HeroeComponent},
  { path: 'buscar/:termino', component: BuscadorComponent},
  {path: 'heroes-fotos', component: HeroesFotosComponent},
  {path: 'heroes-fotos/:id', component: HeroesFotosComponent},

  //Crear o editar heroe desde el mismo formulario
  //{path: 'heroeedit/:idheroe', component: NuevoHeroeComponent},
  {path: 'heroeedit/:idheroe', component: HeroeEditComponent},

  {path: 'heroe', component: HeroeComponent},
  {path: 'heroe/:id', component: HeroeComponent},
  { path: 'fotos-api/:id', component: FotoHeroeApiComponent},
  { path: 'fotos-api', component: FotoHeroeApiComponent},

  //Listado de heroes
  { path: 'crud-heroes', component: HeroesListComponent},
  { path: 'crud-fotos', component: FotosListComponent},


  { path: '**', pathMatch: 'full', redirectTo: 'home' }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
