// Este serviço gerencia as editoras disponíveis na aplicação, permitindo obter a lista de editoras
// e buscar o nome de uma editora pelo seu código.
// Importa o Injectable do Angular core para definir o serviço como injetável
import { Injectable } from '@angular/core';
import { Editora } from './editora';

@Injectable({
  providedIn: 'root',
})
export class ControleEditoraService {
  private editoras: Array<Editora> = [
    { codEditora: 1, nome: 'Editora Moderna' },
    { codEditora: 2, nome: 'Companhia das Letras' },
    { codEditora: 3, nome: 'Ouro Branco Editora' },
  ];

  constructor() {}

  getEditoras(): Array<Editora> {
    return this.editoras;
  }

  getNomeEditora(codEditora: number): string {
    const editora = this.editoras.find((e) => e.codEditora === codEditora);
    return editora ? editora.nome : '';
  }
}
