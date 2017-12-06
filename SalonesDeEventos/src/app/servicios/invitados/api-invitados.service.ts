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


  //  public BorrarInvitadoEventoApi(id_invitado : any)
  //  {

  //  }
    

}
