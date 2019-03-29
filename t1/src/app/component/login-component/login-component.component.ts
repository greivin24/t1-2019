import { Component, OnInit } from '@angular/core';
import { Login } from '../../class/interface';
import { NgForm } from '@angular/forms';
import { DataStorageService } from '../../data-storage.service';
import { Router } from '@angular/router';




@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {

  user:Login= {
    "id":"",
    "pass":""
  }
  
  constructor( private dataStorageService:DataStorageService, private router:Router) { }

  ngOnInit() {
  }

  btnLogin(){
    this.dataStorageService.setObjectValue("activo",this.user);
    this.router.navigate(['/private/noticias-list']);
  }
}
