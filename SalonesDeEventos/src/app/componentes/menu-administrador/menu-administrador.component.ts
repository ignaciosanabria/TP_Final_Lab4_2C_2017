import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {AutService} from '../../servicios/aut.service';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';
@Component({
  selector: 'app-menu-administrador',
  templateUrl: './menu-administrador.component.html',
  styleUrls: ['./menu-administrador.component.css']
})
export class MenuAdministradorComponent implements OnInit {
  miServicioAut : AutService;
  id_empleado : number;

  constructor(private route: ActivatedRoute,
    private router: Router,servicioAut : AutService,private confirmationService: ConfirmationService) 
    { 
      this.miServicioAut = servicioAut;
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
        this.router.navigate(['/PrincipalAdministrador/VerEventos']);
        break;
        case 'VerClientes':
        this.router.navigate(['/PrincipalAdministrador/VerClientes']);
        break;
        case 'VerInvitados':
        this.router.navigate(['/PrincipalAdministrador/VerInvitados']);
        break;
        case 'VerEstadisticas':
        this.router.navigate(['/PrincipalAdministrador/VerEstadisticas']);
        break;
        case 'MisDatosEmpleado':
        this.router.navigate(['/PrincipalAdministrador/MisDatosEmpleado',this.id_empleado]);
        break;
      }
    }

    public ngOnInit()
    {
      let token = this.miServicioAut.getToken();
      this.id_empleado = token.data.id_empleado;
      // console.log(token.data.id_empleado);
    }


}
