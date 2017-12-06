import { Component, OnInit, Input} from '@angular/core';
import {MesasService} from '../../servicios/mesas/mesas.service';
@Component({
  selector: 'app-boton-mesas',
  templateUrl: './boton-mesas.component.html',
  styleUrls: ['./boton-mesas.component.css']
})
export class BotonMesasComponent implements OnInit {
  
  miMesasServicio : MesasService;
  
  @Input() evento : any;

  ocultarMesas : boolean;

  mesas : Array<any>;

  mesaElegida : any;

  constructor(servicioMesas : MesasService) {
    this.miMesasServicio = servicioMesas;
    this.ocultarMesas = true;
   }

  ngOnInit() {
    this.ElegirMesa = this.ElegirMesa.bind(this);
  }

  public VerMesas()
  {
    this.ocultarMesas = false;
    console.log(this.evento);
    let json = {"id_evento" : this.evento.id_evento};
    this.miMesasServicio.TraerMesasPorElEvento(JSON.stringify(json)).subscribe(
      data =>
      {
        console.log(data);
        let respuesta = JSON.parse(data["_body"]);
        console.log(respuesta);
        this.mesas = respuesta.mesas;
      },
      error =>
      {
        console.log(error);
      }
    );
  }

  ElegirMesa(mesa : any)
  {
    this.mesaElegida = null;
    var modelo=this;
    setTimeout(function(){ 
      modelo.mesaElegida = mesa;
     }, 2000);
    console.log(mesa);
    //this.ElegirMesa = this.ElegirMesa.bind(this);
  }

  cerrarVerMesas()
  {
    this.ocultarMesas = true;
    this.mesaElegida = null;
  }

  

}
