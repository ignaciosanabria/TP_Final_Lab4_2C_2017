import { Injectable } from '@angular/core';
import {ApiClientesService} from './api-clientes.service';
@Injectable()
export class ClientesService {
  
  miClientesServicio : ApiClientesService;
  constructor(ServicioClientes : ApiClientesService) {
    this.miClientesServicio = ServicioClientes;
   }

   public TraerClientePorId(idCliente : number)
   {
     return this.miClientesServicio.TraerClientePorIdApi(idCliente).then(
       data =>{
         return data;
       }
     ).catch(
       error =>
       {
         console.info(error);
       }
     );
   }

   public TraerClientes()
   {
     return this.miClientesServicio.TraerClientesApi().catch(
       data =>
       {
         return data;
       }
     ).catch(
       error => {
         console.log(error);
       }
     );
   }

   public ValidarCliente(body : any)
   {
     return this.miClientesServicio.ValidarClienteApi(body);
   }

   public RegistrarCliente(body : any)
   {
     return this.miClientesServicio.RegistrarClienteApi(body);
   }

   public TraerFotosCliente(id_cliente : any)
   {
     return this.miClientesServicio.TraerFotosClienteApi(id_cliente).then(
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
