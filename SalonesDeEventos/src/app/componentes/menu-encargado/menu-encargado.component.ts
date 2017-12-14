import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-menu-encargado',
  templateUrl: './menu-encargado.component.html',
  styleUrls: ['./menu-encargado.component.css']
})
export class MenuEncargadoComponent implements OnInit {
  
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

  ngOnInit() {
  }

}
