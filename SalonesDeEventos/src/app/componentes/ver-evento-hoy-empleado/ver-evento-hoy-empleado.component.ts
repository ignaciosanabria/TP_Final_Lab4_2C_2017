import { Component, OnInit, OnDestroy} from '@angular/core';
import {MesasService} from '../../servicios/mesas/mesas.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-ver-evento-hoy-empleado',
  templateUrl: './ver-evento-hoy-empleado.component.html',
  styleUrls: ['./ver-evento-hoy-empleado.component.css']
})
export class VerEventoHoyEmpleadoComponent implements OnInit, OnDestroy {

  miMesasServicio : MesasService;
  
    ocultarMesas : boolean;
  
    mesas : Array<any>;
  
  
    idEvento: number;
    private sub: any;
  
    constructor(servicioMesas : MesasService, private route: ActivatedRoute) {
      this.miMesasServicio = servicioMesas;
      this.ocultarMesas = true;
     }
  
    ngOnInit() {
      this.sub = this.route.params.subscribe(params => {
        this.idEvento = +params['idEvento']; // (+) converts string 'id' to a number
  
        // In a real app: dispatch action to load the details here.
     });
     console.log(this.idEvento);
     let json = {"id_evento" : this.idEvento};
     this.miMesasServicio.TraerMesasPorElEvento(JSON.stringify(json)).subscribe(
      data =>
      {
        console.log(data);
        let respuesta = JSON.parse(data["_body"]);
        console.log(respuesta);
        this.mesas = respuesta.mesas;
        this.ocultarMesas = false;
      },
      error =>
      {
        console.log(error);
      }
    );
    }

    ngOnDestroy()
    {
      this.sub.unsubscribe();
    }  

}
