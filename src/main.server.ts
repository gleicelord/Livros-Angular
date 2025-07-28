// arquivo: src/main.server.ts
// Este arquivo é responsável por inicializar a aplicação Angular no lado do servidor, configurando o ambiente e os módulos necessários para o funcionamento correto da aplicação.
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';

import { config } from './app/app.config.server';

const bootstrap = () => bootstrapApplication(AppComponent, config);

export default bootstrap;
