import { Injectable } from '@angular/core';
import {MiHttpService} from '../../servicios/mi-http.service';
@Injectable()
export class ApiEncuestasService {

  miHttpServicio : MiHttpService;
  constructor(httpServicio : MiHttpService) {
    this.miHttpServicio = httpServicio;
   }
   //Para la encuesta component

   public InsertarEncuestaApi(body : any)
   {
    return this.miHttpServicio.httpPost("encuestas/InsertarEncuesta",body);
   }

   //Lo que sigue se va a usar en las estadisticas

   public SeleccionarCantidadRespuesta1Api()
   {
     return this.miHttpServicio.httpGetPromise("encuestas/SeleccionarCantidadRespuesta1").then(
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

   public SeleccionarCantidadRespuesta2Api()
   {
    return this.miHttpServicio.httpGetPromise("encuestas/SeleccionarCantidadRespuesta2").then(
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

   public SeleccionarCantidadRespuesta3Api()
   {
    return this.miHttpServicio.httpGetPromise("encuestas/SeleccionarCantidadRespuesta3").then(
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

   public SeleccionarCantidadRespuesta4Api()
   {
    return this.miHttpServicio.httpGetPromise("encuestas/SeleccionarCantidadRespuesta4").then(
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

}
