import { NgFor, NgIf, NgStyle, NgClass } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { AutorretratoComponent } from '../autorretrato/autorretrato.component';/* 
import { RouterOutlet } from '@angular/router'; */
import { PosicionService } from '../posicion.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-v-pc',
  standalone: true,
  imports: [AutorretratoComponent, NgStyle, NgFor, NgIf, NgClass,],
  templateUrl: './v-pc.component.html',
  styleUrl: './v-pc.component.css'
})
export class VPcComponent {


  constructor(
    public posicionService: PosicionService,
    private location: Location,
    private router: Router) {


    const delayAutorretrato = 600;
    const duracionPresentacion = 1500;
    const burbujas = 100;

    this.posicionService.proyectoActual = -1; //al pasar entre el modo simple y el modo escritorio se mezclan cosas. Por eso ordeno mostrar un proyecto inexistente

    this.posicionService.posicionTextos.escala = 0;
    setTimeout(() => {
      this.posicionService.autorretrato.sAnimacion = duracionPresentacion / 1000;
      this.posicionService.autorretrato.x = 0.65;
      this.posicionService.autorretrato.y = 0.2;
      this.posicionService.autorretrato.escala = 1;

      this.posicionService.presentacion.velocidad = duracionPresentacion / 1000
    }, delayAutorretrato)

    setTimeout(() => {
      this.mostrarInicio();
      this.colocarBurbujas(false);

    }, delayAutorretrato + duracionPresentacion)

    setTimeout(() => {

      for (let i = 0; i <= this.posicionService.nombreProyectos.length - 1; ++i) {

        this.posicionService.proyectos[i].sTransicion = 0.2;
        this.posicionService.animacionActual = "esquiva";
      }
    }, delayAutorretrato + duracionPresentacion + burbujas)
  }

  title = 'Pagina_Inicial_2.1';
  caraApartada: boolean = false;

  colocarBurbujas(colocadas: boolean) {


    for (let i = 0; i <= this.posicionService.nombreProyectos.length - 1; ++i) {

      const espaciado = 0.10; //espacio entre las burbujas expresado en proporcion de pantalla X
      const inicio = 0.50 - (this.posicionService.nombreProyectos.length - 1) / 2 * espaciado; //posición de conjunto en pantalla
      const duracionAnimacion = 1;
      const tiempoEntreBurbujas = duracionAnimacion / (this.posicionService.nombreProyectos.length - 1);

      this.posicionService.proyectos[i].posicionX = inicio + espaciado * i;
      this.posicionService.proyectos[i].posicionY = 0.83;
      this.posicionService.proyectos[i].tamanioX = 0.05;
      this.posicionService.proyectos[i].tamanioY = 0.05;
      this.posicionService.proyectos[i].bordeRadio = 100;


      // En monitores ultrapanorámicos, las burbujas crecían desproporcionadamente. Esta función es para tratar de evitarlo
      if (window.innerWidth > 3000) {
        this.posicionService.proyectos[i].tamanioX = 0.03;
        this.posicionService.proyectos[i].tamanioY = 0.03;
      }

      //La primera vez que se carga la página, las burbujas aparezcan de una en una
      if (colocadas) { this.posicionService.proyectos[i].sTransicion = 0.3 + (i * 0.05); }
      //si ya estaban colocadas de antes
      else { this.posicionService.proyectos[i].sTransicion = i * tiempoEntreBurbujas + tiempoEntreBurbujas; }

    }
    this.posicionService.animacionActual = "esquiva";
  }


