import { Component, OnInit } from '@angular/core';
import {ClientesService} from '../../servicios/clientes/clientes.service';
import {InvitadosService} from '../../servicios/invitados/invitados.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  public miClientesService : ClientesService;
  public miInvitadosService : InvitadosService;
  //Modificar Esto por Clases de TS
  public mailCliente : string;
  public claveCliente : string;
  ocultarEsperar : boolean;
  //Invitado
  mailInvitado : string;
  ocultarLoginInvitado : boolean;


  constructor(ServicioClientes : ClientesService,private route: ActivatedRoute,
    private router: Router, ServicioInvitados : InvitadosService) {
    this.miClientesService = ServicioClientes;
    this.miInvitadosService = ServicioInvitados;
    this.mailCliente = "";
    this.claveCliente = "";
    this.mailInvitado = "";
    this.miClientesService.TraerClientes().then(
      data=>
      {
        console.log(data);
      }
    ).catch(
      error => 
      {
        console.log(error);
      }
    );
    this.ocultarEsperar = true;
    this.ocultarLoginInvitado = true;
   }

  ngOnInit() {
  }

  //La parte del Cliente

  LoginCliente()
  {
    let cliente = {"mail" : this.mailCliente, "clave" : this.claveCliente};
    //console.log(cliente);
    this.ocultarEsperar = false;
    this.miClientesService.ValidarCliente(JSON.stringify(cliente)).subscribe(
     data => 
     {
       console.log(data);
       let respuesta = JSON.parse(data["_body"]);
       if(respuesta.status == 200)
         {
       if(respuesta.token)
         {
           localStorage.setItem("token",respuesta.token);
           this.router.navigate(['/PrincipalCliente']);
         }
       }
       else
        {
          alert("Mail o clave incorrecta. Revise sus datos!");
          this.ocultarEsperar = true;
        }
     },
     error => 
     {
       console.log(error);
     }
    );
  }


  TestCliente()
  {
   this.mailCliente = "maria_navarro@gmail.com";
   this.claveCliente = "maria1234";
  }

  //La parte del Invitado!

  cerrarFormularioInvitado()
  {
    this.ocultarLoginInvitado = true;
  }

  mostrarFormularioInvitado()
  {
    this.ocultarLoginInvitado = false;
  }

  LoginInvitado()
  {
    console.log(this.mailInvitado);
    let json = {"mail" : this.mailInvitado};
    this.miInvitadosService.ValidarInvitado(JSON.stringify(json)).subscribe(
    data => {
      console.log(data);
      let respuesta = JSON.parse(data["_body"]);
      if(respuesta.status == 200)
        {
         if(respuesta.token)
          {
            localStorage.setItem('token',respuesta.token);
            this.router.navigate(['/PrincipalInvitado']);
          }
        }
      else
        {
          alert("Error. No existe un invitado con ese mail!");
        }
    },
    error => {
      console.log(error);
    }
    );
  }
  TestInvitado()
  {
    this.mailInvitado = "john_aguirre@outlook.com";
  }

  addprop1(event : any)
  {
    if(event.target.checked == true)
    {
    console.log(event);
    localStorage.setItem("recordar",event.target.checked.toString());
    localStorage.setItem("usuario",this.mailCliente);
    }
    else
      {
        console.log("Desmarco!");
        localStorage.removeItem("usuario");
        localStorage.setItem("recordar",event.target.checked.toString());
      }
  }

}
