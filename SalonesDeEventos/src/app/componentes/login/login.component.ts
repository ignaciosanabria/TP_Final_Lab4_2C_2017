import { Component, OnInit } from '@angular/core';
import {EmpleadosService} from '../../servicios/empleados/empleados.service';
import {ClientesService} from '../../servicios/clientes/clientes.service';
import {InvitadosService} from '../../servicios/invitados/invitados.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  public miEmpleadosService : EmpleadosService;
  public miClientesService : ClientesService;
  public miInvitadosService : InvitadosService;
  //Modificar Esto por Clases de TS
  public mailEmpleado : string;
  public claveEmpleado : string;
  public mailCliente : string;
  public claveCliente : string;
  ocultarEsperar : boolean;
  //Invitado
  mailInvitado : string;
  ocultarLoginInvitado : boolean;
  constructor(ServicioEmpleados : EmpleadosService, ServicioClientes : ClientesService,private route: ActivatedRoute,
    private router: Router, ServicioInvitados : InvitadosService) {
    this.miEmpleadosService = ServicioEmpleados;
    this.miClientesService = ServicioClientes;
    this.miInvitadosService = ServicioInvitados;
    this.miEmpleadosService.TraerEmpleados().then(
      data =>{
        console.log(data);
      }
    ).catch(
      error =>{
      console.log(error);
    });
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

  LoginEmpleado()
  {
    let empleado = {"mail" : this.mailEmpleado , "clave" : this.claveEmpleado};
    this.miEmpleadosService.ValidarEmpleado(JSON.stringify(empleado)).subscribe(
      data =>{
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }

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
        }
     },
     error => 
     {
       console.log(error);
     }
    );
  }

  TestAdmin()
  {
    this.mailEmpleado = "administrador@outlook.com";
    this.claveEmpleado = "1234";
  }

  TestCliente()
  {
   this.mailCliente = "maria_navarro@gmail.com";
   this.claveCliente = "maria1234";
  }

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

}
