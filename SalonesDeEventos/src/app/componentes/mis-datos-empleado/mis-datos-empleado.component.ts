import { Component, OnInit, OnDestroy } from '@angular/core';
import {EmpleadosService} from '../../servicios/empleados/empleados.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-mis-datos-empleado',
  templateUrl: './mis-datos-empleado.component.html',
  styleUrls: ['./mis-datos-empleado.component.css']
})
export class MisDatosEmpleadoComponent implements OnInit {
  miServicioEmpleados : EmpleadosService;
  
  idEmpleado: number;
  private sub: any;
  fechaHoy : Date;
  fechaFormateada : string;
  empleado: any;

  constructor(servicioEmpleados : EmpleadosService,private route: ActivatedRoute) {
    this.miServicioEmpleados = servicioEmpleados;
    this.fechaHoy = new Date();
    console.log(this.fechaHoy);
    this.fechaFormateada = this.fechaHoy.getFullYear() +"/"+(this.fechaHoy.getMonth() + 1)+"/"+this.fechaHoy.getDate()+"  "+this.fechaHoy.getHours()+":"+this.fechaHoy.getMinutes();
    console.log(this.fechaFormateada); 
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.idEmpleado = +params['idEmpleado']; // (+) converts string 'id' to a number

      // In a real app: dispatch action to load the details here.
   });
   console.log(this.idEmpleado);



    this.miServicioEmpleados.TraerEmpleado(this.idEmpleado).then(
      data =>{
        console.log(data);
        this.empleado = data.empleado;
      }
    ).catch(
      error => {
        console.log(error);
      }
    );
  }


  // ngOnDestroy()
  // {
  //   this.sub.unsubscribe();
  // }  

}
