import { Component, OnInit } from '@angular/core';
import {EventosService} from '../../servicios/eventos/eventos.service';
import {AutService} from '../../servicios/aut.service';
@Component({
  selector: 'app-ver-eventos-recepcionista',
  templateUrl: './ver-eventos-recepcionista.component.html',
  styleUrls: ['./ver-eventos-recepcionista.component.css']
})
export class VerEventosRecepcionistaComponent implements OnInit {
  
  eventos : Array<any>;
  miServicioEventos : EventosService; 
  miServicioAut : AutService;
  today = new Date();
  fechaActual : string = this.today.getDate() + '/' + (this.today.getMonth()+1)+ '/' + this.today.getFullYear();
  currentDate = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
  fechaMañana = this.currentDate.getDate() + '/' + (this.currentDate.getMonth()+1) + '/' + this.currentDate.getFullYear();
  constructor(ServicioEventos : EventosService, servicioAut : AutService) {
    this.miServicioEventos = ServicioEventos;
    this.miServicioAut = servicioAut;
   }

  ngOnInit() {
    let tokenString = localStorage.getItem("token");
    let token = this.miServicioAut.getTokenParam(tokenString);
    console.log(token);
    console.log(this.today);
    console.log(this.currentDate);
    console.log(this.fechaActual);
    console.log(this.fechaMañana);
    console.log(token["data"].id_salon);
    let json = {"fecha_inicio": this.fechaActual, "id_salon": token["data"].id_salon};
    this.miServicioEventos.TraerEventosProximos(JSON.stringify(json)).subscribe(
      data =>{
        console.log(data);
        let respuesta = JSON.parse(data["_body"]);
        this.eventos = respuesta.eventos;
      },
      error =>{
        console.log(error);
      }
    );
  }

}
