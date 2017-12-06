import { Injectable } from '@angular/core';
import {MiHttpService} from '../../servicios/mi-http.service';
@Injectable()
export class ApiMesasService {

  miHttpServicio : MiHttpService;
  constructor(httpServicio : MiHttpService) {
    this.miHttpServicio = httpServicio;
   }


   public TraerMesasDeEventoApi(id_evento : any)
   {
     return this.miHttpServicio.httpPost('mesas/mesasDeEvento',id_evento);
   }

}
