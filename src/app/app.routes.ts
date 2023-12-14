import {Routes} from '@angular/router';
import { HomeComponent } from './navegacao/home/home.component';
import { ContatoComponent } from './intitucional/contato/contato.component';
import { DiretoresComponent } from './intitucional/diretores/diretores.component';
import { EntretenimentoComponent } from './intitucional/entretenimento/entretenimento.component';
import { FilmesComponent } from './intitucional/filmes/filmes.component';
import { PublicidadeComponent } from './intitucional/publicidade/publicidade.component';
import { MenuComponent } from './navegacao/menu/menu.component';

export const rootRouterConfig: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'contato', component: ContatoComponent},
    {path: 'diretores', component: DiretoresComponent},
    {path: 'entretenimento', component: EntretenimentoComponent},
    {path: 'filmes', component: FilmesComponent},
    {path: 'publicidade', component: PublicidadeComponent}
];


