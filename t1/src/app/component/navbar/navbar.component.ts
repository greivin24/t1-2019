import { Component, OnInit } from '@angular/core';
import { AuthGuard } from '../../guards/auth-guard.service';
import { DataStorageService } from '../../data-storage.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isOn:boolean;
  constructor(private authGuard:AuthGuard, private dataStorageService:DataStorageService, private router:Router ) {
    
  }

  ngOnInit() {

  }

  logOut(){
    this.dataStorageService.deleteObjectValue("activo");
    this.router.navigate(['/login']);
  }

}
