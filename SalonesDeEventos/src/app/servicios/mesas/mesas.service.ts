import { Injectable } from '@angular/core';
import {ApiMesasService} from './api-mesas.service';
@Injectable()
export class MesasService {
 
  miApiMesasServicio : ApiMesasService;
  constructor(servicioMesas : ApiMesasService)
  { 
    this.miApiMesasServicio = servicioMesas;
  }

  public TraerMesasPorElEvento(id_evento : any)
  {
    return this.miApiMesasServicio.TraerMesasDeEventoApi(id_evento);
  }

}
