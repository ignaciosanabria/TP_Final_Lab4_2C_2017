import { Component, OnInit, ViewChild, ElementRef, Directive, Input, ContentChild, AfterViewInit} from '@angular/core';
import { AgmCoreModule, MapsAPILoader, GoogleMapsAPIWrapper} from '@agm/core';
import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window';
import {GoogleMapDirective} from '../../directivas/google-map.directive';//Directiva Mia
import {SalonesService} from '../../servicios/salones/salones.service';
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

  @ViewChild(GoogleMapDirective) gm: GoogleMapDirective;
  
  salonElegido : any;
  salones : Array<any>;

  origin : any;
  destination : any;

  // origin = {longitude : -46.2884694, latitude :-32.8085753};
  // destination = { longitude: -60.2884694, latitude: -36.8085753 };

  //

  //Implementacion de calcular distancia entre puntos Origin y Destination
  // origin = { longitude: -58.2922117, latitude: -34.798992399999996 };  // its a example aleatory position
  // destination = { longitude: -58.2884694, latitude: -34.8085753 };  // its a example aleatory position

  miApiGps : GoogleMapsAPIWrapper;

  constructor(SalonesServicio : SalonesService, gmapsApi: GoogleMapsAPIWrapper) {
    this.gm = new GoogleMapDirective(gmapsApi);
    this.miApiGps = gmapsApi;
    this.miSalonesServicio = SalonesServicio;
    this.ocultarDirections = true;
    console.log(this.gm);
    this.miSalonesServicio.TraerCoordenadas().then(
      data => {
        console.log(data);
        this.salones = data;
      }
    ).catch(
      error => 
      {
        console.log(error);
      }
    );
    var me = this;
    navigator.geolocation.getCurrentPosition(function(position) {
     console.log(position.coords.latitude);
    console.log(position.coords.longitude);
     me.lat = position.coords.latitude;
     me.lng = position.coords.longitude;
     //me.origin = {longitude: me.lng, latitude: me.lat};
    if ("geolocation" in navigator) {
      /* geolocation is available */
      console.log("Esta disponible");
    } else {
      /* geolocaiton IS NOT available */
      console.log("Ni ahi papa!");
    }
    });
  }

  ngOnInit() {
  }

  public VerIndicaciones()
  {
    this.ocultarDirections = false;
  }

  VerSalon()
  {
    console.log(this.salonElegido);
  }

  updateSelectedValue(event): void{
    //this.selectedObject = JSON.parse(event);
    console.log(event);
    let salon = JSON.parse(event);
    if(salon != undefined)
      {
        // this.origin = null;
        // this.destination = null;
        this.origin = {longitude: this.lng, latitude: this.lat};
        console.log(this.origin);
        this.destination = {longitude: Number(salon.longitud), latitude: Number(salon.latitud)};
        console.log(this.destination);
        this.gm.updateDirections();
      }
  }

}