  //pulsar burbuja
  burbuja(id: number) {
/* 
    this.posicionService.deteccionPuntero = true; */


    //id > 90 lo he reservado para los botones superiores, y <90 para los proyectos
    if (id == this.posicionService.proyectoActual && id <= 90) {

      this.posicionService.deteccionPuntero = false;
      
      this.posicionService.autorretrato.sAnimacion = 5;
      this.posicionService.autorretrato.rotacion = 800;
      this.posicionService.autorretrato.escala = 0.0;
      this.posicionService.autorretrato.x = -0.4;

      window.open(this.posicionService.urlProyectos[this.posicionService.proyectoActual], "_self")
    }
    else {

      this.posicionService.proyectoActual = -1;

      this.posicionService.deteccionPuntero = false; //quiero que los ojos miren al proyecto
      console.log(this.posicionService.deteccionPuntero);
      this.posicionService.pupila.xd = 1.5;
      this.posicionService.pupila.yd = 1.5;
      this.posicionService.pupila.xi = -0.5;
      this.posicionService.pupila.yi = 3;

      const sTiempoTexto: number = 0.2;

      this.colocarBurbujas(true);

      this.posicionService.botones.y = 0.05;
      this.posicionService.botones.x = 0.94;

      this.posicionService.autorretrato.sAnimacion = 1;
      this.posicionService.autorretrato.x = 0.67;
      this.posicionService.autorretrato.rotacion = 0;
      this.posicionService.autorretrato.escala = 0.8;

      if (id <= 90) { /* los proyectos */
        this.posicionService.proyectos[id].posicionX = 0.12;
        this.posicionService.proyectos[id].posicionY = 0.25;
        this.posicionService.proyectos[id].tamanioX = this.posicionService.tamanioPorDefectoImagen; /* 45 */
        this.posicionService.proyectos[id].tamanioY = this.posicionService.tamanioPorDefectoImagen - 0.05;
        this.posicionService.proyectos[id].bordeRadio = 5;
        this.location.go('/#/proyectos')
        this.ReestrablecerAutorretrato()
      }
      else if (id == 99) {/* inicio */
        this.ReestrablecerAutorretrato()
        this.posicionService.autorretrato.escala = 1;
        this.posicionService.autorretrato.x = 0.65;
        this.posicionService.autorretrato.y = 0.2;
        this.location.go('/#/inicio');
      }
      else if (id == 97) {
        this.location.go('/#/QuienSoy')
        this.ReestrablecerAutorretrato()
      } /* quienSoy */

      else if (id == 98) {/* contacto */
        this.posicionService.autorretrato.escala = 1;
        this.posicionService.autorretrato.x = 0.68;
        this.posicionService.autorretrato.y = 0.2;/* 
        this.posicionService.cejas.rd = -15;
        this.posicionService.cejas.ri = 10;
        this.posicionService.cejas.yd = -10; */
        this.location.go('/#/contacto');
      }
      else {
        this.ReestrablecerAutorretrato()
      }


      this.posicionService.presentacion.velocidad = sTiempoTexto / 2;
      this.posicionService.presentacion.escala = 0;
      this.posicionService.posicionTextos.velocidad = sTiempoTexto / 2;
      this.posicionService.posicionTextos.escala = 0;


      setTimeout(() => {
        this.posicionService.posicionTextos.velocidad = sTiempoTexto / 2;
        this.posicionService.posicionTextos.x = 0.6;
        this.posicionService.posicionTextos.y = 0.4;
      }, sTiempoTexto / 2 * 1000)

      setTimeout(() => {
        this.posicionService.proyectoActual = id;
      }, sTiempoTexto / 2 * 1010)

      setTimeout(() => {
        this.posicionService.posicionTextos.velocidad = sTiempoTexto / 2;
        this.posicionService.posicionTextos.x = 0.34;
        this.posicionService.posicionTextos.y = 0.25;
        this.posicionService.posicionTextos.escala = 1;
      }, sTiempoTexto * 1000)

      setTimeout(() => {
        this.posicionService.deteccionPuntero = true; //quiero que los ojos miren al puntero
      }, 2000)

      this.posicionService.animacionActual = "esquiva"
    }
    console.log(this.posicionService.deteccionPuntero);
  }

  mostrarInicio() {
    this.posicionService.autorretrato.sAnimacion = 0.5;
    this.posicionService.presentacion.x = 0.2;
    this.posicionService.presentacion.y = 0.3;
    this.posicionService.presentacion.escala = 1;
    this.posicionService.animacionActual = "esquiva";
    this.posicionService.botones.y = 0.62;
    this.posicionService.botones.x = 0.3;
  }

  ReestrablecerAutorretrato() {
    this.posicionService.autorretrato.sAnimacion = 0.5;/* 
    this.posicionService.deteccionPuntero = true; */
    this.posicionService.cejas.rd = 0;
    this.posicionService.cejas.ri = 0;
  }

  //cuando pulsas en la cara se enfada
  autorretrato() {
    this.posicionService.deteccionPuntero = false;

    this.posicionService.autorretrato.sAnimacion = 0.1;
    this.posicionService.autorretrato.escala = 0.8;
    this.posicionService.cejas.rd = 20;
    this.posicionService.cejas.ri = -20;


    setTimeout(() => {
      this.ReestrablecerAutorretrato()
    }, 1000)
  }

