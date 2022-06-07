import { Injectable } from '@angular/core';
import { Socio } from './socio.model';

@Injectable({
  providedIn: 'root'
})
export class ServicioSociosService {

  constructor() { 
    this.ids.add(this.socios[0].socio);
    console.log(this.ids)
  }

  socios: Socio[] = [

    new Socio("Pepe","Pérez", new Date().getTime()+1,"54321098L","rojo","hombre")

  ];

  ids: Set<number> = new Set();
  

  agregarSocioServicio(socio: Socio){
    this.socios.push(socio);
    this.ids.add(socio.socio);
    console.log(this.ids);
  }

  encontrarSocio(indice: number){
    let socio: Socio = this.socios[indice];
    return socio;
  }

  actualizarSocio(indice: number, socio: Socio){
    let socioModificado = this.socios[indice];
    socioModificado.nombre = socio.nombre;
    socioModificado.apellidos = socio.apellidos;
    this.ids.delete(this.socios[indice].socio);
    socioModificado.socio = socio.socio;
    socioModificado.dni = socio.dni;
    socioModificado.telefono = socio.telefono;
    socioModificado.sexo = socio.sexo;
    this.ids.add(socioModificado.socio);
    console.log(this.ids);
  }

  eliminarSocio(indice:number){
    this.ids.delete(this.socios[indice].socio);
    this.socios.splice(indice,1);
    console.log(this.ids);
  }
}
