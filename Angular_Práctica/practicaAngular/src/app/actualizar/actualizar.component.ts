import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from '../persona.model';
import { ServicioPersonasService } from '../servicio-personas.service';

@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.component.html',
  styleUrls: ['./actualizar.component.css']
})
export class ActualizarComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private servicioPersonas: ServicioPersonasService) { }

  controlNombre: FormControl;
  controlApellido: FormControl;
  controlEdad: FormControl;
  controlDNI: FormControl;
  controlColor: FormControl;
  controlSexo: FormGroup;

  ngOnInit(): void {
    this.personas = this.servicioPersonas.personas;
    this.indice = this.route.snapshot.params['id'];
    let persona: Persona = this.servicioPersonas.encontrarPersona(this.indice);

    this.cuadroNombre = persona.nombre;
    this.cuadroApellidos = persona.apellidos;
    this.cuadroEdad = persona.edad;
    this.cuadroDNI = persona.dni;
    this.cuadroCumpleanos = new Date(persona.cumpleanos);
    this.cuadroFecha = this.cuadroCumpleanos.getFullYear() + '-' + this.cuadroCumpleanos.toLocaleDateString(undefined, {month: '2-digit'}) + '-' + this.cuadroCumpleanos.toLocaleDateString(undefined, {day: '2-digit'})
    this.cuadroColor = persona.color;
    this.cuadroSexo = persona.sexo;

    this.controlNombre = new FormControl('', Validators.minLength(3));
    this.controlApellido = new FormControl('', Validators.minLength(3));
    this.controlEdad = new FormControl('', Validators.min(0) && Validators.max(125));
    this.controlDNI = new FormControl('', Validators.minLength(9) && Validators.maxLength(9));
    this.controlColor = new FormControl('', Validators.minLength(3));
    this.controlSexo = new FormGroup({
      hombre: new FormControl(''),
      mujer: new FormControl(''),
      otro: new FormControl(''),
      noEspecificado: new FormControl('')
    });
  }

  onSubmit(){
    console.log(this.controlSexo.value);
  }

  personas: Persona[] = [];

  volverHome(){

    this.router.navigate([""]);
  }

  actualizarPersona(){
    let miPersona = new Persona(this.cuadroNombre, this.cuadroApellidos, this.cuadroEdad, this.cuadroDNI, new Date(this.cuadroFecha), this.cuadroColor, this.cuadroSexo)
    this.servicioPersonas.actualizarPersona(this.indice, miPersona);
    this.router.navigate(['']);
  }

  eliminarPersona(){
    this.servicioPersonas.eliminarPersona(this.indice);
    this.router.navigate(['']);
    alert("Se ha eliminado a la persona de la lista.");

  }

  cuadroNombre: string = "";
  cuadroApellidos: string = "";
  cuadroEdad: number = 0;
  cuadroDNI: string  = "";
  cuadroCumpleanos: Date = new Date();
  cuadroFecha: string = "";
  cuadroColor: string = "";
  cuadroSexo: string  = "";

  indice: number;

}
