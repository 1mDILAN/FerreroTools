import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';


import {  HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './components/encabezado/encabezado.component';
import { HomeComponent } from './components/home/home.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { HeroeTarjetaComponent } from './components/heroe-tarjeta/heroe-tarjeta.component';
import { FooterComponent } from './components/footer/footer.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { AboutComponent } from './components/about/about.component';
import { FilterPipe } from './pipes/filter.pipe';
import { FormsModule } from '@angular/forms';
import { HeroesFotosComponent } from './components/heroes-fotos/heroes-fotos.component';
import { NuevoHeroeComponent } from './components/nuevo-heroe/nuevo-heroe.component';
import { HeroeApiComponent } from './components/heroe-api/heroe-api.component';
import { FotosApiComponent } from './components/fotos-api/fotos-api.component';
import { FotoHeroeApiComponent } from './components/foto-heroe-api/foto-heroe-api.component';
import { HeroeindividualComponent } from './components/heroeindividual/heroeindividual.component';
import { HeroesListComponent } from './components/heroes-list/heroes-list.component';


@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    HomeComponent,
    HeroesComponent,
    HeroeComponent,
    HeroeTarjetaComponent,
    FooterComponent,
    BuscadorComponent,
    AboutComponent,
    FilterPipe,
    HeroesFotosComponent,
    NuevoHeroeComponent,
    HeroeApiComponent,
    FotosApiComponent,
    FotoHeroeApiComponent,
    HeroeindividualComponent,
    HeroesListComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
