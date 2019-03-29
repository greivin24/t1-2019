import { Component, OnInit, Output, Input, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-reloj',
  templateUrl: './reloj.component.html',
  styleUrls: ['./reloj.component.css']
})


export class RelojComponent implements OnInit {
  @Output() dateEmitted = new EventEmitter<Date>();
  @Input() huso: number;

  fecha= new Date();
  constructor() { 
   }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.fecha.setHours(this.fecha.getHours() + this.huso); 
  }

  emitDate(){ 
    this.dateEmitted.emit(this.fecha);
    } 
    

}
