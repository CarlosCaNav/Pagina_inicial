import { Injectable } from '@angular/core';
import { proyecto } from './proyectosInterface';

@Injectable({
  providedIn: 'root'
})
export class PosicionService {

  constructor() { }

  //posiciones expresado en porcentaje de pantalla
  puntero = { x: 0, y: 0 };
  deteccionPuntero: boolean = true;

  userAgent = navigator.userAgent.toLowerCase();

  vMovil: boolean = false;

  autorretrato = { x: 1.1, y: 0, escala: 0, sAnimacion: 1, rotacion: 0 };

  pelo = { x: 0, y: 0 };
  cejas = { xd: 1, yd: 1, xi: 1, yi: 1, rd: 0, ri: 0 };
  ojos = { x: 0, y: 0 };
  pupila = { xd: 1, yd: 1, xi: 1, yi: 1 };
  oreja = { x: 0, y: 0 };
  nariz = { x: 0, y: 0 };
  boca = { x: 0, y: 0 };
  barba = { x: 0, y: 0 };

  botones = { x: -0.3, y: 0.52};

  animacionActual: string = "aparecer"; //aparecer, esquiva, desplazamiento...
  proyectoActual: number = -1;

  //textos
  posicionTextos = { x: 0.6, y: 0.6, escala: 0, velocidad: 2 };
  presentacion = { x: 0.6, y: 0.6, escala: 0, velocidad: 2 };

  nombreProyectos = ["escapeRoom", "pokeApi", "pentaculo", "rol"];
  urlImagenes = ["url('/proyectos/escapeRoom.jpg'","url('/proyectos/pokeApi.jpg'", "url('/proyectos/pentaculo.jpg'", "url('/proyectos/rol.jpg'"];
urlProyectos = ['https://escaperoom-15o1.onrender.com', 'https://pokeapi-w9mo.onrender.com/', 'https://luces-pentaculo-c.onrender.com']
proyectos: proyecto[] = [];
descripcionProyectos: [] = [];


movil(dispositivo: boolean){
  this.vMovil = dispositivo;
}
  /* 
    escapeRoom = { tamanioX: 10, tamanioY: 10, posicionX: 50, posicionY: 120, bordeRadio: 100, sTransicion: 1, url: "url('/proyectos/escapeRoom.jpg'"};
    pentaculo = { tamanioX: 10, tamanioY: 10, posicionX: 50, posicionY: 120, bordeRadio: 100, sTransicion: 1.5,  url: "url('/proyectos/pentaculo.jpg'"};
    rol = { tamanioX: 10, tamanioY: 10, posicionX: 50, posicionY: 120, bordeRadio: 100, sTransicion: 2, url: "url('/proyectos/rol.jpg'"}; */
}
