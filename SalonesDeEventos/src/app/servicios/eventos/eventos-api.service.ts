import { Injectable } from '@angular/core';
import {MiHttpService} from '../../servicios/mi-http.service';
@Injectable()
export class EventosApiService {

  miHttpServicio : MiHttpService;
  constructor(httpServicio : MiHttpService) {
    this.miHttpServicio = httpServicio;
   }
   
   
   public TraerEventosClientesApi(idCliente : any)
   {
     return this.miHttpServicio.httpPost("eventos/TraerEventosCliente",idCliente);
   }

}
