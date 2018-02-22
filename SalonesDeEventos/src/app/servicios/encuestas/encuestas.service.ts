import { Injectable } from '@angular/core';
import {ApiEncuestasService} from './api-encuestas.service';
@Injectable()
export class EncuestasService {

  miApiEncuesta : ApiEncuestasService;
  constructor(ApiEncuesta : ApiEncuestasService) {
    this.miApiEncuesta = ApiEncuesta;
   }

   public InsertarEncuesta(body : any)
   {
     return this.miApiEncuesta.InsertarEncuestaApi(body);
   }

   public seleccionarCantidadRespuesta1()
   {
     return this.miApiEncuesta.SeleccionarCantidadRespuesta1Api().then(
       data =>{
         return data;
       }
     ).catch(
       error =>
       {
         console.log(error);
       }
     );
   }

   public seleccionarCantidadRespuesta2()
   {
     return this.miApiEncuesta.SeleccionarCantidadRespuesta2Api().then(
       data =>{
         return data;
       }
     ).catch(
       error =>
       {
         console.log(error);
       }
     );
   }

   public seleccionarCantidadRespuesta3()
   {
     return this.miApiEncuesta.SeleccionarCantidadRespuesta3Api().then(
       data =>{
         return data;
       }
     ).catch(
       error =>
       {
         console.log(error);
       }
     );
   }

   public seleccionarCantidadRespuesta4()
   {
     return this.miApiEncuesta.SeleccionarCantidadRespuesta4Api().then(
       data =>{
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
