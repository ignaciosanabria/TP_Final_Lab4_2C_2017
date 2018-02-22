import { Component, OnInit, OnDestroy} from '@angular/core';
import {MesasService} from '../../servicios/mesas/mesas.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {AutService} from '../../servicios/aut.service';
@Component({
  selector: 'app-ver-evento-hoy-empleado',
  templateUrl: './ver-evento-hoy-empleado.component.html',
  styleUrls: ['./ver-evento-hoy-empleado.component.css']
})
export class VerEventoHoyEmpleadoComponent implements OnInit, OnDestroy {

  miMesasServicio : MesasService;
  
    ocultarMesas : boolean;
  
    mesas : Array<any>;
  
  
    idEvento: number;
    private sub: any;
    miServicioAut : AutService;
  
    constructor(servicioMesas : MesasService, private route: ActivatedRoute, private router : Router, servicioAut : AutService) {
      this.miMesasServicio = servicioMesas;
      this.ocultarMesas = true;
      this.miServicioAut = servicioAut;
     }
  
    ngOnInit() {
      this.sub = this.route.params.subscribe(params => {
        this.idEvento = +params['idEvento']; // (+) converts string 'id' to a number
  
        // In a real app: dispatch action to load the details here.
     });
     console.log(this.idEvento);
     let json = {"id_evento" : this.idEvento};
     this.miMesasServicio.TraerMesasPorElEvento(JSON.stringify(json)).subscribe(
      data =>
      {
        console.log(data);
        let respuesta = JSON.parse(data["_body"]);
        console.log(respuesta);
        this.mesas = respuesta.mesas;
        this.ocultarMesas = false;
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

    AbrirMesa(id_mesa : any)
    {
      let tokenString = localStorage.getItem("token");
      let tokenBien = this.miServicioAut.getTokenParam(tokenString);
      console.log("este es el token que viene bien: ");
      console.log(tokenBien);
      let cargo =  tokenBien["data"].cargo;
      if(cargo == "Recepcionista")
        {
          this.router.navigate(['/PrincipalRecepcionista/VerEventoHoyEmpleado',this.idEvento,'MiMesaEmpleado',id_mesa]);
        }
      else if(cargo == "Encargado")
        {
            // this.router.navigate(['/Principal/VerEventoHoyEmpleado/:idEvento/MiMesaEmpleado/:idMesa]);
            this.router.navigate(['/PrincipalEncargado/VerEventoHoyEmpleado',this.idEvento,'MiMesaEmpleado',id_mesa]);
        }
    }

}
