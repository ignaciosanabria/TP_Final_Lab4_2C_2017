import { Component, OnInit } from '@angular/core';
import {EmpleadosService} from '../../servicios/empleados/empleados.service';
import {ClientesService} from '../../servicios/clientes/clientes.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  public miEmpleadosService : EmpleadosService;
  public miClientesService : ClientesService;
  //Modificar Esto por Clases de TS
  public mailEmpleado : string;
  public claveEmpleado : string;
  public mailCliente : string;
  public claveCliente : string;


  constructor(ServicioEmpleados : EmpleadosService, ServicioClientes : ClientesService) {
    this.miEmpleadosService = ServicioEmpleados;
    this.miClientesService = ServicioClientes;
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
    )
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
    this.miClientesService.ValidarCliente(JSON.stringify(cliente)).subscribe(
     data => 
     {
       console.log(data);
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

}
