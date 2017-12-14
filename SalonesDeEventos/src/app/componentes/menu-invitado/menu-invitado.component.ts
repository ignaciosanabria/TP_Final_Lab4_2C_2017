import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-menu-invitado',
  templateUrl: './menu-invitado.component.html',
  styleUrls: ['./menu-invitado.component.css']
})
export class MenuInvitadoComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private router: Router) {

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

  ngOnInit() {
  }

  Ir(url : string)
  {
    switch(url)
    {
      case 'Direcciones':
       this.router.navigate(['/PrincipalInvitado/Direcciones']);
    }
  }

}
