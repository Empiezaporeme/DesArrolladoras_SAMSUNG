import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Socio } from '../socio.model';

@Component({
  selector: 'app-socio',
  templateUrl: './socio.component.html',
  styleUrls: ['./socio.component.css']
})
export class SocioComponent implements OnInit {

  @Input() socioLista: Socio;
  @Input() indice: number;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  ventanaActualizar(){

    this.router.navigate(['/actualizar/:id']);
  }

}
