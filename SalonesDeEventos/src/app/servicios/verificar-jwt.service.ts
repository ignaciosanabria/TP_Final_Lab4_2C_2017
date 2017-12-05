import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Router }  from '@angular/router';
import { AutService } from './aut.service';
@Injectable()
export class VerificarJWTService implements CanActivate {
 //CanActivate si lo
  constructor( private router: Router, private auth: AutService ) {
    console.log('isLogued()', auth.isLogued());
  }
  //Hace lo que quieras - devuelve true deja pasar a la persona, si es false no lo deja pasar
  //Es como la cerradura de una puerta..
  //Puedo tener distintos canActivate si quiero
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Promise<boolean> {

      // 
        let url: string = state.url;
        console.log('url dentro de canActivate', url);
        console.log(route);
        console.log(state);

        if ( this.auth.isLogued() )
        {
          return true;
        }
        else
        {
          this.router.navigate(['/error']);
          // this.router.navigate(['/pages/forms/inputs']);
          return !true;
        }
  }
}
