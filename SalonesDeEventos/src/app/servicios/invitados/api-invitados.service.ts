import { Injectable } from '@angular/core';
import {MiHttpService} from '../../servicios/mi-http.service';

@Injectable()
export class ApiInvitadosService {

  miHttpServicio : MiHttpService;
  constructor(httpServicio : MiHttpService) {
    this.miHttpServicio = httpServicio;
   }

   public TraerTodosLosInvitadosApi()
   {
     return this.miHttpServicio.httpGetPromise('invitados/').then(data =>
    {
      return data;
    }).catch(
      error => {
        console.log(error);
      }
    );
   }

   public ValidarInvitadoApi(mail : any)
   {
     return this.miHttpServicio.httpPost("invitados/",mail);
   }


   public TraerInvitadosPorEventoMesaApi(eventoIdMesa : any)
   {
     return this.miHttpServicio.httpPost("invitados/TraerInvitadosPorEventoMesa",eventoIdMesa);
   }


   public TraerNoInvitadosPorEventoApi(id_evento : any)
   {
     return this.miHttpServicio.httpPost("invitados/TraerNoInvitadosPorEvento",id_evento);
   }


   public BorrarInvitadoEventoApi(id_invitado : any, id_evento : any, id_mesa : any)
   {
     return this.miHttpServicio.httpDelete("invitados/BorrarInvitadoEvento/"+id_invitado+"/"+id_evento+"/"+id_mesa);
   }

   public InsertarInvitadoApi(body : any)
   {
     return this.miHttpServicio.httpPost("invitados/InsertarInvitado",body);
   }

   public ModificarInvitadoApi(body : any)
   {
     return this.miHttpServicio.httpPut("invitados/ModificarInvitado",body);
   }

   public TraerCantidadDeInvitadosPorMesaApi(body : any)
   {
     return this.miHttpServicio.httpPost("invitados/TraerCantidadDeInvitadosPorMesa",body);
   }
   
   public InsertarInvitadoRegistradoApi(body : any)
   {
     return this.miHttpServicio.httpPost("invitados/InsertarInvitadoRegistrado",body);
   }

   public TraerLaConfirmacionDeTodosLosInvitadosPorEventoMesaApi(body : any)
   {
     return this.miHttpServicio.httpPost("invitados/TraerLaConfirmacionDeTodosLosInvitadosPorEventoMesa",body);
   }

   public CambiarConfirmacionInvitadoApi(body : any)
   {
     return this.miHttpServicio.httpPut("invitados/CambiarConfirmacionInvitado",body);
   }

   public TraerCantidadDeInvitadosTraidosPorClienteApi()
   {
     return this.miHttpServicio.httpGetPromise("invitados/TraerCantidadDeInvitadosTraidosPorCliente").then(
       data =>
       {
         return data;
       }
     ).catch(
       error =>{
         console.log(error);
       }
     );
   }

}
