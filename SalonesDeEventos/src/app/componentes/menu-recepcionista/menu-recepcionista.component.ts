import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-menu-recepcionista',
  templateUrl: './menu-recepcionista.component.html',
  styleUrls: ['./menu-recepcionista.component.css']
})
export class MenuRecepcionistaComponent implements OnInit {
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
      case 'VerEventos':
      this.router.navigate(['/PrincipalRecepcionista/VerEventos']);
      break;
      case 'VerClientes':
      this.router.navigate(['/PrincipalRecepcionista/VerClientes']);
      break;
    }
  }
}
