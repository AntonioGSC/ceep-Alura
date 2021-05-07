import React, { Component } from 'react';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro.jsx';
import ListaDeNotas from './components/ListaDeNotas/ListaDeNotas.jsx';
import ListaDeCategorias from './components/ListaDeCategorias/ListaDeCategorias.jsx';
import './assets/index.css';
import './assets/App.css';

export class App extends Component {
  constructor() {
    super();
    this.state = {
      notas: [],
      categorias: ['Trabalho', 'Escola'],
    };
  }

  criarNota(titulo, texto, categoria) {
    const novaNota = { titulo, texto, categoria };
    const novoArrayNotas = [...this.state.notas, novaNota];
    const novoEstado = {
      notas: novoArrayNotas,
    };
    this.setState(novoEstado);
  }

  deletarNota(index) {
    const arrayNotas = this.state.notas;
    arrayNotas.splice(index, 1);
    const novoEstado = {
      notas: arrayNotas,
    };
    this.setState(novoEstado);
  }

  adicionarCategoria(nomeCategoria) {
    const novoArrayCategorias = [...this.state.categorias, nomeCategoria];
    const novoEstado = {
      categorias: novoArrayCategorias,
    };
    this.setState(novoEstado);
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro
          categorias={this.state.categorias}
          criarNota={this.criarNota.bind(this)}
        />
        <main className="conteudo-principal">
          <ListaDeCategorias
            categorias={this.state.categorias}
            adicionarCategoria={this.adicionarCategoria.bind(this)}
          />
          <ListaDeNotas
            apagarNota={this.deletarNota.bind(this)}
            notas={this.state.notas}
          />
        </main>
      </section>
    );
  }
}

export default App;
