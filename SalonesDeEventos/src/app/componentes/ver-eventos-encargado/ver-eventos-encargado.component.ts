import { Component, OnInit } from '@angular/core';
import {EventosService} from '../../servicios/eventos/eventos.service';
import {AutService} from '../../servicios/aut.service';
import { Angular2Csv } from 'angular2-csv';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';
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
  fechaActual : Date;
  idSalon : number;
  ocultarEventos : boolean;
  cargo : string;
  constructor(servicioEventos : EventosService, servicioAut : AutService,private confirmationService: ConfirmationService) { 
    this.miServicioEventos = servicioEventos;
    this.miServicioAut = servicioAut;
  }
  ngOnInit() {
    this.fechaActual = new Date();
    let mesString = "";
    let minutosString = "";
    let mes = (this.fechaActual.getMonth()+1);
    let minutos = this.fechaActual.getMinutes();
    if(mes < 10)
    {
      mesString = (String("00" + mes).slice(-2)); //Para que el mes sea en formato MM/DD/YYYY
    }
    else
    {
      mesString = mes.toString();
    }
    if(minutos < 10)
      {
        minutosString = (String("00" + minutos).slice(-2))
      }
      else
      {
      minutosString = minutos.toString();
      }
    console.log(mes);
     let formato = this.fechaActual.getDate()+"/"+mesString+"/"+this.fechaActual.getFullYear()+" "+this.fechaActual.getHours()+":"+minutosString;
    let tokenString = localStorage.getItem("token");
    let token = this.miServicioAut.getTokenParam(tokenString);
    console.log(token);
    console.log(token["data"].id_salon);
    this.idSalon = token["data"].id_salon;
    this.cargo = token["data"].cargo;
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



  FinalizarEvento(id_evento : any)
  {
    this.confirmationService.confirm({
      message: 'Desea finalizar este evento?',
      header: 'Finalizar',
      icon: 'fa fa-question-circle',
      accept: () => {
        this.ocultarEventos = true;
         let json = {};
          this.miServicioEventos.FinalizarEvento(id_evento).subscribe(
            data =>{
              let respuesta = JSON.parse(data["_body"]);
              if(respuesta.status == 200)
              {
                var modelo = this;
                setTimeout(function(){
                 
                  if(modelo.cargo == "Encargado")
                    {
                  let json = {"id_salon": modelo.idSalon};
                  //this.fechaActual = "24/12/2017";
                  console.log(this.fechaActual);
                  modelo.miServicioEventos.TraerTodosLosEventosPorSalon(JSON.stringify(json)).subscribe(
                    data =>{
                      console.log(data);
                      let respuesta = JSON.parse(data["_body"]);
                      modelo.eventos = respuesta.eventos;
                    },
                    error =>{
                      console.log(error);
                    }
                  );
                  }
                  else if(modelo.cargo == "Administrador")
                  {
                      modelo.miServicioEventos.TraerTodosLosEventos().then(
                        data =>{
                          console.log(data);
                          modelo.eventos = data["eventos"];
                        }
                      ).catch(
                        error =>{
                          console.log(error);
                        }
                      )
                  }
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
                  modelo.ocultarEventos = false;

                  if(modelo.cargo == "Encargado")
                    {
                  let json = {"id_salon": modelo.idSalon};
                  modelo.miServicioEventos.TraerTodosLosEventosPorSalon(JSON.stringify(json)).subscribe(
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
                  else if(modelo.cargo == "Administrador")
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



}
