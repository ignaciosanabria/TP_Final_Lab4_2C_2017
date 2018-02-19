import { Component, OnInit } from '@angular/core';
import {Message} from 'primeng/components/common/api';
import {FileUploadModule} from 'primeng/fileupload';
import {GalleriaModule} from 'primeng/galleria';
@Component({
  selector: 'app-subir-fotos-cliente',
  templateUrl: './subir-fotos-cliente.component.html',
  styleUrls: ['./subir-fotos-cliente.component.css']
})
export class SubirFotosClienteComponent implements OnInit {
  images: any[];
  msgs: Message[];
  
  uploadedFiles: any[] = [];
  ocultarGaleria : boolean;
  ocultarSpinner : boolean;

  constructor() {
    this.ocultarGaleria = true;
    this.ocultarSpinner = true;
   }
    
    ngOnInit() {

      this.images = [];
      this.images.push({source:'assets/imagenes/empleados/empleado1.jpg', alt:'Description for Image 1', title:'Title 1'});
      this.images.push({source:'assets/imagenes/empleados/empleado2.jpg', alt:'Description for Image 2', title:'Title 2'});
      this.images.push({source:'assets/imagenes/empleados/empleado3.jpg', alt:'Description for Image 3', title:'Title 3'});
      this.images.push({source:'assets/imagenes/empleados/empleado4.jpg', alt:'Description for Image 4', title:'Title 4'});
      this.images.push({source:'assets/imagenes/empleados/pordefecto.png', alt:'Description for Image 5', title:'Title 5'});
      // this.images.push({source:'assets/imagenes/empleados/empleado6.jpg', alt:'Description for Image 6', title:'Title 6'});
      // this.images.push({source:'assets/imagenes/empleados/empleado7.jpg', alt:'Description for Image 7', title:'Title 7'});
      // this.images.push({source:'assets/imagenes/empleados/empleado8.jpg', alt:'Description for Image 8', title:'Title 8'});
      // this.images.push({source:'assets/imagenes/empleados/empleado9.jpg', alt:'Description for Image 9', title:'Title 9'});
      // this.images.push({source:'assets/imagenes/empleados/empleado10.jpg', alt:'Description for Image 10', title:'Title 10'});
      // this.images.push({source:'assets/imagenes/empleados/empleado11.jpg', alt:'Description for Image 11', title:'Title 11'});
      // this.images.push({source:'assets/imagenes/empleados/empleado12.jpg', alt:'Description for Image 12', title:'Title 12'});
  }

  onUpload(event) {
      for(let file of event.files) {
          this.uploadedFiles.push(file);
      }
      console.log(this.uploadedFiles);
      console.log(event);
      this.ocultarSpinner = false;
      this.ocultarGaleria = true;
      var modelo=this;
      setTimeout(function(){
        modelo.cargarImagenes();
        modelo.msgs = [];
        modelo.msgs.push({severity: 'info', summary: 'Imagenes subidas!', detail: 'Se ha completado la subida'});
        modelo.ocultarSpinner=true;
        modelo.ocultarGaleria=false;
       }, 5000);
  }

  cargarImagenes()
  {
    console.log("Se cargarian las imagenes, traigo desde la API las imagenes del cliente!");
  }

  onImageClicked(event)
  {
    console.log(event);
  }

}
