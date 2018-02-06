import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {AutService} from '../../servicios/aut.service';
import {EventosService} from '../../servicios/eventos/eventos.service';
@Component({
  selector: 'app-menu-encargado',
  templateUrl: './menu-encargado.component.html',
  styleUrls: ['./menu-encargado.component.css']
})
export class MenuEncargadoComponent implements OnInit {
  
  miServicioAut : AutService;
  miServicioEventos : EventosService;
  today = new Date();
  fechaActual : string = this.today.getDate() + '/' + (this.today.getMonth()+1)+ '/' + this.today.getFullYear();
  currentDate = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
  fechaMañana = this.currentDate.getDate() + '/' + (this.currentDate.getMonth()+1) + '/' + this.currentDate.getFullYear();
  eventoHoy : any;
  constructor(private route: ActivatedRoute,
    private router: Router, servicioAut : AutService, miServicioEventos : EventosService) 
    { 
     this.miServicioAut = servicioAut;
     this.miServicioEventos = miServicioEventos;
    }

  ngOnInit() {
     let token = this.miServicioAut.getToken();
     console.log(token);
     //let json = {"id_salon": token["data"].id_salon, "fecha_inicio": this.fechaActual, "fecha_fin": this.fechaMañana};
     this.fechaMañana = this.fechaActual;
     let json = {"id_salon": token["data"].id_salon, "fecha_inicio": this.fechaActual, "fecha_fin": this.fechaMañana};
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

    public Ir(url : string)
    {
      switch(url)
      {
        case 'VerEventoDeHoy':
        this.router.navigate(['/PrincipalEncargado/VerEventoHoyEmpleado',this.eventoHoy.id_evento]);
        break;
        case 'VerEventos':
        this.router.navigate(['/PrincipalEncargado/VerEventos']);
        break;
        case 'VerClientes':
        this.router.navigate(['/PrincipalEncargado/VerClientes']);
        break;
        case 'VerEstadisticas':
        this.router.navigate(['/PrincipalEncargado/VerEstadisticas']);
        break;
      }
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


}
