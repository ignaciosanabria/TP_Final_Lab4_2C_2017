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
    

   public FinalizarEvento(body : any)
   {
     return this.miServicioEventos.FinalizarEventoApi(body);
   }

   public BorrarEvento(id_evento : any, body : any)
   {
     return this.miServicioEventos.BorrarEventoApi(id_evento,body);
   }

   public CancelarEvento(body : any)
   {
     return this.miServicioEventos.CancelarEventoApi(body);
   }
   
   public TraerDatosExcel()
   {
     return this.miServicioEventos.TraerDatosExcelApi().then(
       data =>
       {
         return data;
       },
       error =>
       {
         console.log(error);
       }
     )
   }

   //Para el PDF 

   public TraerDatosPDF()
   {
    return this.miServicioEventos.TraerDatosPDFApi().then(
      data =>
      {
        return data;
      },
      error =>
      {
        console.log(error);
      }
    )
   }
}
