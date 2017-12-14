import { Component, OnInit } from '@angular/core';
import {EventosService} from '../../servicios/eventos/eventos.service';
import {AutService} from '../../servicios/aut.service';
import { Angular2Csv } from 'angular2-csv';
@Component({
  selector: 'app-ver-eventos-encargado',
  templateUrl: './ver-eventos-encargado.component.html',
  styleUrls: ['./ver-eventos-encargado.component.css']
})
export class VerEventosEncargadoComponent implements OnInit {
  
  miServicioEventos : EventosService;
  eventos : Array<any>;
  miServicioAut : AutService;
  today = new Date();
  fechaActual : string = this.today.getDate() + '/' + (this.today.getMonth()+1)+ '/' + this.today.getFullYear();
  constructor(servicioEventos : EventosService, servicioAut : AutService) { 
    this.miServicioEventos = servicioEventos;
    this.miServicioAut = servicioAut;
  }
  ngOnInit() {
    let token = this.miServicioAut.getToken();
    console.log(token);
    console.log(token["data"].id_salon);
    if(token["data"].cargo == "Encargado")
      {
    let json = {"id_salon": token["data"].id_salon};
    console.log(this.fechaActual);
    this.miServicioEventos.TraerTodosLosEventosPorSalon(JSON.stringify(json)).subscribe(
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
    else if(token["data"].cargo == "Administrador")
    {
        this.miServicioEventos.TraerTodosLosEventos().then(
          data =>{
            console.log(data);
            this.eventos = data["eventos"];
          }
        ).catch(
          error =>{
            console.log(error);
          }
        )
    }

  }

  descargarEventos()
  {
    var data = JSON.stringify(this.eventos);
    var head = ['ID','Salon','Direccion','Fecha','Estado','Reservado']
     
     if(data)
       new Angular2Csv(data, 'Lista_Eventos',  {headers: (head)});
     else
       console.log('no: ', data);
  }


  FinalizarEvento(evento : any)
  {
   console.log(evento);
  }

  BorrarEvento(evento : any)
  {
    console.log(evento);
  }

}
