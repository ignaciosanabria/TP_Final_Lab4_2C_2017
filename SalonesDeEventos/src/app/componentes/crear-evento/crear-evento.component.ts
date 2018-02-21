import { Component, OnInit } from '@angular/core';
import {IMyDpOptions,IMyDateModel} from 'mydatepicker';
import {SalonesService} from '../../servicios/salones/salones.service';
import {EventosService} from '../../servicios/eventos/eventos.service';
import {AutService} from '../../servicios/aut.service';
import {CaptchaModule} from 'primeng/captcha';
import {Message} from 'primeng/components/common/api';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {Validators, FormBuilder, FormControl, FormGroup, EmailValidator} from '@angular/forms';
import {DialogModule} from 'primeng/dialog';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';
@Component({
  selector: 'app-crear-evento',
  templateUrl: './crear-evento.component.html',
  styleUrls: ['./crear-evento.component.css']
})
export class CrearEventoComponent implements OnInit {
  ocultarSalones : boolean;
  ocultarSpinner : boolean;
  display : boolean; //Dialog - Prime Ng
  salonesDisponibles : Array<any>;
  nombreCliente : string = "";
  msgs: Message[] = [];
  salonElegido : any;
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
  fechaActual : Date;
  fecha_fin : any;

  //Fecha - Angular Prime Ng
  date1: Date;
  es: any;
  invalidDates: Array<Date>;
  ocultarProceso : boolean;
  constructor(private builder : FormBuilder,ServicioSalones : SalonesService, ServicioEventos : EventosService, ServicioAut : AutService, private route: ActivatedRoute,
    private router: Router, private confirmationService: ConfirmationService) {
    this.miServicioSalones = ServicioSalones;
    this.miEventosServicio = ServicioEventos;
    this.miAutServicio = ServicioAut;
    this.ocultarSalones = true;
    this.ocultarSpinner = true;
    this.ocultarProceso = true;
    let token = this.miAutServicio.getToken();
    console.log(token);
    this.CreateForm();
  }

  showResponse(event) {
    this.msgs = [];
}

  public CreateForm() : void
  {
    this.registroForm = this.builder.group({
      'registroCaptcha' : this.registroCaptcha
    });
  }
  

  ngOnInit()
  {
    //Español para el Calendar de Prime Ng
    this.es = {
      firstDayOfWeek: 1,
      dayNames: [ "domingo","lunes","martes","miércoles","jueves","viernes","sábado" ],
      dayNamesShort: [ "dom","lun","mar","mié","jue","vie","sáb" ],
      dayNamesMin: [ "D","L","M","X","J","V","S" ],
      monthNames: [ "enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre" ],
      monthNamesShort: [ "ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic" ],
      today: 'Hoy',
      clear: 'Borrar'
  }
  let today = new Date();
  let invalidDate = new Date();
  invalidDate.setDate(today.getDate() - 1);
  this.invalidDates = [today,invalidDate];
  }
  
  //Calendario Ng Prime
  onSelect(event)
  { let mesString = "";
    let dte = new Date(event);
    let mes = (dte.getMonth()+1);
    if(mes < 10)
    {
      mesString = (String("00" + mes).slice(-2)); //Para que el mes sea en formato MM/DD/YYYY
    }
    else
    {
      mesString = mes.toString();
    }
    let formato = dte.getDate()+"/"+mesString+"/"+dte.getFullYear()+" "+"21:00";
    // console.log(formato);
    let json = {"fecha":formato}
    this.fecha = formato;

    this.ocultarSpinner = false;
    var modelo = this;
    setTimeout(function(){
      modelo.ocultarSpinner = true;
      modelo.miServicioSalones.TraerSalonesDisponibles(JSON.stringify(json)).subscribe(
        data => {
          modelo.ocultarSalones = false;
          console.log(data);
          let respuesta = JSON.parse(data["_body"]);
          modelo.salonesDisponibles = respuesta;
        },
        error =>{
          console.log(error);
        });
     }, 5000);
  }
  
  //Del otro calendario
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

Seleccion(salon : any)
{
  this.display = true;
  this.salonElegido = salon;
}

ConfirmarEleccion()
{

  console.log("aqui iria el creador de eventos - api");
  console.log(this.salonElegido);
  console.log(this.fecha);
  //console.log(this.fecha_fin);
  let tokenString = localStorage.getItem("token");
  let token = this.miAutServicio.getTokenParam(tokenString);
  let id_cliente = token["data"].id_cliente;
  let json = {"id_cliente" : id_cliente, "fecha_inicio": this.fecha, "id_salon":this.salonElegido.id_salon};
  console.log(json);
  this.ocultarProceso = false;

  var modelo = this;
  setTimeout(function(){
    modelo.miEventosServicio.InsertarEvento(JSON.stringify(json)).subscribe(
        data=>
        {
          let respuesta = JSON.parse(data["_body"]);
          console.log(respuesta);
          if(respuesta.status == 200)
            {
              // alert("Usted ha ingresado un evento correctamente!");
              // this.router.navigate(['/PrincipalCliente/EventosCliente']);
              modelo.msgs = [];
              modelo.msgs.push({severity:'info', summary:'Exito', detail: 'Su pedido fue procesado!'});
              modelo.ocultarProceso = true;
              setTimeout(function(){
                modelo.display = false;
                modelo.ocultarSpinner = true;
                modelo.ocultarSalones = true;
                console.log("Llega hasta aca");
                setTimeout(function(){
                  //Reemplazar por el confirm button de encuesta
                  modelo.confirmationService.confirm({
                    message: 'Tu opinión nos importa mucho a nosotros,por eso'
                    +'te pedimos si podrías completar este breve encuesta sobre nosotros. Muchisimas gracias por tu tiempo!',
                    header: 'Encuesta de satisfacción',
                    icon: 'fa fa-question-circle',
                    accept: () => {
                        // this.msgs = [{severity:'info', summary:'Confirmed', detail:'You have accepted'}];
                        modelo.router.navigate(['/EncuestaCliente']);
                    },
                    reject: () => {
                        // this.msgs = [{severity:'info', summary:'Rejected', detail:'You have rejected'}
                    }
                });
                  console.log("Llega hasta este punto");
                },1000);
                }, 2000);
            }
           else
            {
              this.msgs = [];
              this.msgs.push({severity:'info', summary:'Fracaso', detail: 'No pudimos procesar tu pedido!'});
              modelo.display = false;
            }
        },
        error =>
        {
          console.log(error);
        }
      );
   }, 5000);
}


}
