import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ControleLivrosService } from '../controle-livros.service';
import { ControleEditoraService } from '../controle-editora.service';
import { Livro } from '../livro';
import { Editora } from '../editora';

@Component({
  selector: 'app-livro-dados',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './livro-dados.component.html',
  styleUrls: ['./livro-dados.component.css'],
})
export class LivroDadosComponent {
  livro: Livro = {
    codigo: 0,
    codEditora: 0,
    titulo: '',
    resumo: '',
    autores: [],
  };

  editoras: Array<Editora> = [];
  autoresStr: string = '';

  constructor(
    private servLivros: ControleLivrosService,
    private servEditoras: ControleEditoraService
  ) {
    this.editoras = this.servEditoras.getEditoras();
  }

  incluir(): void {
    this.livro.autores = this.autoresStr
      .split('\n')
      .map((a) => a.trim())
      .filter((a) => a !== '');
    this.servLivros.incluir(this.livro);
    alert('Livro incluído com sucesso!');
    this.livro = {
      codigo: 0,
      codEditora: 0,
      titulo: '',
      resumo: '',
      autores: [],
    };
    this.autoresStr = '';
  }
}
