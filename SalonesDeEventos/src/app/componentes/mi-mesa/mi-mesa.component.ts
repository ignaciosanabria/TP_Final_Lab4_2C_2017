import { Component, OnInit, Input} from '@angular/core';
import {InvitadosService} from '../../servicios/invitados/invitados.service';
import { Ng2SmartTableModule, LocalDataSource } from 'ng2-smart-table';
@Component({
  selector: 'app-mi-mesa',
  templateUrl: './mi-mesa.component.html',
  styleUrls: ['./mi-mesa.component.css']
})
export class MiMesaComponent implements OnInit {
  
  @Input() mesa : any;

 ocultarInvitados : boolean;

  miServicioInvitados : InvitadosService;

  source: LocalDataSource;

  //Para el select Option - Seleccionar invitado que haya venido anteriormente

  invitadoElegido : any;

  invitadosRegistrados : Array<any>;

  constructor(servicioInvitados : InvitadosService) {
    this.miServicioInvitados = servicioInvitados;
    // this.miServicioInvitados.TraerInvitadosPorMesa()
    this.ocultarInvitados = true;
  }

  settings = { 
    columns: {
    nombre : {
      title: 'NOMBRE',
      filter: false
    },
    apellido: {
     title : 'APELLIDO',
     filter : false
    },
    nro_doc: {
      title: "NRO_DOCUMENTO",
      filter: false
    },
    mail :{
      title: "MAIL",
      filter : false
    }
  },
      edit: {
        confirmSave: true,
      },
      add: {
        confirmCreate: true,
      },
      delete: {
        confirmDelete: true,
      }
  };

  ngOnInit() {
    // console.log(this.mesa);
    // let mesa = JSON.parse(this.mesa);
    // let json = {"id_mesa" : mesa.id_mesa};
  }

  public verInvitados()
  {
    console.log(this.mesa);
    let mesa = JSON.parse(this.mesa);
    let json = {"id_mesa" : mesa.id_mesa, "id_evento" : mesa.id_evento};
    let json2 = {"id_evento" : mesa.id_evento};
    this.miServicioInvitados.TraerInvitadosPorEventoMesa(JSON.stringify(json)).subscribe(
      data=> {
        console.log(data);
        let respuesta = JSON.parse(data["_body"]);
        this.source = respuesta;
      },
      error => {
        console.log(error);
      }
    );
    this.miServicioInvitados.TraerNoInvitadosPorEvento(JSON.stringify(json2)).subscribe(
      data => {
        console.log(data);
        let respuesta = JSON.parse(data["_body"]);
        this.invitadosRegistrados = respuesta;
      },
      error =>
      {
        console.log(error);
      }
    )
    this.ocultarInvitados = false;
  }

  cerrarLista()
  {
    this.ocultarInvitados = true;
  }

  onCreateConfirm(event)
  {
    if (window.confirm('Estas seguro que queres agregar el invitado?')) {
      event.confirm.resolve(event.newData);
      console.log(event)
    } else {
      event.confirm.reject();
    }
  }

  onDeleteConfirm(event : any)
  {
    if (window.confirm('Estas seguro que queres borrar el invitado?')) {
      event.confirm.resolve();
      console.log(event);
    }
    else
      {

      }
  }

  onEditConfirm(event : any)
  {
    if (window.confirm('Estas seguro que queres modificar el invitado?')) {
      event.confirm.resolve();
      console.log(event);
    }
    else
      {
        
      }
  }

  ElegirInvitado(invitado : any)
  {
    console.log(invitado);
    console.info(this.source);
    this.onCreateConfirm(invitado);
  }

}