  @HostListener('window:wheel', ['$event'])
  ruedecilla(event: any) {
    if (event.deltaY > 0) {
      if (this.posicionService.proyectoActual == this.posicionService.proyectos.length - 1) {
        this.burbuja(this.posicionService.proyectoActual = 97)
      }
      else if (this.posicionService.proyectoActual == 98) {
        return
      }
      else {
        this.burbuja(this.posicionService.proyectoActual + 1)
      }
    }
    else if (event.deltaY < 0) {
      if (this.posicionService.proyectoActual == 97) {
        this.burbuja(this.posicionService.proyectos.length - 1)
      }
      else if (this.posicionService.proyectoActual == 0) {
        this.posicionService.proyectoActual = -1
        this.mostrarInicio()
        this.colocarBurbujas(true)
      }
      else if (this.posicionService.proyectoActual == -1) {
        return
      }
      else {
        this.burbuja((this.posicionService.proyectoActual - 1))
      }
    }
  }

  @HostListener('document:mousemove', ['$event'])
  movimientoRaton(event: MouseEvent) { /* MouseEvent */

console.log(this.posicionService.deteccionPuntero);


    if (this.posicionService.deteccionPuntero) {
      /* this.posicionService.autorretrato.y = 0.5; *//* 
      this.posicionService.autorretrato.escala = window.innerHeight / 1000; */

      this.posicionService.puntero.x = event.clientX / window.innerWidth;
      this.posicionService.puntero.y = event.clientY / window.innerHeight;

      this.posicionService.pelo.x = this.posicionService.puntero.x * 4;
      this.posicionService.pelo.y = this.posicionService.puntero.y * 5;
      this.posicionService.cejas.xd = this.posicionService.puntero.x * 4;
      this.posicionService.cejas.yd = this.posicionService.puntero.y * 5;
      this.posicionService.ojos.x = this.posicionService.puntero.x * 2;
      this.posicionService.pupila.yi = this.posicionService.puntero.y * 4 + 1.5;
      this.posicionService.pupila.yd = this.posicionService.puntero.y * 4;
      this.posicionService.nariz.x = this.posicionService.puntero.x * 10;
      this.posicionService.barba.x = this.posicionService.puntero.x * 5;
      this.posicionService.boca.x = this.posicionService.puntero.x * 4;
      this.posicionService.oreja.x = 1 - this.posicionService.puntero.x * 4;


      const posicionRelativa = (this.posicionService.autorretrato.x * this.posicionService.puntero.x) /
        (this.posicionService.autorretrato.x * this.posicionService.autorretrato.x);

      if (posicionRelativa <= 1) {
        this.posicionService.pupila.xd = posicionRelativa * 15;
        this.posicionService.pupila.xi = posicionRelativa * 10 - 5;
      }
      else {
        this.posicionService.pupila.xd = posicionRelativa * 15 - ((posicionRelativa - 1) * 5);
        this.posicionService.pupila.xi = posicionRelativa * 10 - 5 + ((posicionRelativa - 1) * 10);
      }

      /* 
            if (this.posicionService.puntero.x < this.posicionService.autorretrato.x) {
      
              const posicionRelativa = (this.posicionService.autorretrato.x * this.posicionService.puntero.x) /
                (this.posicionService.autorretrato.x * this.posicionService.autorretrato.x);
      
              this.posicionService.pupila.xd = posicionRelativa * 18;
              this.posicionService.pupila.xi = posicionRelativa * 18; // si se sale el puntero de la pantalla y luego vuelve por el lado opuesto, no volvía a su lugar
            }
            else {
              const posicionRelativa = (this.posicionService.puntero.x - this.posicionService.autorretrato.x) / (1 - this.posicionService.autorretrato.x)
      
      
              this.posicionService.pupila.xi = posicionRelativa * 20;
              this.posicionService.pupila.xd = 18; // si se sale el puntero de la pantalla y luego vuelve por el lado opuesto, no volvía a su lugar
      
            } */

      /* 
      
            if (this.posicionService.puntero.x >= 0.65 && this.posicionService.puntero.x <= 0.75 && this.posicionService.puntero.y >= 0.80) {
              this.caraApartada = true;
            }
            else {
              this.caraApartada = false;
            }
      
          if (this.caraApartada == true) {
            this.posicionService.autorretrato.x = 0.8;
            this.posicionService.pelo.x = -20;
            setTimeout(() => {
              this.posicionService.pelo.x = 20
            }, 300)
            setTimeout(() => {
              this.posicionService.pelo.x = 0
            }, 600)
          }
          else {
            this.posicionService.autorretrato.x = 0.6
      
            this.posicionService.pelo.x = 20;
            setTimeout(() => {
              this.posicionService.pelo.x = -20
            }, 300)
            setTimeout(() => {
              this.posicionService.pelo.x = 0
            }, 600)
          } */
    }
  }
}
