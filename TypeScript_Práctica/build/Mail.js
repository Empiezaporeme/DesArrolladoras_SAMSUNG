export class Mail {
    constructor(tipo, direccion) {
        this._tipo = tipo;
        this._direccion = direccion;
    }
    get mostrarMail() {
        return "\n" + this._tipo + ": " + this._direccion;
    }
    get getMail() {
        return this._tipo, this._direccion;
    }
    set setTipoMail(a) {
        this._tipo = a;
    }
    set setDireccionMail(a) {
        this._direccion = a;
    }
}
//# sourceMappingURL=Mail.js.map