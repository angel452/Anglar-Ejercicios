import { Component } from '@angular/core';

@Component({
  selector: 'app-mostrar-msg',
  standalone: true,
  imports: [],
  templateUrl: './mostrar-msg.component.html',
  styleUrl: './mostrar-msg.component.css'
})
export class MostrarMsgComponent {
  mensaje: string = '';
  
  mostrarMensaje(){
    this.mensaje = 'Hola, has pulsado el botón';
  }

  resetearMensaje() {
    this.mensaje = '';
  }
  

}
