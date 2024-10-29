import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AutorretratoComponent } from "./autorretrato/autorretrato.component";
import { NgFor, NgIf, NgStyle } from '@angular/common';
import { PosicionService } from './posicion.service';
import { VPcComponent } from "./v-pc/v-pc.component";
import { VMovilComponent } from './v-movil/v-movil.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AutorretratoComponent, NgStyle, NgFor, NgIf, VPcComponent, VMovilComponent,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor(public posicionService: PosicionService) {

    if (/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(this.posicionService.userAgent))    {
      this.posicionService.vMovil = true;
    }
    else {
      this.posicionService.vMovil = false};


      for (let i = 0; i <= this.posicionService.nombreProyectos.length - 1; ++i) {
        this.posicionService.proyectos.push({
          id: i,
          nombre: posicionService.nombreProyectos[i],
          tamanioX: 0,
          tamanioY: 0,
          posicionX: 0.5,
          posicionY: 1.2,
          bordeRadio: 100,
          sTransicion: 1,
          url: posicionService.urlImagenes[i],
        })
      }
  
      if(window.innerWidth <= 1300){
        this.posicionService.vMovil = true
      }
  }


  @HostListener('window:resize', ['$event'])
  CambioTamanio(evento:any) {
    if(window.innerWidth <= 1300){
      this.posicionService.vMovil = true
    }
    else{this.posicionService.vMovil = false}

  } 
}
