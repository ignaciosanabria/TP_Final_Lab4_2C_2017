import { Component, OnInit } from '@angular/core';
import {InvitadosService} from '../../servicios/invitados/invitados.service';
import {MatTableModule} from '@angular/material/table';
import {MatTableDataSource} from '@angular/material';
import {DataListModule} from 'primeng/datalist';
import {TableModule} from 'primeng/table';
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


