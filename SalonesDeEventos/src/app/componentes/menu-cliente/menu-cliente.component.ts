import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {MenuModule} from 'primeng/menu';
import {MenuItem} from 'primeng/api';
import {AutService} from '../../servicios/aut.service';
@Component({
  selector: 'app-menu-cliente',
  templateUrl: './menu-cliente.component.html',
  styleUrls: ['./menu-cliente.component.css']
})
export class MenuClienteComponent implements OnInit {
  miServicioAut : AutService;
  id_cliente : number;

  constructor(private route: ActivatedRoute,
    private router: Router,servicioAut : AutService) 
    { 
      this.miServicioAut = servicioAut;
    }


  ngOnInit() {
    let token = this.miServicioAut.getToken();
    let tokenString = localStorage.getItem("token");
    let tokenBien = this.miServicioAut.getTokenParam(tokenString);
    console.log("este es el token que viene bien: ");
    console.log(tokenBien);
    this.id_cliente = token.data.id_cliente;
}

  public CerrarSesion()
  {
    let confirmar = confirm("Desea cerrar su sesion?");
    if(confirmar == true)
      {
        localStorage.removeItem("token");
        this.router.navigate(["/"]);
      }
  }

  public Ir(url : string)
  {
    switch(url)
    {
      case 'CrearEvento':
      this.router.navigate(['/PrincipalCliente/CrearEvento']);
      break;
      case 'EventosCliente':
      this.router.navigate(['/PrincipalCliente/EventosCliente']);
      break;
      // case 'Soporte':
      // this.router.navigate(['/PrincipalCliente/Soporte']);
      // break;
      case 'MisDatosCliente':
      this.router.navigate(['/PrincipalCliente/MisDatosCliente',this.id_cliente]);
      break;
    }
  }
}
