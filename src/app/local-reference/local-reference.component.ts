import { Component } from '@angular/core';

@Component({
  selector: 'app-local-reference',
  standalone: true,
  imports: [],
  templateUrl: './local-reference.component.html',
  styleUrl: './local-reference.component.css'
})

export class LocalReferenceComponent {
  tarea : string = '';

  agregarTarea( contenidoTarea: string ) {
    this.tarea = "Tarea agregada: " + contenidoTarea;
  }
}
