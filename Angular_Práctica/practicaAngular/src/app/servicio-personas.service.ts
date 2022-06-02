import { Injectable } from '@angular/core';
import { Persona } from './persona.model';

@Injectable({
  providedIn: 'root'
})
export class ServicioPersonasService {

  constructor() { }

  personas: Persona[] = [

    new Persona("Pepe","Pérez",45,"54321098L",new Date(1997,5,1),"rojo","hombre")

  ];

  agregarPersonaServicio(persona: Persona){
    persona.cumpleanos = new Date(persona.cumpleanos);
    this.personas.push(persona);
  }

  encontrarPersona(indice: number){
    let persona: Persona = this.personas[indice];
    return persona;
  }

  actualizarPersona(indice: number, persona: Persona){
    let personaModificado = this.personas[indice];
    personaModificado.nombre = persona.nombre;
    personaModificado.apellidos = persona.apellidos;
    personaModificado.edad = persona.edad;
    personaModificado.dni = persona.dni;
    personaModificado.cumpleanos = persona.cumpleanos;
    personaModificado.color = persona.color;
    personaModificado.sexo = persona.sexo;

  }

  eliminarPersona(indice:number){
    this.personas.splice(indice,1);
  }
}
