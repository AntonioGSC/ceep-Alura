import React, { Component } from 'react';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro.jsx';
import ListaDeNotas from './components/ListaDeNotas/ListaDeNotas.jsx';
import './assets/index.css';
import './assets/App.css';

export class App extends Component {
  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro />
        <ListaDeNotas />
      </section>
    );
  }
}

export default App;
