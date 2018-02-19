import { Component, OnInit, Input} from '@angular/core';
import {EventosService} from '../../servicios/eventos/eventos.service';
import {EmpleadosService} from '../../servicios/empleados/empleados.service';
import {AutService} from '../../servicios/aut.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {CalendarModule} from 'primeng/calendar';

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

  today = new Date();

  constructor(ServicioEventos : EventosService, ServicioAut : AutService, ServicioEmpleados : EmpleadosService, private route: ActivatedRoute,
    private router: Router) {
    this.miServicioEventos = ServicioEventos;
    this.miAutServicio = ServicioAut;
    console.log(this.today.getDate()+"/"+(this.today.getMonth()+1)+"/"+this.today.getFullYear());
    console.log(this.miAutServicio.getToken());
    // let token = this.miAutServicio.getToken();
    let tokenString = localStorage.getItem("token");
    let token = this.miAutServicio.getTokenParam(tokenString);
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

  verMesas(evento : any){
    console.log(evento);
    this.router.navigate(['/PrincipalCliente/VerMesas',evento.id_evento]);
  }

}
