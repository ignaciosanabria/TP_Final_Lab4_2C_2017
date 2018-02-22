import { Component, OnInit } from '@angular/core';
import {Message} from 'primeng/components/common/api';
import {FileUploadModule} from 'primeng/fileupload';
import {GalleriaModule} from 'primeng/galleria';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {ClientesService} from '../../servicios/clientes/clientes.service';
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
   

  idCliente: number;
  private sub: any;
  miServicioClientes : ClientesService;
  misImagenes : Array<any>;
  cliente : any;
  constructor(private route: ActivatedRoute, servicioClientes : ClientesService, private router : Router) {
    this.ocultarGaleria = true;
    this.ocultarSpinner = true;
    this.miServicioClientes = servicioClientes;
   }
    
    ngOnInit() {
      this.sub = this.route.params.subscribe(params => {
        this.idCliente = +params['idCliente']; // (+) converts string 'id' to a number
  
        // In a real app: dispatch action to load the details here.
     });
     console.log(this.idCliente);
      this.cargarImagenes();
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
        modelo.cargarImagenes();
       }, 5000);
  }

  cargarImagenes()
  {
    console.log("Se cargarian las imagenes, traigo desde la API las imagenes del cliente!");
    this.miServicioClientes.TraerFotosCliente(this.idCliente).then(
      data =>{
        console.log(data);
        this.misImagenes = data.imagenes;
        if(this.misImagenes.length > 0)
        {
          this.images = [];
          for(let i=1;i<this.misImagenes.length;i++)
          {
            this.images.push({source:'assets/imagenes/clientes/'+this.misImagenes[i-1].path_foto, alt:'Imagen del Usuario', title:'Imagen '+i});
          }
          this.ocultarGaleria = false;
        }
      }
    ).catch(
      error =>{
        console.log(error);
      }
    );
  }

  onImageClicked(event)
  {
    console.log(event);
  }

  TerminarSubida()
  {
    this.miServicioClientes.TraerClientePorId(this.idCliente).then(
      data =>
      {
        this.cliente = data.cliente;
        let json = {"mail":this.cliente.mail,"clave":this.cliente.clave};
        this.miServicioClientes.ValidarCliente(JSON.stringify(json)).subscribe(
          data => 
          {
            console.log(data);
            let respuesta = JSON.parse(data["_body"]);
            if(respuesta.status == 200)
              {
            if(respuesta.token)
              {
                localStorage.setItem("token",respuesta.token);
                this.router.navigate(["/PrincipalCliente"]);
              }
            }
          },
          error => 
          {
            console.log(error);
          }
         );
      }
    ).catch(
      error =>
      {
        console.log(error);
      }
    );
  }

}
