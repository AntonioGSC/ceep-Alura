import React, { Component } from 'react';
import './formularioCadastro.css';

export class FormularioCadastro extends Component {
  constructor(props) {
    super(props);
    this.titulo = '';
    this.texto = '';
    this.state = {
      titulo: '',
      texto: '',
      categoria: 'Sem Categoria',
    };
  }

  _handleMudancaTitulo(event) {
    event.stopPropagation();
    this.setState({
      titulo: event.target.value,
    });
  }

  _handleMudancaTexto(event) {
    event.stopPropagation();
    this.setState({
      texto: event.target.value,
    });
  }

  _handleMudancaCategoria(event) {
    event.stopPropagation();
    this.setState({
      categoria: event.target.value,
    });
  }

  _criarNota(event) {
    event.preventDefault();
    event.stopPropagation();
    this.setState({
      titulo: '',
      texto: '',
      categoria: 'Sem Categoria',
    });
    this.props.criarNota(
      this.state.titulo,
      this.state.texto,
      this.state.categoria
    );
  }

  render() {
    return (
      <form className="form-cadastro " onSubmit={this._criarNota.bind(this)}>
        <select
          className="form-cadastro-input"
          onChange={this._handleMudancaCategoria.bind(this)}
        >
          <option>Sem Categoria</option>
          {this.props.categorias.map((categoria, index) => {
            return <option>{categoria}</option>;
          })}
        </select>
        <input
          type="text"
          placeholder="Título"
          value={this.state.titulo}
          className="form-cadastro_input"
          onChange={this._handleMudancaTitulo.bind(this)}
        />
        <textarea
          rows={15}
          placeholder="Escreva sua nota..."
          value={this.state.texto}
          className="form-cadastro_input"
          onChange={this._handleMudancaTexto.bind(this)}
        />
        <button className="form-cadastro_input form-cadastro_submit">
          Criar Nota
        </button>
      </form>
    );
  }
}

export default FormularioCadastro;
