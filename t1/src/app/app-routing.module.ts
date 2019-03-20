import { Routes, RouterModule } from '@angular/router';
import { NoticiasListComponent } from '../app/component/noticias-list/noticias-list.component';
import { LoginComponentComponent } from '../app/component/login-component/login-component.component';
import { AcercaDeComponentComponent } from '../app/component/acerca-de-component/acerca-de-component.component';
import { PrivateComponentComponent } from '../app/component/private-component/private-component.component';
import { NoticiasUpsertComponentComponent } from '../app/component/noticias-upsert-component/noticias-upsert-component.component';


const APP_ROUTES: Routes = [
      { path: 'login', component: LoginComponentComponent },
      { path: 'acerca-de', component: AcercaDeComponentComponent },
      { path: 'private', component: PrivateComponentComponent},
      { path: 'noticias/list', component: NoticiasListComponent },
      { path: 'noticias-edit/:id', component: NoticiasUpsertComponentComponent },
      { path: 'noticias-insert', component: NoticiasUpsertComponentComponent },
      { path: '**', component: NoticiasListComponent }
];


export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);