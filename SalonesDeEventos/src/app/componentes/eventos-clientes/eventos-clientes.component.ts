import { Component, OnInit, Input} from '@angular/core';
import {EventosService} from '../../servicios/eventos/eventos.service';
import {EmpleadosService} from '../../servicios/empleados/empleados.service';
import {AutService} from '../../servicios/aut.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {CalendarModule} from 'primeng/calendar';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';
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
  ocultarEventos : boolean;
  today = new Date();

  idEventoCancelar : number;//Id para el metodo de Cancelar Evento
  idEventoBorrar : number;//Id para el metodo de Borrar Evento

  idCliente : number;

  constructor(ServicioEventos : EventosService, ServicioAut : AutService, ServicioEmpleados : EmpleadosService, private route: ActivatedRoute,
    private router: Router,private confirmationService: ConfirmationService) {
    this.miServicioEventos = ServicioEventos;
    this.miAutServicio = ServicioAut;
    this.ocultarEventos = false;
    console.log(this.today.getDate()+"/"+(this.today.getMonth()+1)+"/"+this.today.getFullYear());
    console.log(this.miAutServicio.getToken());
    // let token = this.miAutServicio.getToken();
    let tokenString = localStorage.getItem("token");
    let token = this.miAutServicio.getTokenParam(tokenString);
    console.log(token["data"].id_cliente);
    this.idCliente = token["data"].id_cliente;
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
    );
   }

  ngOnInit() {
  }

  verMesas(evento : any){
    console.log(evento);
    this.router.navigate(['/PrincipalCliente/VerMesas',evento.id_evento]);
  }

  BorrarEvento(id_evento : any)
  {
    this.confirmationService.confirm({
      message: 'Desea borrar este evento?',
      header: 'Borrar',
      icon: 'fa fa-question-circle',
      accept: () => {
        this.ocultarEventos = true;
         let json = {};
          this.miServicioEventos.BorrarEvento(id_evento,json).subscribe(
            data =>{
              let respuesta = JSON.parse(data["_body"]);
              if(respuesta.status == 200)
              {
                var modelo = this;
                setTimeout(function(){
                  let json = {"idCliente" : modelo.idCliente};
                  console.log(JSON.stringify(json));
                  modelo.miServicioEventos.TraerEventosCliente(JSON.stringify(json)).subscribe(
                    data => {
                      console.log(data);
                      let respuesta = JSON.parse(data["_body"]);
                       modelo.eventos = respuesta;
                    },
                    error =>{
                      console.log(error);
                    }
                  );
                  modelo.ocultarEventos = false;
                 }, 5000);
              }
            },
            error =>{
              console.log(error);
            });
      },
      reject: () => {
      }
  });
  }

  CancelarEvento(id_evento : any)
  {
    // this.idEventoCancelar = id_evento;
    this.confirmationService.confirm({
      message: 'Desea cancelar este evento?',
      header: 'Cancelar',
      icon: 'fa fa-question-circle',
      accept: () => {
          //console.log(id_evento);
          this.ocultarEventos = true;
          let json = {"id_evento": id_evento};
          this.miServicioEventos.CancelarEvento(JSON.stringify(json)).subscribe(
            data =>{
              console.log(data);
              let respuesta = JSON.parse(data["_body"]);
              if(respuesta.status == 200)
                {
                  var modelo = this;
                  setTimeout(function(){
                    let json = {"idCliente" : modelo.idCliente};
                    console.log(JSON.stringify(json));
                    modelo.miServicioEventos.TraerEventosCliente(JSON.stringify(json)).subscribe(
                      data => {
                        console.log(data);
                        let respuesta = JSON.parse(data["_body"]);
                         modelo.eventos = respuesta;
                      },
                      error =>{
                        console.log(error);
                      }
                    );
                    modelo.ocultarEventos = false;
                   }, 5000);
                }
                else
                {
                  alert("Ocurrio algo inesperado!");
                }
            },
            error =>{
              console.log(error);
            }
          );
      }
      // ,
      // reject: () => {
      // }
  });
  }



}
