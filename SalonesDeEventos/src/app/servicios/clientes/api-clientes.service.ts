import { Injectable } from '@angular/core';
import {MiHttpService} from '../../servicios/mi-http.service';
@Injectable()
export class ApiClientesService {

  miHttpServicio : MiHttpService;
  constructor(httpServicio : MiHttpService) {
    this.miHttpServicio = httpServicio;
   }

   public TraerClientesApi()
   {
    return this.miHttpServicio.httpGetPromise("clientes/").then(datos => {return datos;}).catch(error => {console.info(error)});
   }

   public ValidarClienteApi(body : any)
   {
     return this.miHttpServicio.httpPost("clientes/",body);
   }

   public RegistrarClienteApi(body : any)
   {
     return this.miHttpServicio.httpPost("Registro/RegistrarClienteSinFoto",body);
   }

}
