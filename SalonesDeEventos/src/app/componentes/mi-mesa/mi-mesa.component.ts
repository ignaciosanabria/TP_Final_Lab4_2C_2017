import { Component, OnInit, Input, OnDestroy} from '@angular/core';
import {InvitadosService} from '../../servicios/invitados/invitados.service';
import { Ng2SmartTableModule, LocalDataSource } from 'ng2-smart-table';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {DialogModule} from 'primeng/dialog';
import {Validators, FormBuilder, FormControl, FormGroup, EmailValidator} from '@angular/forms';
import {Message} from 'primeng/components/common/api';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';
@Component({
  selector: 'app-mi-mesa',
  templateUrl: './mi-mesa.component.html',
  styleUrls: ['./mi-mesa.component.css']
})
export class MiMesaComponent implements OnInit, OnDestroy {
  
  @Input() mesa : any;

 ocultarInvitados : boolean;

  miServicioInvitados : InvitadosService;

  source: LocalDataSource;

  //Para el select Option - Seleccionar invitado que haya venido anteriormente

  invitadoElegido : any;

  invitadosRegistrados : Array<any>;

  cantidadInvitados : number;

  //Este es el cambio de ruteo de Ver Eventos -- Mi Mesa
  idEvento: number;
  private sub: any;
  idMesa : number;
  invitados : Array<any>;
  display : boolean;
  ocultarTabla : boolean;
  msgs: Message[] = [];
  ocultarProceso : boolean;
  invitadoModificar : any; //invitado a ser modificado en el caso que sea necesario
  display2 : boolean; //2do Dialog de Modificar Form
   //Este es el cambio por el formulario de Ingresar Nuevo Invitado
  public registroNombre : FormControl = new FormControl("",[Validators.required, Validators.minLength(4)]);
  public registroMail : FormControl = new FormControl("",[Validators.required, Validators.minLength(10), Validators.maxLength(80), Validators.email]); //(?=.*\d)(?=.*[a-zA-Z])
  public registroApellido : FormControl = new FormControl("",[Validators.required, Validators.minLength(4)]);
  public registroNroDoc : FormControl = new FormControl("",[Validators.required,Validators.minLength(7),Validators.maxLength(9)]);
  public registroForm : FormGroup;



