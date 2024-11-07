import { Component } from '@angular/core';

@Component({
  selector: 'app-condicionales-if-else',
  standalone: true,
  imports: [],
  templateUrl: './condicionales-if-else.component.html',
  styleUrl: './condicionales-if-else.component.css'
})
export class CondicionalesIfElseComponent {
  // Variables
  isAuthenticated : boolean = false;
  
  // Métodos
  alternarAutenticacion() : void {
    this.isAuthenticated = !this.isAuthenticated;
  }
}
