import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {AutService} from '../../servicios/aut.service';
import {EventosService} from '../../servicios/eventos/eventos.service';
import {DialogModule} from 'primeng/dialog';
@Component({
  selector: 'app-menu-recepcionista',
  templateUrl: './menu-recepcionista.component.html',
  styleUrls: ['./menu-recepcionista.component.css']
})
export class MenuRecepcionistaComponent implements OnInit {
  miServicioAut : AutService;
  miServicioEventos : EventosService;
  today = new Date();
  fechaActual : string = this.today.getDate() + '/' + (this.today.getMonth()+1)+ '/' + this.today.getFullYear();
  currentDate = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
  fechaMañana = this.currentDate.getDate() + '/' + (this.currentDate.getMonth()+1) + '/' + this.currentDate.getFullYear();
  eventoHoy : any;
  display : boolean;
  id_empleado : number;
  constructor(private route: ActivatedRoute,
    private router: Router, servicioAut : AutService, miServicioEventos : EventosService) 
    { 
     this.miServicioAut = servicioAut;
     this.miServicioEventos = miServicioEventos;
    }

  ngOnInit() {
     let token = this.miServicioAut.getToken();
     console.log(token);

     let tokenString = localStorage.getItem("token");
     let tokenBien = this.miServicioAut.getTokenParam(tokenString);
     console.log("este es el token que viene bien: ");
     console.log(tokenBien);
     //let json = {"id_salon": token["data"].id_salon, "fecha_inicio": this.fechaActual, "fecha_fin": this.fechaMañana};
     this.fechaMañana = this.fechaActual;
     let json = {"id_salon": tokenBien["data"].id_salon, "fecha_inicio": this.fechaActual, "fecha_fin": this.fechaMañana};
     this.id_empleado = tokenBien["data"].id_empleado;
     console.log(json);
     this.miServicioEventos.TraerEventoPorFechaActual(JSON.stringify(json)).subscribe(
       data =>{
         let respuesta = JSON.parse(data["_body"]);
         this.eventoHoy = respuesta.eventos[0]; //siempre va a ser el 0 ya que es el evento de hoy.
         console.log(this.eventoHoy);
       },
       error =>{
         console.log(error);
       }
     )
  }

  public CerrarSesion()
  {
    let confirmar = confirm("Desea cerrar su sesion?");
    if(confirmar == true)
      {
        localStorage.removeItem("token");
        this.router.navigate(["/LoginEmpleado"]);
      }
  }
   
  public Ir(url : string)
  {
    switch(url)
    {
      case 'VerEventos':
      this.router.navigate(['/PrincipalRecepcionista/VerEventos']);
      break;
      case 'VerClientes':
      this.router.navigate(['/PrincipalRecepcionista/VerClientes']);
      break;
      case 'VerEventoDeHoy':
      if(this.eventoHoy != undefined)
      {
      this.router.navigate(['/PrincipalRecepcionista/VerEventoHoyEmpleado',this.eventoHoy.id_evento]);
    }
    else
    {
      this.display = true;
    }
      break;
      case 'MisDatosEmpleado':
      this.router.navigate(['/PrincipalRecepcionista/MisDatosEmpleado',this.id_empleado]);
      break;
    }
  }
}
