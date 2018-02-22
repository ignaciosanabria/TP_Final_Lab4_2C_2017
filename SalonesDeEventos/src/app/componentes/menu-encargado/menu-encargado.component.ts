import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {AutService} from '../../servicios/aut.service';
import {EventosService} from '../../servicios/eventos/eventos.service';
import {DialogModule} from 'primeng/dialog';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';
@Component({
  selector: 'app-menu-encargado',
  templateUrl: './menu-encargado.component.html',
  styleUrls: ['./menu-encargado.component.css']
})
export class MenuEncargadoComponent implements OnInit {
  
  miServicioAut : AutService;
  miServicioEventos : EventosService;
  today = new Date();
  currentDate = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
  fechaMañana = this.currentDate.getDate() + '/' + (this.currentDate.getMonth()+1) + '/' + this.currentDate.getFullYear();
  eventoHoy : any;
  display : boolean;
  id_empleado : number;
  fechaActual : any;
  constructor(private route: ActivatedRoute,
    private router: Router, servicioAut : AutService, miServicioEventos : EventosService) 
    { 
     this.miServicioAut = servicioAut;
     this.miServicioEventos = miServicioEventos;
    }

  ngOnInit() {

    this.fechaActual = new Date();
    let mesString = "";
    let minutosString = "";
    let mes = (this.fechaActual.getMonth()+1);
    let minutos = this.fechaActual.getMinutes();
    if(mes < 10)
    {
      mesString = (String("00" + mes).slice(-2)); //Para que el mes sea en formato MM/DD/YYYY
    }
    else
    {
      mesString = mes.toString();
    }
    if(minutos < 10)
      {
        minutosString = (String("00" + minutos).slice(-2))
      }
      else
      {
      minutosString = minutos.toString();
      }
    console.log(mes);
     let formato = this.fechaActual.getDate()+"/"+mesString+"/"+this.fechaActual.getFullYear()+" "+this.fechaActual.getHours()+":"+minutosString;
     let tokenString = localStorage.getItem("token");
     let tokenBien = this.miServicioAut.getTokenParam(tokenString);
     console.log("este es el token que viene bien: ");
     console.log(tokenBien);
     this.fechaMañana = this.fechaActual;
     this.id_empleado = tokenBien["data"].id_empleado;
     let json = {"id_salon": tokenBien["data"].id_salon, "fecha_inicio": formato};
     console.log(json);
     this.miServicioEventos.TraerEventoPorFechaActual(JSON.stringify(json)).subscribe(
       data =>{
         console.log(data);
         let respuesta = JSON.parse(data["_body"]);
         this.eventoHoy = respuesta.eventos[0]; //siempre va a ser el 0 ya que es el evento de hoy.
         console.log(this.eventoHoy);
       },
       error =>{
         console.log(error);
       }
     );
  }

    public Ir(url : string)
    {
      switch(url)
      {
        case 'VerEventoDeHoy':
        if(this.eventoHoy != undefined)
          {
        this.router.navigate(['/PrincipalEncargado/VerEventoHoyEmpleado',this.eventoHoy.id_evento]);
          }
          else
          {
            this.display = true;
          }
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
        case 'MisDatosEmpleado':
        this.router.navigate(['/PrincipalEncargado/MisDatosEmpleado',this.id_empleado]);
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
