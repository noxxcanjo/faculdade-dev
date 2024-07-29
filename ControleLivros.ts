import { Livro } from '../modelo/Livro';

let livros: Array<Livro> = [
  new Livro(1, 1, 'Livro 1', 'Resumo 1', ['Autor 1']),
  new Livro(2, 2, 'Livro 2', 'Resumo 2', ['Autor 2']),
  new Livro(3, 3, 'Livro 3', 'Resumo 3', ['Autor 3'])
];

export class ControleLivro {
  obterLivros(): Array<Livro> {
    return livros;
  }

  incluir(livro: Livro): void {
    const maxCodigo = Math.max(...livros.map(l => l.codigo), 0);
    livro.codigo = maxCodigo + 1;
    livros.push(livro);
  }

  excluir(codigo: number): void {
    const index = livros.findIndex(livro => livro.codigo === codigo);
    if (index !== -1) {
      livros.splice(index, 1);
    }
  }
}

