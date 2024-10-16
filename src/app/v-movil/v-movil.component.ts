import { Component } from '@angular/core';
import { PosicionService } from '../posicion.service';
import { RouterOutlet } from '@angular/router';
import { NgFor, NgIf, NgStyle } from '@angular/common';

@Component({
  selector: 'app-v-movil',
  standalone: true,
  imports: [ RouterOutlet, NgIf, NgFor, NgStyle],
  templateUrl: './v-movil.component.html',
  styleUrl: './v-movil.component.css'
})
export class VMovilComponent {

  constructor(public posicionService: PosicionService){}


  lanzarProyecto(proyecto: number){

    window.open(this.posicionService.urlProyectos[proyecto] ,"_self")
  }
}
