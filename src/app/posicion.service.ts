import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PosicionService {

  constructor() {  }

  //posiciones
  puntero = { x: 0, y: 0 };  //expresado en porcentaje de pantalla

  autorretrato = { x: 0.6, y: 0.5, escala: 0.4};

  pelo = { x: 0, y: 0 };
  cejas = { xd: 1, yd: 1, xi: 1,  yi: 1, rx:0, ry:0 };
  ojos = { x: 0, y: 0 };
  pupila = { xd: 1, yd: 1, xi: 1,  yi: 1 };
  oreja = { x: 0, y: 0 };
  nariz = { x: 0, y: 0 };
  boca = { x: 0, y: 0 };
  barba = { x: 0, y: 0 };
}
