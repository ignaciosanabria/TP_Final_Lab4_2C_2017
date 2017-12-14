import { Component, OnInit, Input} from '@angular/core';
import {InvitadosService} from '../../servicios/invitados/invitados.service';
import { Ng2SmartTableModule, LocalDataSource } from 'ng2-smart-table';
@Component({
  selector: 'app-mi-mesa-empleado',
  templateUrl: './mi-mesa-empleado.component.html',
  styleUrls: ['./mi-mesa-empleado.component.css']
})
export class MiMesaEmpleadoComponent implements OnInit {
  @Input() mesa : any;
  
    miServicioInvitados : InvitadosService;
  
    source: LocalDataSource;
  
    //Para el select Option - Seleccionar invitado que haya venido anteriormente
  
    invitadoElegido : any;
  
    invitadosRegistrados : Array<any>;
  
    cantidadInvitados : number;
  
    ocultarProceso : boolean;

    ocultarConfirmacion : boolean;

    ocultarLista : boolean;

    ocultarInvitados : boolean;

    ocultarSpinnerConfirmacion : boolean;

    invitadosConfirmados : Array<any>; //Array donde el recepcionista o encargado van a poder marcar si el invitado llego!
  
    constructor(servicioInvitados : InvitadosService) {
      this.miServicioInvitados = servicioInvitados;
      this.ocultarProceso = true;
      // this.miServicioInvitados.TraerInvitadosPorMesa()
      this.ocultarInvitados = true;
      this.ocultarLista = true;
      this.ocultarConfirmacion = false;
      this.ocultarSpinnerConfirmacion = true;
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
      let json = {"id_mesa" : this.mesa.id_mesa, "id_evento" : this.mesa.id_evento};
      this.miServicioInvitados.TraerCantidadDeInvitadosPorMesa(JSON.stringify(json)).subscribe(
        data =>{
          console.log(data);
          let respuesta3 = JSON.parse(data["_body"]);
          this.cantidadInvitados = respuesta3.cantidad;
          console.log(this.cantidadInvitados);
        },
        error =>{
          console.log(error);
        }
      );
    }
  
