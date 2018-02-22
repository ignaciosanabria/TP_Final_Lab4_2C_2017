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

   public TraerTodosLosEventosApi()
   {
     return this.miHttpServicio.httpGetPromise("eventos/TraerTodosLosEventos").then(
       data=>
       {
         return data;
       }
     ).catch(
       error =>{
       console.log(error);
       }
     );
   }
   
   public InsertarEventoApi(evento : any)
   {
     return this.miHttpServicio.httpPost("eventos/InsertarEvento",evento);
   }

   public TraerCantidadEventosPorClienteApi()
   {
       return this.miHttpServicio.httpGetPromise("eventos/TraerCantidadEventosPorCliente").then(
         data =>
         {
           return data;
         }
       ).catch(
         error =>
         {
           console.log(error);
         }
       );
   }

   public TraerUltimoEventoPorInvitadoApi(body : any)
   {
     return this.miHttpServicio.httpPost("eventos/TraerUltimoEventoPorInvitado",body);
   }

   public TraerEventosProximosApi(body : any)
   {
     return this.miHttpServicio.httpPost("eventos/TraerEventosProximos",body);
   }

   public TraerTodosLosEventosPorSalonApi(body : any)
   {
     return this.miHttpServicio.httpPost("eventos/TraerTodosLosEventosPorSalon",body);
   }
   //Falta hacer metodos de Borrar Y Finalizar

   public TraerEventoPorFechaActualApi(body : any)
   {
     return this.miHttpServicio.httpPost("eventos/TraerEventoPorFechaActual",body);
   }
   public FinalizarEventoApi(body : any)
   {
     return this.miHttpServicio.httpPost("eventos/FinalizarEvento",body);
   }
   //Fijarse si anda este metodo dsp
   public BorrarEventoApi(id_evento : any,body : any)
   {
     //return this.miHttpServicio.httpDelete("eventos/BorrarEvento/"+id_evento);
     return this.miHttpServicio.httpPost("eventos/BorrarEvento/"+id_evento,body);
   }
//Cambiar por Put
   public CancelarEventoApi(body : any)
   {
     return this.miHttpServicio.httpPost("eventos/CancelarEvento",body);
   }

   public TraerDatosExcelApi()
   {
     return this.miHttpServicio.httpGetPromise("eventos/TraerDatosExcel").then(
       data =>
       {
         return data;
       }
     ).catch(
       error =>{
         console.log(error);
       }
     )
   }

   public TraerDatosPDFApi()
   {
    return this.miHttpServicio.httpGetPromise("eventos/TraerDatosPDF").then(
      data =>
      {
        return data;
      }
    ).catch(
      error =>{
        console.log(error);
      }
    )
   }
}
