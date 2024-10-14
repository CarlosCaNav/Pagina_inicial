import { NgIf, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { PosicionService } from '../posicion.service';

@Component({
  selector: 'app-autorretrato',
  standalone: true,
  imports: [NgStyle, NgIf],
  templateUrl: './autorretrato.component.html',
  styleUrl: './autorretrato.component.css'
})
export class AutorretratoComponent {
  constructor  (public posicionService: PosicionService) {}

}
