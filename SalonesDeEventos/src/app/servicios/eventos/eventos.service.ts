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

   public TraerTodosLosEventos()
   {
     return this.miServicioEventos.TraerTodosLosEventosApi().then(
       data =>
       {
         return data;
       }
     ).catch(
       error => {
         console.log(error);
       }
     );
   }

   public InsertarEvento(body : any)
   {
     return this.miServicioEventos.InsertarEventoApi(body);
   }

   public TraerCantidadEventosPorCliente()
   {
     return this.miServicioEventos.TraerCantidadEventosPorClienteApi().then(
       data =>
       {
         return data;
       }
     ).catch(
        error =>
        {
          console.log(error);
        }
     )
   }


   public TraerUltimoEventoPorInvitado(body : any)
   {
     return this.miServicioEventos.TraerUltimoEventoPorInvitadoApi(body);
   }

   public TraerEventosProximos(body : any)
   {
     return this.miServicioEventos.TraerEventosProximosApi(body);
   }

   public TraerTodosLosEventosPorSalon(body : any)
   {
     return this.miServicioEventos.TraerTodosLosEventosPorSalonApi(body);
   }

  //Para el encargado y la recepcionista
   public TraerEventoPorFechaActual(body : any)
   {
     return this.miServicioEventos.TraerEventoPorFechaActualApi(body);
   }

   

}
