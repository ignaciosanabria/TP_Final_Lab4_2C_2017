import { Component, OnInit, ViewChild, ElementRef, Directive, Input, ContentChild, AfterViewInit, EventEmitter, Output} from '@angular/core';
import { AgmCoreModule, MapsAPILoader, GoogleMapsAPIWrapper} from '@agm/core';
import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window';
import {GoogleMapDirective} from '../../directivas/google-map.directive';//Directiva Mia
import {SalonesService} from '../../servicios/salones/salones.service';
import {InvitadosService} from '../../servicios/invitados/invitados.service';
import {EventosService} from '../../servicios/eventos/eventos.service';
import {AutService} from '../../servicios/aut.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-direcciones',
  templateUrl: './direcciones.component.html',
  styleUrls: ['./direcciones.component.css'],
  providers : [ GoogleMapsAPIWrapper ]
})
export class DireccionesComponent implements OnInit {
  
  zoom : number = 12;
  lat : number;
  lng : number;
  ocultarDirections : boolean;
  miSalonesServicio : SalonesService;
  miEventosServicio : EventosService;
  miAutServicio : AutService;
  nombreInvitado : string = "";
  today = new Date();
  salonNombre : string = "";
  fechaEvento : string = "";
  fechaActual : string = this.today.getDate() + '/' + (this.today.getMonth()+1)+ '/' + this.today.getFullYear();

  @ViewChild(GoogleMapDirective) gm: GoogleMapDirective;

  latDest : number;
  lngDest : number;

  //Implementacion de calcular distancia entre puntos Origin y Destination

  //Seteados por default para que no se rompan
  origin = { longitude: -58.2922117, latitude: -34.798992399999996 };  // its a example aleatory position
  destination = { longitude: -58.2884694, latitude: -34.8085753 };  // its a example aleatory position

  miApiGps : GoogleMapsAPIWrapper;

  constructor(SalonesServicio : SalonesService, gmapsApi: GoogleMapsAPIWrapper, eventosServicio : EventosService,
    servicioAut : AutService,private route: ActivatedRoute,
    private router: Router) {
    this.gm = new GoogleMapDirective(gmapsApi);
    this.miApiGps = gmapsApi;
    this.miSalonesServicio = SalonesServicio;
    this.miEventosServicio = eventosServicio;
    this.miAutServicio = servicioAut;
    let token = this.miAutServicio.getToken();
    this.ocultarDirections = true;

    // console.log(this.gm);
    //console.log(this.fechaActual);

    var me = this;
    navigator.geolocation.getCurrentPosition(function(position) {
     console.log(position.coords.latitude);
    console.log(position.coords.longitude);
     me.lat = position.coords.latitude;
     me.lng = position.coords.longitude;
    if ("geolocation" in navigator) {
      /* geolocation is available */
      console.log("Esta disponible");
    } else {
      /* geolocaiton IS NOT available */
      console.log("Ni ahi papa!");
    }
    });
    console.log(token["data"].id_invitado);
    this.nombreInvitado = token["data"].nombre;
    let json = {"fecha" : this.fechaActual, "id_invitado": token["data"].id_invitado};
    this.miEventosServicio.TraerUltimoEventoPorInvitado(JSON.stringify(json)).subscribe(
      data =>{
        console.log(data);
        let respuesta = JSON.parse(data["_body"]);
        if(respuesta.eventos.length == 0)
          {
            alert("Atencion, usted no esta invitado en algun evento en el dia de la fecha de "+this.fechaActual);
            var modelo=this;
            setTimeout(function(){ 
              modelo.router.navigate(['/']);
             }, 3000);
          }
          else
            {
              //Siempre voy a utilizar el indice 0 ya que seria el ultimo evento programado mas cercano a la fecha actual.
              //Si viene con un evento programado, hago una peticion para saber el salon y la mesa donde tiene que ir.
              //console.log(respuesta);
              //console.log(respuesta.eventos[0]);
              this.fechaEvento = respuesta.eventos[0].fecha_inicio;
              console.log(respuesta.eventos[0].id_salon);
              let json2 = {"id_mesa": respuesta.eventos[0].id_mesa};
              this.miSalonesServicio.TraerLosDatosDelSalonYLaMesa(JSON.stringify(json2)).subscribe(
                data =>{
                  console.log(data);
                  let respuesta2 = JSON.parse(data["_body"]);
                  this.salonNombre = respuesta2.arraySalon[0].nombre;
                  this.lngDest = Number(respuesta2.arraySalon[0].longitud);
                  this.latDest = Number(respuesta2.arraySalon[0].latitud);
                  this.origin.latitude = this.lat;
                  this.origin.longitude = this.lng;
                  this.destination.latitude = this.latDest;
                  this.destination.longitude = this.lngDest;
                  this.gm.updateDirections();
                },
                error =>{
                  console.log(error);
                }
              )
            }
      },
      error =>
      {
        console.log(error);
      }
    )
  }

  ngOnInit() {
  }

  public VerIndicaciones()
  {
    this.ocultarDirections = false;
  }

  cerrarVentana()
  {
    this.ocultarDirections = true;
  }

}
