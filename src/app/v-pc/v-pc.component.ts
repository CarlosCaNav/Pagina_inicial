import { NgFor, NgIf, NgStyle } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { AutorretratoComponent } from '../autorretrato/autorretrato.component';
import { RouterOutlet } from '@angular/router';
import { PosicionService } from '../posicion.service';

@Component({
  selector: 'app-v-pc',
  standalone: true,
  imports: [RouterOutlet, AutorretratoComponent, NgStyle, NgFor, NgIf],
  templateUrl: './v-pc.component.html',
  styleUrl: './v-pc.component.css'
})
export class VPcComponent {


  constructor(public posicionService: PosicionService) {


    const delayAutorretrato = 100;
    const duracionPresentacion = 2000;
    const burbujas = 1000;

    setTimeout(() => {
      this.posicionService.autorretrato.sAnimacion = duracionPresentacion / 1000;
      this.posicionService.autorretrato.x = 0.6;
      this.posicionService.autorretrato.y = 0.3;
      this.posicionService.autorretrato.escala = window.innerHeight / 1000;

      this.posicionService.presentacion.velocidad = duracionPresentacion / 1000
    }, delayAutorretrato)

    setTimeout(() => {
      this.colocarBurbujas(false);
      this.mostrarInicio();

    }, delayAutorretrato + duracionPresentacion)


    setTimeout(() => {


      for (let i = 0; i <= this.posicionService.nombreProyectos.length - 1; ++i) {

        this.posicionService.proyectos[i].sTransicion = 0.2;
        this.posicionService.animacionActual = "esquiva";
      }
    }, delayAutorretrato + duracionPresentacion + burbujas)
  }

  title = 'Pagina_Inicial_2.1';


  colocarBurbujas(colocadas: boolean) {
    for (let i = 0; i <= this.posicionService.nombreProyectos.length - 1; ++i) {

      const espaciado = 10;
      const inicio = 50 - (this.posicionService.nombreProyectos.length - 1) / 2 * espaciado;
      const duracionAnimacion = 1;
      const tiempoEntreBurbujas = duracionAnimacion / (this.posicionService.nombreProyectos.length - 1);

      this.posicionService.proyectos[i].posicionX = inicio + espaciado * i;
      this.posicionService.proyectos[i].posicionY = 80;
      this.posicionService.proyectos[i].tamanioX = 10;
      this.posicionService.proyectos[i].tamanioY = 10;
      this.posicionService.proyectos[i].bordeRadio = 100;

      if (colocadas) { this.posicionService.proyectos[i].sTransicion = 0.3 + (i * 0.05); }
      else { this.posicionService.proyectos[i].sTransicion = i * tiempoEntreBurbujas + 3; }

    }
  }


  //pulsar burbuja
  burbuja(id: number) {

    this.posicionService.deteccionPuntero = true;

    if (id == this.posicionService.proyectoActual) {

      this.posicionService.deteccionPuntero = false;
      this.posicionService.autorretrato.sAnimacion = 5;
      this.posicionService.autorretrato.rotacion = 2000;
      this.posicionService.autorretrato.escala = 1.5;

      window.open(this.posicionService.urlProyectos[this.posicionService.proyectoActual] ,"_self")


    /*   
      switch (this.posicionService.proyectoActual) {
        case 0:
          window.open(this.posicionService.urlProyectos[0] ,"_self")
          break;
          case 1:
            window.open(this.posicionService.urlProyectos[1], "_self")
            break;
            case 1:
              window.open(this.posicionService.urlProyectos[1], "_self")
              break;
              case 1:
                window.open(this.posicionService.urlProyectos[1], "_self")
                break;
      } */
    }
    else {

      this.posicionService.deteccionPuntero = false; //quiero que los ojos miren al proyecto
      this.posicionService.pupila.xd = 1.5;
      this.posicionService.pupila.yd = 1.5;
      this.posicionService.pupila.xi = -0.5;
      this.posicionService.pupila.yi = 3;

      const sTiempoTexto: number = 0.5;

      this.colocarBurbujas(true);

      this.posicionService.botones.y = 0.05;
      this.posicionService.botones.x = 0.4;

      this.posicionService.autorretrato.sAnimacion = 1;
      this.posicionService.autorretrato.x = 0.65;
      this.posicionService.autorretrato.rotacion = 0
      this.posicionService.autorretrato.escala = 1

      if (id <= 90) {
        this.posicionService.proyectos[id].posicionX = 12;
        this.posicionService.proyectos[id].posicionY = 25;
        this.posicionService.proyectos[id].tamanioX = 45;
        this.posicionService.proyectos[id].tamanioY = 35;
        this.posicionService.proyectos[id].bordeRadio = 5;
      }


      this.posicionService.presentacion.velocidad = sTiempoTexto / 2;
      this.posicionService.presentacion.escala = 0;
      this.posicionService.posicionTextos.velocidad = sTiempoTexto / 2;
      this.posicionService.posicionTextos.escala = 0;


      setTimeout(() => {
        this.posicionService.posicionTextos.velocidad = sTiempoTexto / 2;
        this.posicionService.posicionTextos.x = 0.6;
        this.posicionService.posicionTextos.y = 0.6;
      }, sTiempoTexto / 2 * 1000)

      setTimeout(() => {
        this.posicionService.proyectoActual = id;
      }, sTiempoTexto / 2 * 1010)

      setTimeout(() => {
        this.posicionService.posicionTextos.velocidad = sTiempoTexto / 2;
        this.posicionService.posicionTextos.x = 0.35;
        this.posicionService.posicionTextos.y = 0.3;
        this.posicionService.posicionTextos.escala = window.innerHeight / 1000;
      }, sTiempoTexto * 1000)

      setTimeout(() => {
        this.posicionService.deteccionPuntero = true; //quiero que los ojos miren al puntero
      }, 3000)

      this.posicionService.animacionActual = "esquiva"
    }
  }

