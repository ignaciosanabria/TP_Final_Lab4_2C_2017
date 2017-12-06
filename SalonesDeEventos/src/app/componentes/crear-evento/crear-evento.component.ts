import { Component, OnInit } from '@angular/core';
import {IMyDpOptions,IMyDateModel} from 'mydatepicker';
import {SalonesService} from '../../servicios/salones/salones.service';
@Component({
  selector: 'app-crear-evento',
  templateUrl: './crear-evento.component.html',
  styleUrls: ['./crear-evento.component.css']
})
export class CrearEventoComponent implements OnInit {
  ocultarSalones : boolean;
  salonesDisponibles : Array<any>;
  public myDatePickerOptions: IMyDpOptions = {
    // other options...
    dateFormat: 'dd/mm/yyyy',
};

 miServicioSalones : SalonesService;

// Initialized to specific date (09.10.2018).
public model: any; //= { date: { year: 2017, month: 11, day: 29 } };
  constructor(ServicioSalones : SalonesService) {
    this.miServicioSalones = ServicioSalones;
    this.ocultarSalones = true;
  }
  

  ngOnInit()
  {
    
  }

  onDateChanged(event: IMyDateModel) {
    // event properties are: event.date, event.jsdate, event.formatted and event.epoc
    console.log(event);
    console.log(event.formatted);
    let json = {"fecha":event.formatted};
    console.log(JSON.stringify(json));
    if(event.formatted == "")
      {
        console.log("esta vacio");
      }
    else
      {
        //Implementacion del Servicio
        this.miServicioSalones.TraerSalonesDisponibles(JSON.stringify(json)).subscribe(
          data => {
            this.ocultarSalones = false;
            console.log(data);
            let respuesta = JSON.parse(data["_body"]);
            this.salonesDisponibles = respuesta;
          },
          error =>{
            console.log(error);
          }
        );
      }
}

  public ver()
  {
    console.log(this.model);
  }

  public Elegir(salon : any)
  {
    console.log(salon);
  }

}
