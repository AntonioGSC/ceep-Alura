import React, { Component } from 'react';
import './cardNota.css';
import { ReactComponent as DeleteSVG } from '../../assets/img/delete.svg';

export class CardNota extends Component {
  _apagar() {
    this.props.apagarNota(this.props.indice);
  }
  render() {
    return (
      <section className="card-nota">
        <header className="card-nota_cabecalho">
          <h3 className="card-nota_titulo">{this.props.titulo}</h3>
          <DeleteSVG onClick={this._apagar.bind(this)} />
        </header>
        <p className="card-nota_texto">{this.props.texto}</p>
      </section>
    );
  }
}

export default CardNota;
