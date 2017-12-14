import { Component, OnInit } from '@angular/core';
import {ClientesService } from '../../servicios/clientes/clientes.service';

@Component({
  selector: 'app-ver-clientes',
  templateUrl: './ver-clientes.component.html',
  styleUrls: ['./ver-clientes.component.css']
})
export class VerClientesComponent implements OnInit {
  
  miServicioClientes : ClientesService;
  clientes : Array<any>;
  constructor(ServicioClientes : ClientesService) {
    this.miServicioClientes = ServicioClientes;
    this.miServicioClientes.TraerClientes().then(
      data =>{
      console.log(data);
      this.clientes = data;
      }
    ).catch(
        error => 
        {
           console.log(error);
        }
    )
   }

  ngOnInit() {
  }

}
