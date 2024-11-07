import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolation-component',
  standalone: true,
  imports: [],
  templateUrl: './interpolation-component.component.html',
  styleUrl: './interpolation-component.component.css'
})

export class InterpolationComponentComponent {
  titulo = 'Interpolation Component';
  usuario = {
    nombre : 'Angel',
    apellido : 'Loayza',
    edad : 21
  };

  saludar(){
    return `Hola, soy ${this.usuario.nombre} ${this.usuario.apellido}`;
  }
}

