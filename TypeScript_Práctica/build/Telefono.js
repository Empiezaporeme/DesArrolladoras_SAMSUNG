export class Telefono {
    constructor(tipo, numero) {
        this._tipo = tipo;
        this._numero = numero;
    }
    get mostrarTelefono() {
        return "\n" + this._tipo + ": " + this._numero;
    }
    get getTipoTlf() {
        return this._tipo;
    }
    get getNumeroTlf() {
        return this._numero;
    }
    set setTipoTlf(a) {
        this._tipo = a;
    }
    set setNumerotlf(a) {
        this._numero = a;
    }
}
//# sourceMappingURL=Telefono.js.map