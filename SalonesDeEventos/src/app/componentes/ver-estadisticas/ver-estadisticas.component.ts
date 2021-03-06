import { Component, OnInit } from '@angular/core';
// import { ChartModule } from 'angular2-highcharts';
import {EventosService} from '../../servicios/eventos/eventos.service';
import {InvitadosService} from '../../servicios/invitados/invitados.service';
import {ChartModule} from 'primeng/chart';
import {EncuestasService} from '../../servicios/encuestas/encuestas.service';
@Component({
  selector: 'app-ver-estadisticas',
  templateUrl: './ver-estadisticas.component.html',
  styleUrls: ['./ver-estadisticas.component.css']
})
export class VerEstadisticasComponent implements OnInit {
  // options : Object;
  // options2 : Object;
  miServicioEventos : EventosService;
  miServicioInvitados : InvitadosService;
  ocultarOtraEstadistica : boolean;
 //Prime NG
  data: any;
  options : any;
  encuestaElegida : any;
  arrayClientes : String[];
  arrayCantidad : Number[];
  miServicioEncuesta : EncuestasService;
  data2 : any;
  data3 : any;
  data4 : any;
      constructor(servicioEventos : EventosService, servicioInvitados : InvitadosService,servicioEncuestas : EncuestasService) {
        this.miServicioEncuesta = servicioEncuestas;
        this.miServicioEventos = servicioEventos;
        this.miServicioInvitados = servicioInvitados;
        this.miServicioEncuesta.seleccionarCantidadRespuesta1().then(
          data =>{
            console.log(data);
          }
        ).catch(
          error =>{
            console.log(error);
          }
        );
        this.miServicioEventos.TraerCantidadEventosPorCliente().then(
              data => 
              {
                console.log(data);
                // for(let i=0; i < )
                //   {

                //   }
              }).catch(
                error =>{
                  console.log(error);
                }
              );
          this.data = {
              labels: ['A','B','C'],
              datasets: [
                  {
                      data: [300, 50, 100],
                      backgroundColor: [
                          "#FF6384",
                          "#36A2EB",
                          "#FFCE56"
                      ],
                      hoverBackgroundColor: [
                          "#FF6384",
                          "#36A2EB",
                          "#FFCE56"
                      ]
                  }]    
              };
      }

      ElegirEncuesta(event)
      {
        console.log(event);
      }
  // constructor(servicioEventos : EventosService, servicioInvitados : InvitadosService) { 
  //   this.miServicioEventos = servicioEventos;
  //   this.miServicioInvitados = servicioInvitados;
  //   this.ocultarOtraEstadistica = true;
  //   this.miServicioEventos.TraerCantidadEventosPorCliente().then(
  //     data => 
  //     {
  //       console.log(data);
  //     var processed_json = new Array();
  //     var nombres = new Array();
  //       for (let i = 0; i < data.length; i++) {
  //           // processed_json.push([data[i].nombre,data[i].apellido,data[i].cantidad_eventos]);
  //            processed_json.push(data[i].cantidad_eventos);
  //            nombres.push(data[i].nombre+","+data[i].apellido);
  //       }
  //       console.log(processed_json);
  //       console.log(nombres);
  //       this.options = {
  //         chart: {
  //           type: 'column'
  //       },
  //               title : { text : 'Cantidad Eventos' },
  //               xAxis: {
                  // categories: ['Apples', 'Bananas', 'Oranges']
                 //categories: ['Apples', 'Bananas', 'Oranges']
  //                categories : nombres
  //             },
  //             yAxis: {
  //                 title: {
  //                     text: 'Numero de Eventos Realizados'
  //                 }}
  //                 ,
  //               series: [{
  //                   name: 'Eventos Realizados',
  //                   data: processed_json
  //               }]
  //           }
  //   }
  //   ).catch(
  //     error =>{
  //       console.log(error);
  //     }
  //   );
  // }

  ngOnInit() {
    // this.miServicioInvitados.TraerCantidadDeInvitadosTraidosPorCliente().then(
    //   data =>{
    //     console.log(data);
    //     var processed_json = new Array();
    //     var nombres = new Array();
    //       for (let i = 0; i < data.invitados.length; i++) {
              // processed_json.push([data[i].nombre,data[i].apellido,data[i].cantidad_eventos]);
              //  processed_json.push(data.invitados[i].cantidad_invitados);
          //      nombres.push(data.invitados[i].nombre_cliente+","+data.invitados[i].apellido_cliente);
          // }
          // console.log(processed_json);
          // console.log(nombres);
          // this.options2 = {
          //   chart: {
          //     type: 'column'
          // },
          //         title : { text : 'Cantidad Invitados' },
          //         xAxis: {
                    // categories: ['Apples', 'Bananas', 'Oranges']
                   //categories: ['Apples', 'Bananas', 'Oranges']
    //                categories : nombres
    //             },
    //             yAxis: {
    //                 title: {
    //                     text: 'Numero de Invitados Traidos'
    //                 }}
    //                 ,
    //               series: [{
    //                   name: 'Invitados Traidos',
    //                   data: processed_json
    //               }]
    //           }
    //   }
    // ).catch(
    //   error =>{
    //     console.log(error);
    //   }
    // );
  }

  // verOtraEstadistica()
  // {
  //   this.ocultarOtraEstadistica = false;
  // }
  // cerrarOtraEstadistica()
  // {
  //   this.ocultarOtraEstadistica = true;
  // }

}
