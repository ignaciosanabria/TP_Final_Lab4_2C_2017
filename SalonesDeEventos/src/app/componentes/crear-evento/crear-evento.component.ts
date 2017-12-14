import { Component, OnInit } from '@angular/core';
import {IMyDpOptions,IMyDateModel} from 'mydatepicker';
import {SalonesService} from '../../servicios/salones/salones.service';
import {EventosService} from '../../servicios/eventos/eventos.service';
import {AutService} from '../../servicios/aut.service';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-crear-evento',
  templateUrl: './crear-evento.component.html',
  styleUrls: ['./crear-evento.component.css']
})
export class CrearEventoComponent implements OnInit {
  ocultarSalones : boolean;
  salonesDisponibles : Array<any>;
  nombreCliente : string = "";
  public myDatePickerOptions: IMyDpOptions = {
    // other options...
    dateFormat: 'dd/mm/yyyy',
};

 miServicioSalones : SalonesService;

// Initialized to specific date (09.10.2018).
public model: any; //= { date: { year: 2017, month: 11, day: 29 } };
miAutServicio : AutService;
miEventosServicio : EventosService;

  fecha : any;
  constructor(ServicioSalones : SalonesService, ServicioEventos : EventosService, ServicioAut : AutService, private route: ActivatedRoute,
    private router: Router) {
    this.miServicioSalones = ServicioSalones;
    this.miEventosServicio = ServicioEventos;
    this.miAutServicio = ServicioAut;
    this.ocultarSalones = true;
    let token = this.miAutServicio.getToken();
    console.log(token);
  }
  

  ngOnInit()
  {
    
  }

  onDateChanged(event: IMyDateModel) {
    // event properties are: event.date, event.jsdate, event.formatted and event.epoc
    this.ocultarSalones = true;
    let json =  {"fecha":event.formatted};
    if(event.formatted == "")
      {
        console.log("esta vacio");
      }
    else
      {
        //Implementacion del Servicio
        this.fecha = event.formatted;
        this.miServicioSalones.TraerSalonesDisponibles(JSON.stringify(json)).subscribe(
          data => {
            this.fecha = event.formatted;
            this.ocultarSalones = false;
            console.log(data);
            let respuesta = JSON.parse(data["_body"]);
            this.salonesDisponibles = respuesta;
          },
          error =>{
            console.log(error);
          }
        );
      }
}

  public ver()
  {
    console.log(this.model);
  }

  public Elegir(salon : any)
  {
    let token = this.miAutServicio.getToken();
    let json = {"id_cliente" : token["data"].id_cliente, "fecha": this.fecha, "id_salon":salon.id_salon};
    console.log(JSON.stringify(json));
    //Revisar logica de crear Evento - No llegue a la primera entrega!!
    console.log(salon);
    console.log(salon.id_salon);
    this.miEventosServicio.InsertarEvento(JSON.stringify(json)).subscribe(
      data=>
      {
        let respuesta = JSON.parse(data["_body"]);
        console.log(respuesta);
        // if(respuesta.status == 200)
        //   {
        //     alert("Usted ha ingresado un evento correctamente!");
        //     this.router.navigate(['/PrincipalCliente/EventosCliente']);
        //   }
      }
    )
  }

  resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response ${captchaResponse}:`);
}

}
