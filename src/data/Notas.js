export default class ArrayDeNotas {
  constructor() {
    this._notas = [];
    this._inscritos = [];
  }

  inscrever(func) {
    this._inscritos.push(func);
  }

  notificar() {
    this._inscritos.forEach((func) => func(this.notas));
  }

  desinscrever(func) {
    this._inscritos = this._inscritos.filter((f) => f !== func);
  }

  adicionarNota(titulo, texto, categoria) {
    const novaNota = new Nota(titulo, texto, categoria);
    this.notas.push(novaNota);
    this.notificar();
  }

  apagarNota(indice) {
    this.notas.splice(indice, 1);
    this.notificar();
  }

  get notas() {
    return this._notas;
  }
}

class Nota {
  constructor(titulo, texto, categoria) {
    this.titulo = titulo;
    this.texto = texto;
    this.categoria = categoria;
  }
}
