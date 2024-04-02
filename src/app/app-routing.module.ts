import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HomeComponent } from './components/home/home.component';
import { HeroeTarjetaComponent } from './components/heroe-tarjeta/heroe-tarjeta.component';
import { HeroesFotosComponent } from './components/heroes-fotos/heroes-fotos.component';

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

  { path: '**', pathMatch: 'full', redirectTo: 'home' }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
