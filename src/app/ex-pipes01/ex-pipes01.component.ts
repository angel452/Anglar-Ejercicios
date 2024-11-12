import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ex-pipes01',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ex-pipes01.component.html',
  styleUrl: './ex-pipes01.component.css'
})
export class ExPipes01Component {
  empleados = [
    { nombre: 'Juan', salario: 1000, fechaNacimiento: new Date('1980-01-01') },
    { nombre: 'Ana', salario: 1200, fechaNacimiento: new Date('1985-01-01') },
    { nombre: 'Pedro', salario: 1500, fechaNacimiento: new Date('1990-01-10') },
    { nombre: 'Maria', salario: 2000, fechaNacimiento: new Date('1995-01-01') }
  ];
}
