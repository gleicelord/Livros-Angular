
// Este arquivo define as rotas da aplicação Angular, especificando quais componentes devem ser exibidos
import { Routes } from '@angular/router';
import { LivroListaComponent } from './livro-lista/livro-lista.component';
import { LivroDadosComponent } from './livro-dados/livro-dados.component';

export const routes: Routes = [
  { path: '', component: LivroListaComponent },
  { path: 'dados', component: LivroDadosComponent },
];
