import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {MenuModule} from 'primeng/menu';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-menu-cliente',
  templateUrl: './menu-cliente.component.html',
  styleUrls: ['./menu-cliente.component.css']
})
export class MenuClienteComponent implements OnInit {
  private items: MenuItem[];
  activeItem: MenuItem;
  constructor(private route: ActivatedRoute,
    private router: Router) 
    { }

  ngOnInit() {
    this.items = [
      // {label: 'New', icon: 'fa-plus', url: 'http://www.primefaces.org/primeng'},
      // {label: 'Open', icon: 'fa-download', routerLink: ['/pagename']}
      // {label: 'Recent Files', icon: 'fa-download', routerLink: ['/pagename'], queryParams: {'recent': 'true'}}
  {label: 'Stats', icon: 'fa-bar-chart'},
  {label: 'Calendar', icon: 'fa-calendar'},
  {label: 'Documentation', icon: 'fa-book',url: 'http://www.primefaces.org/primeng'},
  {label: 'Support', icon: 'fa-support'},
  {label: 'Social', icon: 'fa-twitter'},
  {label: 'Salir', icon: 'fa-times-circle'}
  ];
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
    }
  }
}
