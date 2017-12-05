import { Component, OnInit, Input} from '@angular/core';
import {EventosService} from '../../servicios/eventos/eventos.service';
import {EmpleadosService} from '../../servicios/empleados/empleados.service';
import {AutService} from '../../servicios/aut.service';
@Component({
  selector: 'app-eventos-clientes',
  templateUrl: './eventos-clientes.component.html',
  styleUrls: ['./eventos-clientes.component.css']
})
export class EventosClientesComponent implements OnInit {
  // @Input()
  // evento : any;

  // mesaSeleccionada : any;
  // mesas : any;
  eventos : Array<any>;
  miServicioEventos : EventosService;
  miServicioEmpleados : EmpleadosService;
  miAutServicio : AutService;
  constructor(ServicioEventos : EventosService, ServicioAut : AutService, ServicioEmpleados : EmpleadosService) {
    this.miServicioEventos = ServicioEventos;
    this.miAutServicio = ServicioAut;
    console.log(this.miAutServicio.getToken());
    let token = this.miAutServicio.getToken();
    console.log(token["data"].id_cliente);
    let json = {"idCliente" : token["data"].id_cliente};
    console.log(JSON.stringify(json));
    this.miServicioEventos.TraerEventosCliente(JSON.stringify(json)).subscribe(
      data => {
        console.log(data);
        let respuesta = JSON.parse(data["_body"]);
        this.eventos = respuesta;
      },
      error =>{
        console.log(error);
      }
    )
   }

  ngOnInit() {
  }

}
