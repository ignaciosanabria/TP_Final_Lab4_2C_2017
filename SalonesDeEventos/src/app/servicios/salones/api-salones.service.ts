import { Injectable } from '@angular/core';
import {MiHttpService} from '../../servicios/mi-http.service';
@Injectable()
export class ApiSalonesService {

  miHttpServicio : MiHttpService;
  constructor(httpServicio : MiHttpService) {
    this.miHttpServicio = httpServicio;
   }

   public TraerSalonesDisponiblesApi(fecha : any)
   {
     return this.miHttpServicio.httpPost("salones/TraerSalonesDisponibles",fecha);
   }

   public TraerCoordenadasSalonesApi()
   {
     return this.miHttpServicio.httpGetPromise("salones/coordenadas").then(datos => {return datos;}).catch(error => {console.info(error)});
   }

   public TraerLosDatosDelSalonYLaMesaApi(body : any)
   {
     return this.miHttpServicio.httpPost("salones/TraerLosDatosDelSalonYLaMesa",body);
   }

}
