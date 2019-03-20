import { Component, OnInit } from '@angular/core';
import { Noticia } from '../../class/Noticia';
import { DataStorageService } from './../../data-storage.service';

@Component({
  selector: 'app-noticias-list',
  templateUrl: './noticias-list.component.html',
  styleUrls: ['./noticias-list.component.css']
})
export class NoticiasListComponent implements OnInit {

  public noticias_list:Noticia[] = [];

  constructor(private dataStorageService:DataStorageService) { }

  ngOnInit() {
    for (let i = 1; i < 4; i++) {
      this.noticias_list.push(this.dataStorageService.getObjectValue(i.toString())); 
    }
  }

}
