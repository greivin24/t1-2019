import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { APP_ROUTING } from './app-routing.module';

import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { DataStorageService } from './data-storage.service';
import { NoticiasListComponent } from './component/noticias-list/noticias-list.component';

import { CarouselModule } from 'ngx-bootstrap/carousel';
import { LoginComponentComponent } from './component/login-component/login-component.component';
import { AcercaDeComponentComponent } from './component/acerca-de-component/acerca-de-component.component';
import { PrivateComponentComponent } from './component/private-component/private-component.component';
import { NoticiasUpsertComponentComponent } from './component/noticias-upsert-component/noticias-upsert-component.component';
import { NavbarComponent } from './component/navbar/navbar.component';



@NgModule({
  declarations: [
    AppComponent,
    NoticiasListComponent,
    LoginComponentComponent,
    AcercaDeComponentComponent,
    PrivateComponentComponent,
    NoticiasUpsertComponentComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }), 
    CarouselModule, 
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    DataStorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
