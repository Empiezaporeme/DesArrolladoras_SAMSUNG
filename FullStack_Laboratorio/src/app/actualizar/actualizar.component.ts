import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Socio } from '../socio.model';
import { ServicioSociosService } from '../servicio-socios.service';

@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.component.html',
  styleUrls: ['./actualizar.component.css']
})
export class ActualizarComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private servicioSocios: ServicioSociosService) { }

  controlNombre: FormControl;
  controlApellido: FormControl;
  controlSocio: FormControl;
  controlDNI: FormControl;
  controlTelefono: FormControl;
  controlSexo: FormGroup;

  ngOnInit(): void {
    this.socios = this.servicioSocios.socios;
    this.indice = this.route.snapshot.params['id'];
    let socio: Socio = this.servicioSocios.encontrarSocio(this.indice);

    this.cuadroNombre = socio.nombre;
    this.cuadroApellidos = socio.apellidos;
    this.cuadroSocio = socio.socio;
    this.cuadroDNI = socio.dni;
    this.cuadroTelefono = socio.telefono;
    this.cuadroSexo = socio.sexo;

    this.controlNombre = new FormControl('', Validators.minLength(3));
    this.controlApellido = new FormControl('', Validators.minLength(3));
    this.controlSocio = new FormControl('', Validators.min(0) && Validators.max(125));
    this.controlDNI = new FormControl('', Validators.minLength(9));
    this.controlTelefono = new FormControl('', Validators.minLength(3));
    this.controlSexo = new FormGroup({
      hombre: new FormControl(''),
      mujer: new FormControl(''),
    });
  }

  onSubmit(){
    console.log(this.controlSexo.value);
  }

  socios: Socio[] = [];

  ids: Set<number> = this.servicioSocios.ids;

  volverHome(){

    this.router.navigate([""]);
  }

  actualizarSocio(){
    let miSocio = new Socio(this.cuadroNombre, this.cuadroApellidos, this.cuadroSocio, this.cuadroDNI, this.cuadroTelefono, this.cuadroSexo)
    this.servicioSocios.actualizarSocio(this.indice, miSocio);
    this.router.navigate(['']);
  }

  eliminarSocio(){
    this.servicioSocios.eliminarSocio(this.indice);
    this.router.navigate(['']);
    alert("Se ha eliminado al socio de la lista.");

  }

  cuadroNombre: string = "";
  cuadroApellidos: string = "";
  cuadroSocio: number = 0;
  cuadroDNI: string  = "";
  cuadroTelefono: string = "";
  cuadroSexo: string  = "";

  indice: number;

}
