import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PosicionService {

  constructor() {  }

  //posiciones expresado en porcentaje de pantalla
  puntero = { x: 0, y: 0 }; 

  autorretrato = { x: 0.6, y: 0.3, escala: 0.0, sAnimacion: 1}; 

  pelo = { x: 0, y: 0 };
  cejas = { xd: 1, yd: 1, xi: 1,  yi: 1, rx:0, ry:0 };
  ojos = { x: 0, y: 0 };
  pupila = { xd: 1, yd: 1, xi: 1,  yi: 1 };
  oreja = { x: 0, y: 0 };
  nariz = { x: 0, y: 0 };
  boca = { x: 0, y: 0 };
  barba = { x: 0, y: 0 };

  ejemploFalso = { x: 0, y: 0 };
  
  presentacion = { x: 0.2, y: 0.3, escala: 0.0};

  animacionActual: string = "aparecer" //aparecer, esquiva, desplazamiento...


}
