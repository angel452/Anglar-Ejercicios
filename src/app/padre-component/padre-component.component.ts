import { Component } from '@angular/core';
import { HijoComponent } from "./hijo/hijo.component";

@Component({
  selector: 'app-padre-component',
  standalone: true,
  imports: [HijoComponent],
  templateUrl: './padre-component.component.html',
  styleUrl: './padre-component.component.css'
})
export class PadreComponentComponent {
  mensajePadre: string  = "Hola hijo";
  mensajeHijo: string = "";
  
  recibirNotificacion(mensajeRecivido: string) {
    this.mensajeHijo = mensajeRecivido;
  } 
}
