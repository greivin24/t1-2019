import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-horarios-list',
  templateUrl: './horarios-list.component.html',
  styleUrls: ['./horarios-list.component.css']
})
export class HorariosListComponent implements OnInit {
  
  reloj_list:any = new Array();
  fecha = new Date;
  constructor() { }

  ngOnInit() {
  }

  showDate(val:any){
    alert(val);
  }

  btnPlus(val:any){
    this.reloj_list.push(val);
  }

  btnPop(){
    this.reloj_list.pop();
  }

}
