import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';

import { AppComponent } from './app.component';
import { MenuComponent } from './navegacao/menu/menu.component';
import { HomeComponent } from './navegacao/home/home.component';
import { FooterComponent } from './navegacao/footer/footer.component';
import { DiretoresComponent } from './intitucional/diretores/diretores.component';
import { EntretenimentoComponent } from './intitucional/entretenimento/entretenimento.component';
import { FilmesComponent } from './intitucional/filmes/filmes.component';
import { PublicidadeComponent } from './intitucional/publicidade/publicidade.component';
import { ContatoComponent } from './intitucional/contato/contato.component';
import { rootRouterConfig } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    FooterComponent,
    DiretoresComponent,
    EntretenimentoComponent,
    FilmesComponent,
    PublicidadeComponent,
    ContatoComponent,
  ],
  imports: [
    BrowserModule,
    [RouterModule.forRoot(rootRouterConfig, {useHash: false})]
  ],
  providers: [
    {provide: APP_BASE_HREF, useValue: '/'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
