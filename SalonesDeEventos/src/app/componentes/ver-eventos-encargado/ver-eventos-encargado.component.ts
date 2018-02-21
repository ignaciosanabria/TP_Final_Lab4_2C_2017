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
  eventosExcel : Array<any>;
  miServicioAut : AutService;
  today = new Date();
  fechaActual : string = this.today.getDate() + '/' + (this.today.getMonth()+1)+ '/' + this.today.getFullYear();
  constructor(servicioEventos : EventosService, servicioAut : AutService) { 
    this.miServicioEventos = servicioEventos;
    this.miServicioAut = servicioAut;
  }
  ngOnInit() {
    let tokenString = localStorage.getItem("token");
    let token = this.miServicioAut.getTokenParam(tokenString);
    console.log(token);
    console.log(token["data"].id_salon);
    if(token["data"].cargo == "Encargado")
      {
    let json = {"id_salon": token["data"].id_salon};
    //this.fechaActual = "24/12/2017";
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



  FinalizarEvento(evento : any)
  {
    let json = {"id_evento":evento.id_evento};
    let confirmar = confirm("Desea finalizar el evento?");
   if(confirmar == true)
    {
      this.miServicioEventos.FinalizarEvento(JSON.stringify(json)).subscribe(
        data =>{
          console.log(data);
          let respuesta = JSON.parse(data["_body"]);
          if(respuesta.status == 200)
            {
          alert("Usted ha finalizado correctamente un evento!");
          location.reload();
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
  }

  BorrarEvento(evento : any)
  {
    console.log(evento);
    let confirmar = confirm("Desea borrar el evento?");
    if(confirmar == true)
      {
      this.miServicioEventos.BorrarEvento(evento.id_evento).subscribe(
        data =>{
          console.log(data);
          let respuesta = JSON.parse(data["_body"]);
          if(respuesta.status == 200)
            {
                alert("Usted acaba de borrar exitosamente un evento!");
                location.reload();
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
  }

}
