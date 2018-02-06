import { Injectable } from '@angular/core';
import {ApiInvitadosService} from './api-invitados.service';
@Injectable()
export class InvitadosService {

   miApiInvitadosServicio : ApiInvitadosService;
   constructor(ServicioApiInvitado : ApiInvitadosService)
   {
     this.miApiInvitadosServicio = ServicioApiInvitado;
   }

   

   public ValidarInvitado(mail : any)
   {
     return this.miApiInvitadosServicio.ValidarInvitadoApi(mail);
   }


   public TraerInvitadosPorEventoMesa(eventoIdMesa : any)
   {
     return this.miApiInvitadosServicio.TraerInvitadosPorEventoMesaApi(eventoIdMesa);
   }

   public TraerNoInvitadosPorEvento(id_evento : any)
   {
     return this.miApiInvitadosServicio.TraerNoInvitadosPorEventoApi(id_evento);
   }

   public TraerTodosLosInvitados()
   {
     return this.miApiInvitadosServicio.TraerTodosLosInvitadosApi().then(
       data =>
       {
         return data;
       },
     ).catch(
       error => {
         console.log(error);
       }
     );
   }

   public BorrarInvitadoEvento(id_invitado : any, id_evento : any, id_mesa : any)
   {
     return this.miApiInvitadosServicio.BorrarInvitadoEventoApi(id_invitado,id_evento,id_mesa);
   }

   public InsertarInvitado(body : any)
   {
     return this.miApiInvitadosServicio.InsertarInvitadoApi(body);
   }

   public ModificarInvitado(body : any)
   {
     return this.miApiInvitadosServicio.ModificarInvitadoApi(body);
   }

   public TraerCantidadDeInvitadosPorMesa(body : any)
   {
     return this.miApiInvitadosServicio.TraerCantidadDeInvitadosPorMesaApi(body);
   }

   public InsertarInvitadoRegistrado(body : any)
   {
     return this.miApiInvitadosServicio.InsertarInvitadoRegistradoApi(body);
   }

   public TraerLaConfirmacionDeTodosLosInvitadosPorEventoMesa(body : any)
   {
     return this.miApiInvitadosServicio.TraerLaConfirmacionDeTodosLosInvitadosPorEventoMesaApi(body);
   }

   public CambiarConfirmacionInvitado(body : any)
   {
     return this.miApiInvitadosServicio.CambiarConfirmacionInvitadoApi(body);
   }

   public TraerCantidadDeInvitadosTraidosPorCliente()
   {
     return this.miApiInvitadosServicio.TraerCantidadDeInvitadosTraidosPorClienteApi().then(
       data =>{
         return data;
       }
     ).catch(
       error =>{
         console.log(error);
       }
     );
   }

}
