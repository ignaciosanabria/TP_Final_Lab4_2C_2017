import { Component, OnInit } from '@angular/core';
import {ClientesService} from '../../servicios/clientes/clientes.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {GalleriaModule} from 'primeng/galleria';

@Component({
  selector: 'app-editar-datos-cliente',
  templateUrl: './editar-datos-cliente.component.html',
  styleUrls: ['./editar-datos-cliente.component.css']
})
export class EditarDatosClienteComponent implements OnInit {
  miServicioCliente : ClientesService;
  idCliente: number;
  private sub: any;
  cliente : any;
  constructor(servicioClientes : ClientesService,private route: ActivatedRoute, private router : Router) { 
    this.miServicioCliente = servicioClientes;
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


  ModificarCliente()
  {
    console.log(this.cliente);
    //Falta modificacion Api
  }

  CancelarModificacion()
  {
    this.router.navigate(['/PrincipalCliente/MisDatosCliente',this.idCliente]);
  }

}
