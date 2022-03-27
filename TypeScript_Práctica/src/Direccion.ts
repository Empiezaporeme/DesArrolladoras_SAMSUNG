export class Direccion{
    private _calle: string;
    private _numero: number;
    private _piso: number;
    private _letra: string;
    private _codigoPostal: number;
    private _poblacion: string;
    private _provincia: string;

    constructor(calle: string, numero: number, piso: number, letra: string, codigoPostal:number, poblacion:string, provincia:string){
        this._calle = calle;
        this._numero = numero;
        this._piso = piso;
        this._letra = letra;
        this._codigoPostal = codigoPostal;
        this._poblacion = poblacion;
        this._provincia = provincia;
    }

    set setCalle(a:string){
        this._calle = a;
    }

    set setNumero(a:number){
        this._numero = a;
    }

    set setPiso(a:number){
        this._piso = a;
    }

    set setLetra(a:string){
        this._letra = a;
    }

    set setCodigoPostal(a:number){
        this._codigoPostal = a;
    }

    set setPoblacion(a:string){
        this._poblacion = a;
    }

    set setProvincia(a:string){
        this._provincia = a;
    }

    get mostrarDireccion(){
        return "\nDirección: "+this._calle + " " + this._numero + ", piso " + this._piso + " letra " + this._letra + ", " + 
        this._codigoPostal + " " + this._poblacion + ", " + this._provincia;
    }


}