import { Injectable } from '@angular/core';
import {ApiSalonesService} from './api-salones.service';
@Injectable()
export class SalonesService {
  miServicioSalones : ApiSalonesService;
  constructor(ServicioSalones : ApiSalonesService) {
    this.miServicioSalones = ServicioSalones;
   }

   public TraerSalonesDisponibles(fecha : any)
   {
     return this.miServicioSalones.TraerSalonesDisponiblesApi(fecha);
   }

   public TraerCoordenadas()
   {
     return this.miServicioSalones.TraerCoordenadasSalonesApi().then(
       data => 
       {
         return data;
       }
     ).catch(
       error => {
         console.info(error);
       }
     );
   }

   public TraerLosDatosDelSalonYLaMesa(body : any)
   {
     return this.miServicioSalones.TraerLosDatosDelSalonYLaMesaApi(body);
   }

}
