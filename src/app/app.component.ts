import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewComponentComponent } from "./new-component/new-component.component";
import { InterpolationComponentComponent } from "./interpolation-component/interpolation-component.component";
import { PadreComponentComponent } from "./padre-component/padre-component.component";
import { MostrarMsgComponent } from "./mostrar-msg/mostrar-msg.component";
import { ReplicadorComponent } from "./replicador/replicador.component";
import { CondicionalesIfElseComponent } from "./condicionales-if-else/condicionales-if-else.component";
import { LocalReferenceComponent } from "./local-reference/local-reference.component";
import { BucleForComponent } from "./bucle-for/bucle-for.component";
import { ViewChildComponent } from "./view-child/view-child.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NewComponentComponent, InterpolationComponentComponent, PadreComponentComponent, MostrarMsgComponent, ReplicadorComponent, CondicionalesIfElseComponent, LocalReferenceComponent, BucleForComponent, ViewChildComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MAIN COMPONENT';
}
