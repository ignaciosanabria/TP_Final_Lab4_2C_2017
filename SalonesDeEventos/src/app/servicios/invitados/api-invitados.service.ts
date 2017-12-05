import { Injectable } from '@angular/core';
import {MiHttpService} from '../../servicios/mi-http.service';

@Injectable()
export class ApiInvitadosService {

  miHttpServicio : MiHttpService;
  constructor(httpServicio : MiHttpService) {
    this.miHttpServicio = httpServicio;
   }

   public ValidarInvitadoApi(mail : any)
   {
     return this.miHttpServicio.httpPost("invitados/",mail);
   }
    

}
