import { Component, OnInit } from '@angular/core';
import {EmpleadosService} from '../../servicios/empleados/empleados.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-login-empleado',
  templateUrl: './login-empleado.component.html',
  styleUrls: ['./login-empleado.component.css']
})
export class LoginEmpleadoComponent implements OnInit {

  public miEmpleadosService : EmpleadosService;
  public ocultarEsperarEmpleado : boolean;
  public mailEmpleado : string;
  public claveEmpleado : string;

  constructor(ServicioEmpleados : EmpleadosService,private route: ActivatedRoute,
    private router: Router) { 
      this.miEmpleadosService = ServicioEmpleados;
      this.mailEmpleado = "";
      this.claveEmpleado = "";
      this.miEmpleadosService.TraerEmpleados().then(
        data =>{
          console.log(data);
        }
      ).catch(
        error =>{
        console.log(error);
      });
      this.ocultarEsperarEmpleado = true;
    }

  ngOnInit() {
  }

  LoginEmpleado()
  {
    this.ocultarEsperarEmpleado = false;
    let empleado = {"mail" : this.mailEmpleado , "clave" : this.claveEmpleado};
    this.miEmpleadosService.ValidarEmpleado(JSON.stringify(empleado)).subscribe(
      data =>{
        console.log(data);
        let respuesta = JSON.parse(data["_body"]);
        if(respuesta.status == 200)
          {
           if(respuesta.token)
            {
              localStorage.setItem('token',respuesta.token);
              switch(respuesta.cargo)
              {
              case "Recepcionista":
                this.router.navigate(['/PrincipalRecepcionista']);
                break;
              case "Encargado":
                this.router.navigate(['/PrincipalEncargado']);
                break;
              case "Administrador":
                this.router.navigate(['/PrincipalAdministrador']);
                break;
            }
          }
        }
        else
          {
            alert("Error. No existe un invitado con ese mail!");
            this.ocultarEsperarEmpleado = true;
          }
      },
      error => {
        console.log(error);
      }
    );
  }

  TestAdmin()
  {
    this.mailEmpleado = "administrador@outlook.com";
    this.claveEmpleado = "1234";
  }

  TestRecepcionista()
  {
    this.mailEmpleado = "fernando_g@gmail.com";
    this.claveEmpleado = "boca1234";
  }
  TestEncargado(){
   this.mailEmpleado = "matiasrodriguez@hotmail.com";
   this.claveEmpleado = "holasoymati12";
  }

}
