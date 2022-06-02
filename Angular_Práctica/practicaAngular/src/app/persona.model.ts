export class Persona{

    constructor(_nombre: string, _apellidos: string, _edad: number, _dni: string, _cumpleanos: Date, _color: string, _sexo: string ){
        this.nombre = _nombre;
        this.apellidos = _apellidos;
        this.edad = _edad;
        this.dni = _dni;
        this.cumpleanos = _cumpleanos;
        this.color = _color;
        this.sexo = _sexo;
    }
    
    nombre: string = "";
    apellidos: string = "";
    edad: number = 0;
    dni: string  = "";
    cumpleanos: Date = new Date();
    color: string = "";
    sexo: string  = "";
}