import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Socio } from '../socio.model';
import { ServicioSociosService } from '../servicio-socios.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'FORMULARIO DE REGISTRO DE SOCIOS';

  controlNombre: FormControl;
  controlApellido: FormControl;
  controlSocio: FormControl;
  controlDNI: FormControl;
  controlTelefono: FormControl;
  controlSexo: FormGroup;
  

  constructor(private servicioSocios: ServicioSociosService) {
    this.controlNombre = new FormControl('', Validators.minLength(3));
    this.controlApellido = new FormControl('', Validators.minLength(3));
    this.controlSocio = new FormControl('', Validators.min(0) && Validators.max(125));
    this.controlDNI = new FormControl('', Validators.minLength(9));
    this.controlTelefono = new FormControl('', Validators.minLength(3));
    this.controlSexo = new FormGroup({
      hombre: new FormControl(''),
      mujer: new FormControl('')
    });
    

  }

  ngOnInit(): void {
    this.socios = this.servicioSocios.socios;
  }
  onSubmit(){
    alert("socio añadido a la lista");
  }

  socios: Socio[] = [];

  ids: Set<number> = this.servicioSocios.ids;

  agregarSocio(){
    let nuevoSocio = new Socio(this.cuadroNombre, this.cuadroApellidos, this.cuadroSocio, this.cuadroDNI, this.cuadroTelefono, this.cuadroSexo);
    this.servicioSocios.agregarSocioServicio(nuevoSocio);
    this.cuadroSocio = new Date().getTime();
  }

  cuadroNombre: string = "";
  cuadroApellidos: string = "";
  cuadroSocio: number = new Date().getTime();
  cuadroDNI: string  = "";
  cuadroTelefono: string = "";
  cuadroSexo: string  = "";

}
