import { Component } from '@angular/core';
import { DataStorageService } from './data-storage.service';
import { Noticia } from './class/Noticia';
import { User } from './class/interface';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 't1';

  public noticia1:Noticia;
  public noticia2:Noticia;
  public noticia3:Noticia;

  public user:User;

  constructor(private dataStorageService:DataStorageService){

      this.noticia1 = new Noticia();
       this.noticia1.Id = 1;
       this.noticia1.Titulo ="Puntura";
       this.noticia1.Imagen = "noticia1.jpg";
       this.noticia1.Descripcion = "Mucha pintura";
       this.noticia1.fechaCreacion = Date.now();
       this.noticia1.ultimaModificacion = Date.now();

       this.dataStorageService.setObjectValue("1", this.noticia1);

       this.noticia2 = new Noticia();
       this.noticia2.Id = 2;
       this.noticia2.Titulo ="autronauta";
       this.noticia2.Imagen = "noticia2.jpg";
       this.noticia2.Descripcion = "Al suave";
       this.noticia2.fechaCreacion = Date.now();
       this.noticia2.ultimaModificacion = Date.now();

       this.dataStorageService.setObjectValue("2", this.noticia2);

       this.noticia3 = new Noticia();
       this.noticia3.Id = 3;
       this.noticia3.Titulo ="Smile face";
       this.noticia3.Imagen = "noticia3.jpg";
       this.noticia3.Descripcion = "movie";
       this.noticia3.fechaCreacion = Date.now();
       this.noticia3.ultimaModificacion = Date.now();

       this.dataStorageService.setObjectValue("3", this.noticia3);

        


  }


}
