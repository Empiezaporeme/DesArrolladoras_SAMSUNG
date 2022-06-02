import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from '../persona.model';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

  @Input() personaLista: Persona;
  @Input() indice: number;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  ventanaActualizar(){

    this.router.navigate(['/actualizar/:id']);
  }

}
