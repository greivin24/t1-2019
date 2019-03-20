import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Noticia } from '../../class/Noticia';
import { DataStorageService } from '../../data-storage.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-noticias-upsert-component',
  templateUrl: './noticias-upsert-component.component.html',
  styleUrls: ['./noticias-upsert-component.component.css']
})
export class NoticiasUpsertComponentComponent implements OnInit {

  formGroup: FormGroup;

  public noticia:Noticia;
  noticiaId:any;
  constructor(private activatedRouter: ActivatedRoute, private dataStorageService:DataStorageService, public formBuilder:FormBuilder) { 
    this.iniciarNoticia();
    try {
      this.loadNoticia( this.activatedRouter.snapshot.params['id']);
    } catch (error) {
      this.noticia = null;
    }
    
  }

  ngOnInit() {
  }

  iniciarNoticia = () => {
    this.formGroup = this.formBuilder.group({
      id: ['(nueva)', [Validators.required],],
      titulo: ['', [Validators.required]],
      imagen: ['', [Validators.required]],
      descripcion: ['', [Validators.required, Validators.minLength(15)]],
      fechaCreacion: [new Date()],
      ultimaModificacion: [new Date()],
    });
  }

  cargarNoticia = (id: number) => {
    const listaNoticias = this.dataStorageService.getObjectValue(id.toString());
    listaNoticias.forEach(noticia => {
      if (noticia.id == id) {
        this.formGroup = this.formBuilder.group({
          id: [id, [Validators.required],],
          titulo: [noticia.titulo, [Validators.required]],
          imagen: [noticia.imagen, [Validators.required]],
          descripcion: [noticia.descripcion, [Validators.required, Validators.minLength(15)]],
          fechaCreacion: [noticia.fechaCreacion],
          ultimaModificacion: [noticia.ultimaModificacion],
        });
      }
    });
  }

  loadNoticia(id:number){
    this.noticia = this.dataStorageService.getObjectValue(id.toString());
    if (this.noticia.Id == id) {
      this.formGroup = this.formBuilder.group({
        id: [id, [Validators.required],],
        titulo: [this.noticia.Titulo, [Validators.required]],
        imagen: [this.noticia.Imagen, [Validators.required]],
        descripcion: [this.noticia.Descripcion, [Validators.required, Validators.minLength(15)]],
        fechaCreacion: [this.noticia.fechaCreacion],
        ultimaModificacion: [this.noticia.ultimaModificacion],
      });
    }
  }


  guardarData = () => {
    if (this.formGroup.valid) {
      let noticiaIndex = -1;
      const listaNoticias = this.dataStorageService.getObjectValue("noticias");
      listaNoticias.forEach((noticia, index) => {
        if (noticia.id == this.formGroup.value.id) {
          noticiaIndex = index;
        }
      });

      if (noticiaIndex >= 0) {
        listaNoticias[noticiaIndex] = this.formGroup.value;
      } else {
        listaNoticias.push(this.formGroup.value);
      }
      this.formGroup.patchValue({ "ultimaModificacion": new Date() });

      this.dataStorageService.setObjectValue("noticias", listaNoticias);

      alert("Información guardada");
    } else {
      alert("Debe completar la información correctamente");
    }
  }

  guardarData2(){
    this.formGroup = this.formBuilder.group({
      id: [4, [Validators.required],],
      titulo: [this.noticia.Titulo, [Validators.required]],
      imagen: [this.noticia.Imagen, [Validators.required]],
      descripcion: [this.noticia.Descripcion, [Validators.required, Validators.minLength(15)]],
      fechaCreacion: [this.noticia.fechaCreacion],
      ultimaModificacion: [this.noticia.ultimaModificacion],
    });
    console.log(this.noticia);
  }




}
