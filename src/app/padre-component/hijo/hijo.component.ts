import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  standalone: true,
  imports: [],
  templateUrl: './hijo.component.html',
  styleUrl: './hijo.component.css'
})
export class HijoComponent {
  @Output() notificarPadre = new EventEmitter<string>();
  @Input() mensaje! : string;
  
  enviarMensaje() {
    this.notificarPadre.emit('Hola Padre');
  }
}
