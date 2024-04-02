import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import {  HttpClientModule } from '@angular/common/http';

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
    HeroesFotosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
