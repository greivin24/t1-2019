import { Component } from '@angular/core';
import { DataStorageService } from './data-storage.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 't1';

  constructor(private dataStorageService:DataStorageService){

    this.dataStorageService.setObjectValue("nombre", "Greivin RoAt");

    console.log(this.dataStorageService.getObjectValue("nombre"));
  }


}
