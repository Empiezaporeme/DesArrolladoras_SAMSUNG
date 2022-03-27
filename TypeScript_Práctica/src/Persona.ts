import { Direccion } from "./Direccion.js";
import { Mail } from "./Mail.js";
import { Telefono } from "./Telefono.js";

type sex = "hombre" | "mujer" | "otro"

export class Persona{
    private _nombre: string;
    private _apellidos: string;
    private _edad: number;
    private _DNI: string;
    private _cumpleaños: string;
    private _colorFavorito: string;
    private _sexo: sex;
    private _direcciones: Direccion;
    private _mails: Mail;
    private _telefonos: Telefono;

    constructor(nombre: string, apellidos:string, edad: number,DNI: string, cumpleaños: string, colorFavorito:string, sexo:sex, 
        calle: string, numero: number, piso: number, letra: string, codigoPostal:number, poblacion:string, provincia:string, 
        tipoMail: string, direccionMail: string,
        tipoTlf: string, numeroTlf: number){
        this._nombre = nombre;
        this._apellidos = apellidos;
        this._edad = edad;
        this._DNI = DNI;
        this._cumpleaños = cumpleaños;
        this._colorFavorito = colorFavorito;
        this._sexo = sexo;
        this._direcciones = new Direccion(calle, numero, piso, letra, codigoPostal,poblacion,provincia);
        this._mails = new Mail(tipoMail, direccionMail);
        this._telefonos = new Telefono(tipoTlf, numeroTlf);
    }

    set setNombre (a: string){
        this._nombre = a;
    }

    get getNombre (){
        return this._nombre;
    }

    set setApellidos (a: string){
        this._apellidos = a;
    }

    get getApellidos (){
        return this._apellidos;
    }

    set setEdad (a: number){
        this._edad = a;
    }

    get getEdad (){
        return this._edad;
    }

    set setDNI (a: string){
        this._DNI = a;
    }

    get getDNI (){
        return this._DNI;
    }

    set setCumpleaños (a: string){
        this._cumpleaños = a;
    }

    get getCumpleaños (){
        return this._cumpleaños;
    }

    set setColorFavorito (a: string){
        this._colorFavorito = a;
    }

    get getColorFavorito (){
        return this._colorFavorito;
    }

    set setSexo (a: sex){
        this._sexo = a;
    }

    get getSexo (){
        return this._sexo;
    }

    get getDirecciones (){
        return this._direcciones;
    }

    get getMails (){
        return this._mails;
    }

    get getTelefonos (){
        return this._telefonos;
    }

    setDireccion(calleN: string, numeroN: number, pisoN: number, letraN: string, codigoPostalN: number, poblacionN: string, provinciaN:string):void{
        this._direcciones.setCalle = calleN;
        this._direcciones.setNumero = numeroN;
        this._direcciones.setPiso = pisoN;
        this._direcciones.setLetra = letraN;
        this._direcciones.setCodigoPostal = codigoPostalN;
        this._direcciones.setPoblacion = poblacionN;
        this._direcciones.setProvincia = provinciaN;
        console.log("\nDirección modificada\n")
    }

    setMail(tipoN: string, direccionN: string){
        this._mails.setTipoMail = tipoN;
        this._mails.setDireccionMail = direccionN;
        console.log("\nMail modificado\n")
        }

    setTelefono(tipoN: string, numeroN: number){
        this._telefonos.setTipoTlf = tipoN;
        this._telefonos.setNumerotlf = numeroN;
        console.log("\nTeléfono modificado\n");
    }

    mostrarDatos():void{
        console.log("Nombre: " + this._nombre + 
        "\nApellidos: " + this._apellidos + 
        "\nEdad: " + this._edad +
        "\nDNI: " + this._DNI +
        "\nCumpleaños: " + this._cumpleaños +
        "\nColor Favorito " + this._colorFavorito +
        "\nSexo: " + this._sexo +
        this._direcciones.mostrarDireccion + 
        this._mails.mostrarMail + 
        this._telefonos.mostrarTelefono)
    }
}