  mostrarInicio() {

    this.posicionService.autorretrato.sAnimacion = 0.5;
    this.posicionService.presentacion.x = 0.2;
    this.posicionService.presentacion.y = 0.3;
    this.posicionService.presentacion.escala = 1;
    this.posicionService.animacionActual = "esquiva";


    setTimeout(() => {


      this.posicionService.botones.y = 0.55;
      this.posicionService.botones.x = 0.3;
    }, 1000)
  }

  autorretrato() {
    this.posicionService.deteccionPuntero = false;

    this.posicionService.autorretrato.sAnimacion = 0.1;
    this.posicionService.autorretrato.escala = 0.8;
    this.posicionService.cejas.rd = 20;
    this.posicionService.cejas.ri = -20;


    setTimeout(() => {
      this.posicionService.autorretrato.sAnimacion = 0.5;
      this.posicionService.deteccionPuntero = true;
      this.posicionService.cejas.rd = 0;
      this.posicionService.cejas.ri = 0;
    }, 1000)
  }

  @HostListener('document:mousemove', ['$event'])
  raton(event: MouseEvent) {

    if (this.posicionService.deteccionPuntero) {
      /* this.posicionService.autorretrato.y = 0.5; */
      this.posicionService.autorretrato.escala = window.innerHeight / 1000;

      this.posicionService.puntero.x = event.clientX / window.innerWidth;
      this.posicionService.puntero.y = event.clientY / window.innerHeight;

      this.posicionService.pelo.x = this.posicionService.puntero.x * 4;
      this.posicionService.pelo.y = this.posicionService.puntero.y * 5;
      this.posicionService.cejas.xd = this.posicionService.puntero.x * 4;
      this.posicionService.cejas.yd = this.posicionService.puntero.y * 5;
      this.posicionService.ojos.x = this.posicionService.puntero.x * 2;
      this.posicionService.pupila.yi = this.posicionService.puntero.y * 5;
      this.posicionService.pupila.yd = this.posicionService.puntero.y * 5;
      this.posicionService.nariz.x = this.posicionService.puntero.x * 10;
      this.posicionService.barba.x = this.posicionService.puntero.x * 5;
      this.posicionService.boca.x = this.posicionService.puntero.x * 4;
      this.posicionService.oreja.x = 1 - this.posicionService.puntero.x * 4;

      if (this.posicionService.puntero.x < this.posicionService.autorretrato.x) {

        const posicionRelativa = (this.posicionService.autorretrato.x * this.posicionService.puntero.x) /
          (this.posicionService.autorretrato.x * this.posicionService.autorretrato.x);

        this.posicionService.pupila.xd = posicionRelativa * 18;
        this.posicionService.pupila.xi = 0; // si se sale el puntero de la pantalla y luego vuelve por el lado opuesto, no volvía a su lugar
      }
      else {
        const posicionRelativa = (this.posicionService.puntero.x - this.posicionService.autorretrato.x) / (1 - this.posicionService.autorretrato.x)


        this.posicionService.pupila.xi = posicionRelativa * 20;
        this.posicionService.pupila.xd = 18; // si se sale el puntero de la pantalla y luego vuelve por el lado opuesto, no volvía a su lugar

      }


      if (this.posicionService.animacionActual == "esquiva") /* esquiva */ {

        if (this.posicionService.puntero.x >= 0.65 && this.posicionService.puntero.x <= 0.75 && this.posicionService.autorretrato.x == 0.6 && this.posicionService.puntero.y >= 0.80) {
          this.posicionService.autorretrato.x = 0.8;
          this.posicionService.pelo.x = -20;
          setTimeout(() => {
            this.posicionService.pelo.x = 20
          }, 300)
          setTimeout(() => {
            this.posicionService.pelo.x = 0
          }, 600)
        }
        else if (((this.posicionService.puntero.x >= 0.75 && this.posicionService.puntero.x <= 0.9) || this.posicionService.puntero.x <= 0.4) && this.posicionService.autorretrato.x == 0.8) {
          this.posicionService.autorretrato.x = 0.6


          this.posicionService.pelo.x = 20;
          setTimeout(() => {
            this.posicionService.pelo.x = -20
          }, 300)
          setTimeout(() => {
            this.posicionService.pelo.x = 0
          }, 600)
        }

      }
    }
  }
}
