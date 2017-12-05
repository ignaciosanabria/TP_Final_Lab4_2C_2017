import { Injectable } from '@angular/core';
import {EventosApiService} from './eventos-api.service'
@Injectable()
export class EventosService {
  
  miServicioEventos : EventosApiService;
  constructor(ServicioEventos : EventosApiService) {
    this.miServicioEventos = ServicioEventos;
   }

   public TraerEventosCliente(idCliente : any)
   {
     return this.miServicioEventos.TraerEventosClientesApi(idCliente);
   }

}
