import { UsuariosService } from './../usuarios.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-usuarios',
  standalone: true,
  imports: [],
  templateUrl: './lista-usuarios.component.html',
  styleUrl: './lista-usuarios.component.css'
})

export class ListaUsuariosComponent {
  usuarios : any[] = [];
  constructor(private usuariosService : UsuariosService){}

  ngOnInit(){
    this.usuariosService.obtenerDatos().subscribe((datos) => {
      this.usuarios = datos;
    });
  }
}
