import { Injectable } from '@angular/core';
import {ApiEmpleadosService} from './api-empleados.service';
@Injectable()
export class EmpleadosService {

  miApiEmpleado : ApiEmpleadosService;
  constructor(ApiEmpleado : ApiEmpleadosService) {
    this.miApiEmpleado = ApiEmpleado;
   }

   public TraerEmpleados()
   {
     return this.miApiEmpleado.TraerEmpleadosApi().then(
      data =>
    {
      return data;
    }).catch(
      error =>
      {
        console.info(error);
      }
    )
   }

   public ValidarEmpleado(body : any)
   {
     return this.miApiEmpleado.ValidarEmpleadoApi(body);
   }

   public TraerEmpleado(body : any)
   {
     return this.miApiEmpleado.TraerEmpledoApi(body).then(
       data =>{
         return data;
       }
     ).catch(
       error =>
       {
         console.info(error);
       }
     );
   }

}
