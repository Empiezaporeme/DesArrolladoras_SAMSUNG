export class Telefono{
    private _tipo: string;
    private _numero: number;

    constructor(tipo: string, numero: number) {
        this._tipo = tipo;
        this._numero = numero;        
    }

    get mostrarTelefono(){
        return "\n" + this._tipo + ": " + this._numero;
    }
    
    get getTipoTlf(){
        return this._tipo;
    }
    
    get getNumeroTlf(){
        return this._numero;
    }

    set setTipoTlf(a: string){
        this._tipo = a;
    }

    set setNumerotlf(a: number){
        this._numero = a;
    }

}