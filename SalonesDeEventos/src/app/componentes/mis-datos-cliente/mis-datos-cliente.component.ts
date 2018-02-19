import { Component, OnInit } from '@angular/core';
import {ClientesService} from '../../servicios/clientes/clientes.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {GalleriaModule} from 'primeng/galleria';
import {DialogModule} from 'primeng/dialog';

@Component({
  selector: 'app-mis-datos-cliente',
  templateUrl: './mis-datos-cliente.component.html',
  styleUrls: ['./mis-datos-cliente.component.css']
})
export class MisDatosClienteComponent implements OnInit {
  
  miServicioCliente : ClientesService;
  idCliente: number;
  private sub: any;
  cliente : any;
  images: any[];

  display: boolean = false; //Prime Ng - Dialog

  constructor(servicioClientes : ClientesService,private route: ActivatedRoute, private router : Router) { 
    this.miServicioCliente = servicioClientes;
    this.images = [];
    this.images.push({source:'assets/imagenes/empleados/empleado1.jpg', alt:'Description for Image 1', title:'Title 1'});
    this.images.push({source:'assets/imagenes/empleados/empleado2.jpg', alt:'Description for Image 2', title:'Title 2'});
    this.images.push({source:'assets/imagenes/empleados/empleado3.jpg', alt:'Description for Image 3', title:'Title 3'});
    this.images.push({source:'assets/imagenes/empleados/empleado4.jpg', alt:'Description for Image 4', title:'Title 4'});
    this.images.push({source:'assets/imagenes/empleados/pordefecto.png', alt:'Description for Image 5', title:'Title 5'});
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.idCliente = +params['idCliente']; // (+) converts string 'id' to a number

      // In a real app: dispatch action to load the details here.
   });
   console.log(this.idCliente);
   this.miServicioCliente.TraerClientePorId(this.idCliente).then(
     data =>
     {
       console.log(data);
       console.log(data.cliente);
       this.cliente = data.cliente;
      //  this.images = [];
      //  this.images.push({source:'assets/imagenes/empleados/empleado1.jpg', alt:'Description for Image 1', title:'Title 1'});
      //  this.images.push({source:'assets/imagenes/empleados/empleado2.jpg', alt:'Description for Image 2', title:'Title 2'});
      //  this.images.push({source:'assets/imagenes/empleados/empleado3.jpg', alt:'Description for Image 3', title:'Title 3'});
      //  this.images.push({source:'assets/imagenes/empleados/empleado4.jpg', alt:'Description for Image 4', title:'Title 4'});
      //  this.images.push({source:'assets/imagenes/empleados/pordefecto.png', alt:'Description for Image 5', title:'Title 5'});
     }
   ).catch(
     error =>
     {
       console.info(error);
     }
   );
  }

  editarCliente(idCliente: number)
  {
    this.router.navigate(['/PrincipalCliente/EditarDatosCliente',idCliente]);
    // console.log(idCliente);
  }

  borrarCliente()  //Despliega el Dialog para confirmar la eliminación
  {
    this.display = true; 
  }

  ConfirmarEliminacion(idCliente: number)
  {
    //Api -- Borrar Cliente - Darse de Baja
    console.log("Borro mi cliente"+idCliente);
  }

}
