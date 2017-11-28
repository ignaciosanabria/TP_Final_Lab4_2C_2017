import { Injectable } from '@angular/core';
import {ApiClientesService} from './api-clientes.service';
@Injectable()
export class ClientesService {
  
  miClientesServicio : ApiClientesService;
  constructor(ServicioClientes : ApiClientesService) {
    this.miClientesServicio = ServicioClientes;
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

}
