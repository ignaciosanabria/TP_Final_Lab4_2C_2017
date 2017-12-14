import { Component, OnInit, Input, OnDestroy} from '@angular/core';
import {MesasService} from '../../servicios/mesas/mesas.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-boton-mesas',
  templateUrl: './boton-mesas.component.html',
  styleUrls: ['./boton-mesas.component.css']
})
export class BotonMesasComponent implements OnInit, OnDestroy {
  
  miMesasServicio : MesasService;
  
  evento : any;

  ocultarMesas : boolean;

  mesas : Array<any>;

  idEvento: number;
  private sub: any;

  constructor(servicioMesas : MesasService, private route: ActivatedRoute) {
    this.miMesasServicio = servicioMesas;
    this.ocultarMesas = true;
   }

  ngOnInit() {
    // this.ElegirMesa = this.ElegirMesa.bind(this);
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
