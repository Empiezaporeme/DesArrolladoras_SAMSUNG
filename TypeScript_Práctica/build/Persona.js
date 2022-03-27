import { Direccion } from "./Direccion.js";
import { Mail } from "./Mail.js";
import { Telefono } from "./Telefono.js";
export class Persona {
    constructor(nombre, apellidos, edad, DNI, cumpleaños, colorFavorito, sexo, calle, numero, piso, letra, codigoPostal, poblacion, provincia, tipoMail, direccionMail, tipoTlf, numeroTlf) {
        this._nombre = nombre;
        this._apellidos = apellidos;
        this._edad = edad;
        this._DNI = DNI;
        this._cumpleaños = cumpleaños;
        this._colorFavorito = colorFavorito;
        this._sexo = sexo;
        this._direcciones = new Direccion(calle, numero, piso, letra, codigoPostal, poblacion, provincia);
        this._mails = new Mail(tipoMail, direccionMail);
        this._telefonos = new Telefono(tipoTlf, numeroTlf);
    }
    set setNombre(a) {
        this._nombre = a;
    }
    get getNombre() {
        return this._nombre;
    }
    set setApellidos(a) {
        this._apellidos = a;
    }
    get getApellidos() {
        return this._apellidos;
    }
    set setEdad(a) {
        this._edad = a;
    }
    get getEdad() {
        return this._edad;
    }
    set setDNI(a) {
        this._DNI = a;
    }
    get getDNI() {
        return this._DNI;
    }
    set setCumpleaños(a) {
        this._cumpleaños = a;
    }
    get getCumpleaños() {
        return this._cumpleaños;
    }
    set setColorFavorito(a) {
        this._colorFavorito = a;
    }
    get getColorFavorito() {
        return this._colorFavorito;
    }
    set setSexo(a) {
        this._sexo = a;
    }
    get getSexo() {
        return this._sexo;
    }
    get getDirecciones() {
        return this._direcciones;
    }
    get getMails() {
        return this._mails;
    }
    get getTelefonos() {
        return this._telefonos;
    }
    setDireccion(calleN, numeroN, pisoN, letraN, codigoPostalN, poblacionN, provinciaN) {
        this._direcciones.setCalle = calleN;
        this._direcciones.setNumero = numeroN;
        this._direcciones.setPiso = pisoN;
        this._direcciones.setLetra = letraN;
        this._direcciones.setCodigoPostal = codigoPostalN;
        this._direcciones.setPoblacion = poblacionN;
        this._direcciones.setProvincia = provinciaN;
        console.log("\nDirección modificada\n");
    }
    setMail(tipoN, direccionN) {
        this._mails.setTipoMail = tipoN;
        this._mails.setDireccionMail = direccionN;
        console.log("\nMail modificado\n");
    }
    setTelefono(tipoN, numeroN) {
        this._telefonos.setTipoTlf = tipoN;
        this._telefonos.setNumerotlf = numeroN;
        console.log("\nTeléfono modificado\n");
    }
    mostrarDatos() {
        console.log("Nombre: " + this._nombre +
            "\nApellidos: " + this._apellidos +
            "\nEdad: " + this._edad +
            "\nDNI: " + this._DNI +
            "\nCumpleaños: " + this._cumpleaños +
            "\nColor Favorito " + this._colorFavorito +
            "\nSexo: " + this._sexo +
            this._direcciones.mostrarDireccion +
            this._mails.mostrarMail +
            this._telefonos.mostrarTelefono);
    }
}
//# sourceMappingURL=Persona.js.map