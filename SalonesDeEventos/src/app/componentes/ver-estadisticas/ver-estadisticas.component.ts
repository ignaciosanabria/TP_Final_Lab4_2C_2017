import { Component, OnInit } from '@angular/core';
import { ChartModule } from 'angular2-highcharts';
import {EventosService} from '../../servicios/eventos/eventos.service';
@Component({
  selector: 'app-ver-estadisticas',
  templateUrl: './ver-estadisticas.component.html',
  styleUrls: ['./ver-estadisticas.component.css']
})
export class VerEstadisticasComponent implements OnInit {
  options : Object;
  miServicioEventos : EventosService;
  constructor(servicioEventos : EventosService) { 
    this.miServicioEventos = servicioEventos;
    this.miServicioEventos.TraerCantidadEventosPorCliente().then(
      data => 
      {
        console.log(data);
        var processed_json = new Array();
      var nombres = new Array();
        for (let i = 0; i < data.length; i++) {
            // processed_json.push([data[i].nombre,data[i].apellido,data[i].cantidad_eventos]);
             processed_json.push(data[i].cantidad_eventos);
             nombres.push(data[i].nombre+","+data[i].apellido);
        }
        console.log(processed_json);
        console.log(nombres);
        this.options = {
          chart: {
            type: 'column'
        },
                title : { text : 'Cantidad Eventos' },
                xAxis: {
                  // categories: ['Apples', 'Bananas', 'Oranges']
                 //categories: ['Apples', 'Bananas', 'Oranges']
                 categories : nombres
              },
              yAxis: {
                  title: {
                      text: 'Numero de Eventos Realizados'
                  }}
                  ,
                series: [{
                    name: 'Eventos Realizados',
                    data: processed_json
                }]
            }
    }
    ).catch(
      error =>{
        console.log(error);
      }
    );
  //   this.options = {
  //     title : { text : 'simple chart' },
  //     series: [{
  //         data: [29.9, 71.5, 106.4, 129.2],
  //     }]
  // };
  // this.options = {
  //   chart: {
  //     type: 'column'
  // },
  //         title : { text : 'Cantidad Eventos' },
  //         xAxis: {
  //           categories: ['Apples', 'Bananas', 'Oranges']
  //       },
  //       yAxis: {
  //           title: {
  //               text: 'Numero de Eventos Realizados'
  //           }}
  //           ,
  //         series: [{
  //             //data: [29.9, 71.5, 106.4, 129.2],
  //             name: 'Jane',
  //             data: [1, 0, 4]
  //         }, {
  //             name: 'John',
  //             data: [5, 7, 3]
  //         }],
  //     }
  }

  ngOnInit() {
  }

}
