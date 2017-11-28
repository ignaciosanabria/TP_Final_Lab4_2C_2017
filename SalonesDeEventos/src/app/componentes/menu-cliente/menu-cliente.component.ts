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
   localStorage.removeItem("token");
   this.router.navigate(["/"]);
  }

  public Ir(url : string)
  {
    switch(url)
    {
      case 'CrearEvento':
      this.router.navigate(['/PrincipalCliente/CrearEvento']);
      break;
    }
  }
}
