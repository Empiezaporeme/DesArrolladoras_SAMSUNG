export class Direccion {
    constructor(calle, numero, piso, letra, codigoPostal, poblacion, provincia) {
        this._calle = calle;
        this._numero = numero;
        this._piso = piso;
        this._letra = letra;
        this._codigoPostal = codigoPostal;
        this._poblacion = poblacion;
        this._provincia = provincia;
    }
    set setCalle(a) {
        this._calle = a;
    }
    set setNumero(a) {
        this._numero = a;
    }
    set setPiso(a) {
        this._piso = a;
    }
    set setLetra(a) {
        this._letra = a;
    }
    set setCodigoPostal(a) {
        this._codigoPostal = a;
    }
    set setPoblacion(a) {
        this._poblacion = a;
    }
    set setProvincia(a) {
        this._provincia = a;
    }
    get mostrarDireccion() {
        return "\nDirección: " + this._calle + " " + this._numero + ", piso " + this._piso + " letra " + this._letra + ", " +
            this._codigoPostal + " " + this._poblacion + ", " + this._provincia;
    }
}
//# sourceMappingURL=Direccion.js.map