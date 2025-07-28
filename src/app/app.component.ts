import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

// O componente utiliza o RouterModule para permitir a navegação entre diferentes rotas da aplicação
@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [RouterModule], 
})
export class AppComponent {
  title = 'livros-angular';
}
