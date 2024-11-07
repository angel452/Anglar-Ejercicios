import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-view-child',
  standalone: true,
  imports: [],
  templateUrl: './view-child.component.html',
  styleUrl: './view-child.component.css'
})
export class ViewChildComponent {
  @ViewChild('inputReference') myElementInput! : ElementRef;
  
  cambiarTexto() {
    this.myElementInput.nativeElement.value = 'Texto cambiado'; 
  }
}
