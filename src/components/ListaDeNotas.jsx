import React, { Component } from 'react';
import CardNota from './CardNota';

export class ListaDeNotas extends Component {
  render() {
    return (
      <section>
        <ul>
          {Array.of('Trabalho', 'Trabalho', 'Estudos').map((categoria) => {
            return (
              <li>
                <div>{categoria}</div>
                <CardNota />
              </li>
            );
          })}
        </ul>
      </section>
    );
  }
}

export default ListaDeNotas;
