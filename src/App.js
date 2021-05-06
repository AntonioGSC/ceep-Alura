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
      categorias: [],
    };
  }

  criarNota(titulo, texto) {
    const novaNota = { titulo, texto };
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

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro criarNota={this.criarNota.bind(this)} />
        <main className="conteudo-principal">
          <ListaDeCategorias />
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
