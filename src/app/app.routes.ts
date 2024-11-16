import { Routes } from '@angular/router';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';
import { MostrarMsgComponent } from './mostrar-msg/mostrar-msg.component';
import { PadreComponentComponent } from './padre-component/padre-component.component';
import { HijoComponent } from './padre-component/hijo/hijo.component';

export const routes: Routes = [
    {path: '', component: ListaUsuariosComponent},
    {path: 'mostrar-mensaje', component: MostrarMsgComponent},
    {
        path: 'configuracion', children: [
            {path: 'padre', component: PadreComponentComponent},
            {path: 'hijo', component: HijoComponent}
        ]
    }

];
