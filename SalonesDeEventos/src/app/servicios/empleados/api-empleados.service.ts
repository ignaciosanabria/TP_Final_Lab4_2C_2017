import { Injectable } from '@angular/core';
import {MiHttpService} from '../../servicios/mi-http.service';
@Injectable()
export class ApiEmpleadosService {

  miHttpServicio : MiHttpService;
  constructor(httpServicio : MiHttpService) {
    this.miHttpServicio = httpServicio;
   }

   public TraerEmpleadosApi()
   {
    return this.miHttpServicio.httpGetPromise("empleados/").then(datos => {return datos;}).catch(error => {console.info(error)});
   }

   public ValidarEmpleadoApi(body : any)
   {
     return this.miHttpServicio.httpPost("empleados/",body);
   }

   public TraerEmpledoApi(body : any)
   {
     return this.miHttpServicio.httpGetPromise("empleados/TraerEmpleado/"+body).then(datos => {return datos;}).catch(error => {console.info(error)});
   }

}
