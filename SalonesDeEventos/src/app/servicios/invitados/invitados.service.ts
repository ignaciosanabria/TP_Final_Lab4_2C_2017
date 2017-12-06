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

}