  constructor(servicioInvitados : InvitadosService, private route: ActivatedRoute,
    private router: Router, private builder : FormBuilder,private confirmationService: ConfirmationService) {
    this.miServicioInvitados = servicioInvitados;
    this.ocultarProceso = true;
    // this.miServicioInvitados.TraerInvitadosPorMesa()
    this.ocultarInvitados = true;
    this.ocultarTabla = false;
    this.CreateForm();
  }
  public CreateForm() : void
  {
  this.registroForm = this.builder.group({
    'registroMail' : this.registroMail,
    'registroNombre' : this.registroNombre,
    'registroApellido' : this.registroApellido,
    'registroNroDoc' : this.registroNroDoc,
  });
  }
//Cambios para la lista de invitados de mi cliente de la mesa donde pidio la mesa

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.idEvento = +params['idEvento']; // (+) converts string 'id' to a number
      this.idMesa = + params['idMesa'];
      // In a real app: dispatch action to load the details here.
   });
    console.log(this.idEvento);
    console.log(this.idMesa);
    let json = {"id_mesa" : this.idMesa, "id_evento" : this.idEvento};
    let json2 = {"id_evento" : this.idEvento};
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
        //this.source = respuesta;
        this.invitados = respuesta;
        console.log(this.invitados);
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
  }

  ngOnDestroy()
  {
    this.sub.unsubscribe();
  }  
  

  AgregarInvitado()
  {
    this.display = true;
  }

  //Vuelve para la pagina de las mesas
  VolverAtras()
  {
    this.router.navigate(['/PrincipalCliente/VerMesas',this.idEvento]);
    
  }


  ConfirmarAgregarInvitado()
  {
    //let json = {};
   this.ocultarProceso = false;
   this.ocultarTabla = true;
   let nombre = this.registroForm.get("registroNombre").value;
   let apellido = this.registroForm.get("registroApellido").value;
   let mail = this.registroForm.get("registroMail").value;
   let nro_doc = this.registroForm.get("registroNroDoc").value;
   let json = {"nombre":nombre,"apellido":apellido,"mail":mail,"nro_doc":nro_doc,"id_mesa":this.idMesa,"id_evento":this.idEvento};
   //Inserto el invitado
   this.miServicioInvitados.InsertarInvitado(JSON.stringify(json)).subscribe(
    data =>{
      console.log(data);
      let respuesta = JSON.parse(data["_body"]);
      if(respuesta.status == 200)
      {
        this.msgs = [];
        this.msgs.push({severity:'info', summary:'Exito', detail: 'Se proceso tu invitado!'});
      }
      else if(respuesta.status == 400)
      {
        this.msgs = [];
        this.msgs.push({severity:'info', summary:'Fracaso', detail: 'No pudimos procesar tu invitado!'});
      }
      else if(respuesta.status == 401)
        {
          this.msgs = [];
          this.msgs.push({severity:'info', summary:'Fracaso', detail: 'Ocurrio un error interno y no pudimos asignar tu invitado a tu evento!'});
        }
    },
    error =>
    {
      console.log(error);
    }
  );
  this.ocultarProceso = true;
  this.display = false;
  this.msgs = [];
  //this.msgs = [];
  //Actualizo la tabla 
    var modelo=this;
    setTimeout(function(){ 
    let json3 = {"id_mesa":modelo.idMesa, "id_evento" : modelo.idEvento};
      modelo.miServicioInvitados.TraerInvitadosPorEventoMesa(JSON.stringify(json3)).subscribe(
      data=> {
        console.log(data);
        let respuesta = JSON.parse(data["_body"]);
        modelo.invitados = respuesta;
        console.log(this.invitados);
        modelo.ocultarTabla = false;
      },
      error => {
        console.log(error);
      }
    );
     }, 4000);
  }
 

  BorrarInvitado(id_invitado : any)
  {
    console.log(id_invitado);
   this.confirmationService.confirm({
    message: 'Desea borrar este invitado?',
    header: 'Borrar',
    icon: 'fa fa-question-circle',
    accept: () => {
      this.ocultarTabla = true;
       let json = {"id_invitado":id_invitado, "id_evento": this.idEvento, "id_mesa":this.idMesa};
   this.miServicioInvitados.BorrarInvitadoEvento(json.id_invitado,json.id_evento,json.id_mesa).subscribe(
     data =>{
       console.log(data);
       let respuesta = JSON.parse(data["_body"]);
       if(respuesta.status == 200)
         {
           //alert("Usted ha borrado correctamente a un invitado de la mesa!!");
         }
         else
           {
             alert("Ocurrio algo inesperado!!");
           }
     },
     error =>{
       console.log(error);
     }
   );
   var modelo=this;
   setTimeout(function(){ 
   let json3 = {"id_mesa":modelo.idMesa, "id_evento" : modelo.idEvento};
     modelo.miServicioInvitados.TraerInvitadosPorEventoMesa(JSON.stringify(json3)).subscribe(
     data=> {
       console.log(data);
       let respuesta = JSON.parse(data["_body"]);
       modelo.invitados = respuesta;
       console.log(modelo.invitados);
       modelo.ocultarTabla = false;
     },
     error => {
       console.log(error);
     }
   );
    }, 4000);

    },
    reject: () => {
    }
    });
  }

  ModificarInvitado(invitado : any)
  {
    console.log(invitado);
    this.invitadoModificar = invitado;
    this.display2 = true;
  // this.miServicioInvitados.ModificarInvitado(JSON.stringify(event.newData)).subscribe(
  //   data =>
  //   {
  //     let respuesta = JSON.parse(data["_body"]);
  //     if(respuesta.status == 200)
  //       {
  //         alert("Modificaste los datos de un usuario!");
  //       }
  //       else
  //         {
  //           alert("ocurrio algo inesperado!");
  //         }
  //   },
  //   error =>
  //   {
  //   console.log(error);
  //   }
  // );
  }
  ConfirmarModificarInvitado()
  {
    console.log(this.invitadoModificar);
  }









//Todo lo que esta abajo es parte de la interfaz que era un app-mi-boton 

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

  public addprop1(event)
  {
    console.log(event);
    console.log(event.target.checked);
    console.log(event.target.value);
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
            }, 3000)
        }
     },
     error =>{
       console.log(error);
     }
   );
  }

}
