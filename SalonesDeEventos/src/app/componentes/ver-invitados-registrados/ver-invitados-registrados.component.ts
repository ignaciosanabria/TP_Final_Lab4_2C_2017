import { Component, OnInit } from '@angular/core';
import {InvitadosService} from '../../servicios/invitados/invitados.service';
@Component({
  selector: 'app-ver-invitados-registrados',
  templateUrl: './ver-invitados-registrados.component.html',
  styleUrls: ['./ver-invitados-registrados.component.css']
})
export class VerInvitadosRegistradosComponent implements OnInit {
  
  miInvitadosServicio : InvitadosService;
  invitados : Array<any>;
  constructor(ServicioInvitados : InvitadosService) {
    this.miInvitadosServicio = ServicioInvitados;
    this.miInvitadosServicio.TraerTodosLosInvitados().then(
      data =>
      {
        console.log(data);
        this.invitados = data;
      }
    ).catch(
      error => 
      {
        console.log(error);
      }
    )
   }

  ngOnInit() {
  }

}
