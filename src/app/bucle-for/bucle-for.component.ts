import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-bucle-for',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './bucle-for.component.html',
  styleUrl: './bucle-for.component.css'
})
export class BucleForComponent {
  // Variables
  listaTareas: string[] = [
    'Tarea 1',
    'Tarea 2',
    'Tarea 3',
    'Tarea 4'
  ]

  // Método para agregar tareas
  agregarTarea(nuevaTarea: string) : void {
    if (nuevaTarea) {
      this.listaTareas.push(nuevaTarea);
    }
  }
}
