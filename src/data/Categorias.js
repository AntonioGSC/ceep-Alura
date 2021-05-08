export default class Categorias {
  constructor() {
    this._categorias = [];
    this._inscritos = [];
  }

  inscrever(func) {
    this._inscritos.push(func);
  }

  desinscrever(func) {
    this._inscritos = this._inscritos.filter((f) => f !== func);
  }

  notificar() {
    this._inscritos.forEach((func) => func(this.categorias));
  }

  adicionarCategoria(nomeCategoria) {
    this.categorias.push(nomeCategoria);
    this.notificar();
  }

  get categorias() {
    return this._categorias;
  }
}
