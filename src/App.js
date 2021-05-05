import React, { Component } from 'react';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro.jsx';
import ListaDeNotas from './components/ListaDeNotas/ListaDeNotas.jsx';
import './assets/index.css';
import './assets/App.css';

export class App extends Component {
  constructor() {
    super();
    this.notas = [];
  }

  criarNota(titulo, texto) {
    const novaNota = { titulo, texto };
    this.notas.push(novaNota);
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro criarNota={this.criarNota.bind(this)} />
        <ListaDeNotas notas={this.notas} />
      </section>
    );
  }
}

export default App;
