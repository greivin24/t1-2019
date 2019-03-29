import { Routes, RouterModule } from '@angular/router';
import { NoticiasListComponent } from '../app/component/noticias-list/noticias-list.component';
import { LoginComponentComponent } from '../app/component/login-component/login-component.component';
import { AcercaDeComponentComponent } from '../app/component/acerca-de-component/acerca-de-component.component';
import { PrivateComponentComponent } from '../app/component/private-component/private-component.component';
import { NoticiasUpsertComponentComponent } from '../app/component/noticias-upsert-component/noticias-upsert-component.component';
import { NgIf } from '@angular/common';

import { AuthGuard } from './guards/auth-guard.service';



const APP_ROUTES: Routes = [
    { path: 'login', component: LoginComponentComponent },
    { path: 'acerca-de', component: AcercaDeComponentComponent },
    {
        path: 'private', component: PrivateComponentComponent,canActivate: [AuthGuard], children: [
            { path: 'noticias-list', component: NoticiasListComponent },
            { path: 'noticias-edit/:id', component: NoticiasUpsertComponentComponent},
            { path: 'noticias-insert', component: NoticiasUpsertComponentComponent },
        ]
    },
    { path: '**',redirectTo: "private/noticias-list"}
];


export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);