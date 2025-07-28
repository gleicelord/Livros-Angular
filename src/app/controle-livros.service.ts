
import { Injectable } from '@angular/core';
import { Livro } from './livro';

@Injectable({
  providedIn: 'root',
})
export class ControleLivrosService {
  private livros: Livro[] = [
    {
      codigo: 1,
      codEditora: 1,
      titulo: 'Angular na Prática',
      resumo: 'Um guia completo sobre Angular.',
      autores: ['João Silva', 'Maria Oliveira'],
    },
    {
      codigo: 2,
      codEditora: 2,
      titulo: 'TypeScript Essencial',
      resumo: 'Aprenda TS com exemplos práticos.',
      autores: ['Carlos Souza'],
    },
  ];

  obterLivros(): Livro[] {
    return this.livros;
  }

  incluir(livro: Livro): void {
    const novoCodigo = Math.max(...this.livros.map((l) => l.codigo), 0) + 1;
    livro.codigo = novoCodigo;
    this.livros.push(livro);
  }

  excluir(codigo: number): void {
    const index = this.livros.findIndex((l) => l.codigo === codigo);
    if (index >= 0) {
      this.livros.splice(index, 1);
    }
  }
}
