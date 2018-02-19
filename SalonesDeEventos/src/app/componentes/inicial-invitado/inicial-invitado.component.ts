import { Component, OnInit } from '@angular/core';
import {AutService} from '../../servicios/aut.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {InvitadosService} from '../../servicios/invitados/invitados.service';
@Component({
  selector: 'app-inicial-invitado',
  templateUrl: './inicial-invitado.component.html',
  styleUrls: ['./inicial-invitado.component.css']
})
export class InicialInvitadoComponent implements OnInit {

  miAutServicio : AutService;
  today = new Date();
  fechaActual : string = this.today.getDate() + '/' + (this.today.getMonth()+1)+ '/' + this.today.getFullYear();
  miServicioInvitado : InvitadosService;
  nombreInvitado : string = "";
  espacios : Array<any>;
  constructor(servicioAut : AutService,private route: ActivatedRoute,
    private router: Router, servicioInvitados : InvitadosService) {
    this.miAutServicio = servicioAut;
    this.miServicioInvitado = servicioInvitados;
    console.log(this.miAutServicio.getToken());
    console.log(this.fechaActual);
    let token = this.miAutServicio.getToken();
    this.nombreInvitado = token["data"].nombre;
    console.log(this.nombreInvitado);
    this.espacios = new Array<any>();
    this.espacios.length = 19;
   }

  ngOnInit() {
    // var modelo=this;
    // setTimeout(function(){ 
    //   modelo.router.navigate(['/PrincipalInvitado/Direcciones']);
    //  }, 3000);
  }

}
