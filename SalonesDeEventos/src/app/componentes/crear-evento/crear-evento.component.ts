import { Component, OnInit } from '@angular/core';
import {IMyDpOptions,IMyDateModel} from 'mydatepicker';
import {SalonesService} from '../../servicios/salones/salones.service';
import {EventosService} from '../../servicios/eventos/eventos.service';
import {AutService} from '../../servicios/aut.service';
import {CaptchaModule} from 'primeng/captcha';
import {Message} from 'primeng/components/common/api';


import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {Validators, FormBuilder, FormControl, FormGroup, EmailValidator} from '@angular/forms';
@Component({
  selector: 'app-crear-evento',
  templateUrl: './crear-evento.component.html',
  styleUrls: ['./crear-evento.component.css']
})
export class CrearEventoComponent implements OnInit {
  ocultarSalones : boolean;
  salonesDisponibles : Array<any>;
  nombreCliente : string = "";
  msgs: Message[] = [];
  public myDatePickerOptions: IMyDpOptions = {
    // other options...
    dateFormat: 'dd/mm/yyyy',
};

 miServicioSalones : SalonesService;

// Initialized to specific date (09.10.2018).
public model: any; //= { date: { year: 2017, month: 11, day: 29 } };
miAutServicio : AutService;
miEventosServicio : EventosService;

//Para los botones de elegir 
public registroForm : FormGroup;
public registroCaptcha : FormControl = new FormControl("",[Validators.required]);

  fecha : any;
  fechaMañana : any;
  fechaPosterior : Date;
  fecha_fin : any;
  constructor(private builder : FormBuilder,ServicioSalones : SalonesService, ServicioEventos : EventosService, ServicioAut : AutService, private route: ActivatedRoute,
    private router: Router) {
    this.miServicioSalones = ServicioSalones;
    this.miEventosServicio = ServicioEventos;
    this.miAutServicio = ServicioAut;
    this.ocultarSalones = true;
    let token = this.miAutServicio.getToken();
    console.log(token);
    this.CreateForm();
  }

  showResponse(event) {
    this.msgs = [];
    this.msgs.push({severity:'info', summary:'Succees', detail: 'User Responded'});
}

  public CreateForm() : void
  {
    this.registroForm = this.builder.group({
      'registroCaptcha' : this.registroCaptcha
    });
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
        console.log(event);
        this.fecha = event.formatted;
        this.fechaPosterior = new Date(event.jsdate);
        let number = this.fechaPosterior.getTime() + 24 * 60 * 60 * 1000;
        this.fechaMañana = new Date(number);
        console.log(this.fechaPosterior.getTime());
        console.log(this.fechaPosterior.getTime() + 24 * 60 * 60 * 1000);
        console.log(this.fechaMañana.getDate()+"/"+(this.fechaMañana.getMonth()+1)+this.fechaMañana.getYear());
        this.fecha_fin = this.fechaMañana.getDate()+"/"+(this.fechaMañana.getMonth()+1)+"/"+this.fechaMañana.getFullYear();
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
    let json = {"id_cliente" : token["data"].id_cliente, "fecha_inicio": this.fecha, "id_salon":salon.id_salon, "fecha_fin": this.fecha_fin};
    console.log(JSON.stringify(json));
    //Revisar logica de crear Evento - No llegue a la primera entrega!!
    console.log(salon);
    console.log(salon.id_salon);
    this.miEventosServicio.InsertarEvento(JSON.stringify(json)).subscribe(
      data=>
      {
        let respuesta = JSON.parse(data["_body"]);
        console.log(respuesta);
        if(respuesta.status == 200)
          {
            alert("Usted ha ingresado un evento correctamente!");
            this.router.navigate(['/PrincipalCliente/EventosCliente']);
          }
         else
          {
            alert("Ocurrio algo inesperado!");
          }
      },
      error =>
      {
        console.log(error);
      }
    );
  }

  resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response ${captchaResponse}:`);
}

}
