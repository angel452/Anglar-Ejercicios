import { Component, LOCALE_ID } from '@angular/core';
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
import { ListaUsuariosComponent } from "./lista-usuarios/lista-usuarios.component";
import { ExPipes01Component } from "./ex-pipes01/ex-pipes01.component";
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import { NavegacionComponent } from "./navegacion/navegacion.component";

registerLocaleData(localeEs, 'es');

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NewComponentComponent, InterpolationComponentComponent, PadreComponentComponent, MostrarMsgComponent, ReplicadorComponent, CondicionalesIfElseComponent, LocalReferenceComponent, BucleForComponent, ViewChildComponent, ListaUsuariosComponent, ExPipes01Component, NavegacionComponent],
  providers: [{provide: LOCALE_ID, useValue: 'es'}],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MAIN COMPONENT';
}