    public verInvitados()
    {
      console.log(this.mesa);
      // let mesa = JSON.parse(this.mesa);
      let json = {"id_mesa" : this.mesa.id_mesa, "id_evento" : this.mesa.id_evento};
      let json2 = {"id_evento" : this.mesa.id_evento};
      this.miServicioInvitados.TraerCantidadDeInvitadosPorMesa(JSON.stringify(json)).subscribe(
        data =>{
          console.log(data);
          let respuesta3 = JSON.parse(data["_body"]);
          this.cantidadInvitados = respuesta3.cantidad;
          console.log(this.cantidadInvitados);
        },
        error =>{
          console.log(error);
        }
      );
      //Traigo los invitados que estan en la mesa
      this.miServicioInvitados.TraerInvitadosPorEventoMesa(JSON.stringify(json)).subscribe(
        data=> {
          console.log(data);
          let respuesta = JSON.parse(data["_body"]);
          this.source = respuesta;
          //this.invitadosConfirmados = respuesta;
        },
        error => {
          console.log(error);
        }
      );
      //Traigo los invitados que no estan en el evento pero que estan registrados en la BD;
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
      );
      this.ocultarInvitados = false;
      //Traigo las confirmacion de los invitados!!
      this.miServicioInvitados.TraerLaConfirmacionDeTodosLosInvitadosPorEventoMesa(JSON.stringify(json)).subscribe(
        data =>
        {
          console.log(data);
          let respuesta = JSON.parse(data["_body"]);
          this.invitadosConfirmados = respuesta.invitados;
        },
        error =>{
          console.log(error);
        }
      );
    }
  
    cerrarLista()
    {
      this.ocultarInvitados = true;
    }
  
    onCreateConfirm(event)
    {
      if(this.cantidadInvitados < 10)
        {
      if (window.confirm('Estas seguro que queres agregar el invitado?')) {
        event.confirm.resolve(event.newData);
        event.newData["id_mesa"] = this.mesa.id_mesa;//Insercion de la mesa
        event.newData["id_evento"] = this.mesa.id_evento;//Insercion de evento 
        //console.log(event.newData);
        this.miServicioInvitados.InsertarInvitado(JSON.stringify(event.newData)).subscribe(
          data =>{
            console.log(data);
            let respuesta = JSON.parse(data["_body"]);
            if(respuesta.status == 200)
            {
              alert("Usted ha ingresado correctamente a la mesa!!");
              this.cantidadInvitados += 1; //Incremento en 1 la cantidad de invitados!!
  
            }
          },
          error =>
          {
            console.log(error);
          }
        );
        }  else {
          event.confirm.reject();
         }
       }
       else
        {
          alert("Ya superaste la cantidad maxima de invitados por mesa!!");
        }
    }
  
    onDeleteConfirm(event : any)
    {
      if (window.confirm('Estas seguro que queres borrar el invitado?')) {
        event.confirm.resolve();
        console.log(event);
        let json = {"id_invitado":event.data.id_invitado, "id_evento": this.mesa.id_evento, "id_mesa":this.mesa.id_mesa};
        this.miServicioInvitados.BorrarInvitadoEvento(json.id_invitado,json.id_evento,json.id_mesa).subscribe(
          data =>{
            console.log(data);
            let respuesta = JSON.parse(data["_body"]);
            if(respuesta.status == 200)
              {
                //alert("Usted ha borrado correctamente a un invitado de la mesa!!");
                this.ocultarProceso = false;
  
              }
              else
                {
                  alert("Ocurrio algo inesperado!!");
                }
          },
          error =>{
            console.log(error);
          }
        )
      }
      else
        {
          event.confirm.reject();
        }
    }
  
    onEditConfirm(event : any)
    {
      if (window.confirm('Estas seguro que queres modificar el invitado?')) {
        event.confirm.resolve();
        console.log(event);
        this.miServicioInvitados.ModificarInvitado(JSON.stringify(event.newData)).subscribe(
          data =>
          {
            let respuesta = JSON.parse(data["_body"]);
            if(respuesta.status == 200)
              {
                alert("Modificaste los datos de un usuario!");
              }
              else
                {
                  alert("ocurrio algo inesperado!");
                }
          },
          error =>
          {
          console.log(error);
          }
        )
      }
      else
        {
          event.confirm.reject();
        }
    }
  
    public addprop1(event, event1)
    {
      // console.log(event.target.checked);
      // console.log(event.target.value);
      if(event.target.checked == true)
        {
          event1.haAsistido = 1;
          //console.log(event1);
          let json = {"id_evento":this.mesa.id_evento, "id_mesa": this.mesa.id_mesa, "id_invitado": event1.id_invitado, "haAsistido": event1.haAsistido};
          console.log(json);
          this.ocultarConfirmacion = true;
          this.ocultarSpinnerConfirmacion = false;
          this.miServicioInvitados.CambiarConfirmacionInvitado(JSON.stringify(json)).subscribe(
            data =>{
              let respuesta = JSON.parse(data["_body"]);
              console.log(respuesta);
              if(respuesta.status == 200)
                {
                  var modelo=this;
                  setTimeout(function(){ 
                     modelo.ocultarConfirmacion = false;
                     modelo.ocultarSpinnerConfirmacion = true;
                  }, 3000);
                }
            },
            error =>{
              console.log(error);
            }
          );
        }
        else
        {
          event1.haAsistido = 0;
          let json = {"id_evento":this.mesa.id_evento, "id_mesa": this.mesa.id_mesa, "id_invitado": event1.id_invitado, "haAsistido": event1.haAsistido};
          console.log(json);
          this.ocultarConfirmacion = true;
          this.ocultarSpinnerConfirmacion = false;
          this.miServicioInvitados.CambiarConfirmacionInvitado(JSON.stringify(json)).subscribe(
            data =>{
              let respuesta = JSON.parse(data["_body"]);
              console.log(respuesta);
              if(respuesta.status == 200)
                {
                  var modelo=this;
                  setTimeout(function(){ 
                     modelo.ocultarConfirmacion = false;
                     modelo.ocultarSpinnerConfirmacion = true;
                  }, 3000);
                }
            },
            error =>{
              console.log(error);
            }
          );
        }
    }
  
    ElegirInvitado(invitadoParametro : any)
    {
     let invitado = JSON.parse(invitadoParametro);
     let json = {"id_invitado": invitado.id_invitado, "id_evento": this.mesa.id_evento, "id_mesa": this.mesa.id_mesa};
     this.miServicioInvitados.InsertarInvitadoRegistrado(JSON.stringify(json)).subscribe(
       data =>{
         console.log(data);
         let respuesta = JSON.parse(data["_body"]);
         if(respuesta.status == 200)
          {
             this.ocultarProceso = false;
             var modelo=this;
             setTimeout(function(){
              let json2 = {"id_evento": modelo.mesa.id_evento, "id_mesa": modelo.mesa.id_mesa};
              modelo.miServicioInvitados.TraerInvitadosPorEventoMesa(JSON.stringify(json)).subscribe(
                data=> {
                  console.log(data);
                  modelo.cantidadInvitados += 1;
                  let respuesta2 = JSON.parse(data["_body"]);
                  modelo.source = respuesta2;
                },
                error => {
                  console.log(error);
                }
              );
              modelo.ocultarProceso = true;
              }, 3000);
          }
       },
       error =>{
         console.log(error);
       }
     );
    }

    public verLista()
    {
      this.ocultarLista = false;
      this.ocultarConfirmacion = true;
    }

    public cerrarListaModificacion()
    {
      this.ocultarLista = true;
      this.ocultarConfirmacion = false;
    }

}
