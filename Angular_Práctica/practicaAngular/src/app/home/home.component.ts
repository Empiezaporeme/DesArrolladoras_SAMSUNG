import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Persona } from '../persona.model';
import { ServicioPersonasService } from '../servicio-personas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'FORMULARIO DE REGISTRO';

  controlNombre: FormControl;
  controlApellido: FormControl;
  controlEdad: FormControl;
  controlDNI: FormControl;
  controlColor: FormControl;
  controlSexo: FormGroup;
  

  constructor(private servicioPersonas: ServicioPersonasService) {
    //this.personas = this.servicioPersonas.personas;
    this.controlNombre = new FormControl('', Validators.minLength(3));
    this.controlApellido = new FormControl('', Validators.minLength(3));
    this.controlEdad = new FormControl('', Validators.min(0) && Validators.max(125));
    this.controlDNI = new FormControl('', Validators.minLength(9));
    this.controlColor = new FormControl('', Validators.minLength(3));
    this.controlSexo = new FormGroup({
      hombre: new FormControl(''),
      mujer: new FormControl(''),
      otro: new FormControl(''),
      noEspecificado: new FormControl('')
    });
    
  }

  ngOnInit(): void {
    this.personas = this.servicioPersonas.personas;
  }
  onSubmit(){
    alert("persona añadida a la lista");
  }

  personas: Persona[] = [];


  agregarPersona(){
    let nuevaPersona = new Persona(this.cuadroNombre, this.cuadroApellidos, this.cuadroEdad, this.cuadroDNI, this.cuadroCumpleanos, this.cuadroColor, this.cuadroSexo);
    this.servicioPersonas.agregarPersonaServicio(nuevaPersona);
  }

  cuadroNombre: string = "";
  cuadroApellidos: string = "";
  cuadroEdad: number = 0;
  cuadroDNI: string  = "";
  cuadroCumpleanos: Date = new Date();
  cuadroColor: string = "";
  cuadroSexo: string  = "";

}
