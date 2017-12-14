import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-menu-administrador',
  templateUrl: './menu-administrador.component.html',
  styleUrls: ['./menu-administrador.component.css']
})
export class MenuAdministradorComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private router: Router) 
    { }

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
      }
    }

    public ngOnInit()
    {
    }


}
