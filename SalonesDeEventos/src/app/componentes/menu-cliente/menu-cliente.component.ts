import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-menu-cliente',
  templateUrl: './menu-cliente.component.html',
  styleUrls: ['./menu-cliente.component.css']
})
export class MenuClienteComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private router: Router) 
    { }

  ngOnInit() {
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
    }
  }
}
