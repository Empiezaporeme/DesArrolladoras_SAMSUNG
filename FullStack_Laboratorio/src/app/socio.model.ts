export class Socio{

    constructor(_nombre: string, _apellidos: string, _socio: number, _dni: string, _telefono: string, _sexo: string ){
        this.nombre = _nombre;
        this.apellidos = _apellidos;
        this.socio = _socio;
        this.dni = _dni;
        this.telefono = _telefono;
        this.sexo = _sexo;
    }
    
    nombre: string = "";
    apellidos: string = "";
    socio: number = new Date().getTime();
    dni: string  = "";
    telefono: string = "";
    sexo: string  = "";
}