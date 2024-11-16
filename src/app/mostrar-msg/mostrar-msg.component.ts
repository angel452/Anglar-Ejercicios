import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mostrar-msg',
  standalone: true,
  imports: [],
  templateUrl: './mostrar-msg.component.html',
  styleUrl: './mostrar-msg.component.css'
})
export class MostrarMsgComponent {
  mensaje: string = '';

  constructor(private route : ActivatedRoute){}

  ngOnInit(){
    this.mensaje = this.route.snapshot.queryParams['mensajeFromNAV'];
    console.log("Mensaje: " + this.mensaje);
  }
  
  mostrarMensaje(){
    this.mensaje = 'Hola, has pulsado el botón';
  }

  resetearMensaje() {
    this.mensaje = '';
  }
  

}
