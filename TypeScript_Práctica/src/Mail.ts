export class Mail{
    private _tipo: string;
    private _direccion: string;

    constructor(tipo: string, direccion: string) {
        this._tipo = tipo;
        this._direccion = direccion;        
    }

    get mostrarMail(){
        return "\n" + this._tipo + ": " + this._direccion;
    }

    get getMail(){
        return this._tipo, this._direccion;
    }

    set setTipoMail(a: string){
        this._tipo = a;
    }

    set setDireccionMail(a: string){
        this._direccion = a;
    }

}