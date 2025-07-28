//Sessão de importação de módulos e serviços necessários para a aplicação Angular
import 'zone.js'; 
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app/app-routing.module';
import { FormsModule } from '@angular/forms';
import { ControleEditoraService } from './app/controle-editora.service';
import { ControleLivrosService } from './app/controle-livros.service';

// Função para inicializar a aplicação Angular com os módulos e serviços necessários
bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(FormsModule),
    provideRouter(routes),
    ControleEditoraService,
    ControleLivrosService,
  ],
}).catch((err) => console.error(err));
