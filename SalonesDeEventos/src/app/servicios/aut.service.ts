import { Injectable } from '@angular/core';
import { AuthHttp, AuthConfig, tokenNotExpired, JwtHelper } from 'angular2-jwt';//Instalar angular2-jwt en mi proyecto
import { Router } from '@angular/router';

@Injectable()
export class AutService {

  public name: string;
  private _token: string;
  jwtHelper: JwtHelper = new JwtHelper();
  
  constructor( private router: Router ) {
    this._token = localStorage.getItem('token');
  }

  public isLogued()
  {
    try {
      // console.log( 'is logued', tokenNotExpired());
      let rta = tokenNotExpired() || false;
      return rta;
    } catch (error) {
      return false;
    }
  }

  public getToken ()
  {
    try {
      //console.log('getToekn', this.jwtHelper.decodeToken(this._token));
      return this.jwtHelper.decodeToken(this._token);
    } catch (error) {
      return undefined;
    }
  }

  //Metodo para decodificar Token por parametro
  public getTokenParam(token : string)
  {
    try {
      //console.log('getToekn', this.jwtHelper.decodeToken(this._token));
      return this.jwtHelper.decodeToken(token);
    } catch (error) {
      return undefined;
    }
  }

  public getExpirationDate()
  {
    
    try {
      console.log('getExpirationDate', this.jwtHelper.getTokenExpirationDate(this._token))
      return this.jwtHelper.getTokenExpirationDate(this._token);
    } catch (error) {
      return null;
    }
  }

  public logOut()
  {
    try {
      localStorage.setItem('token', null);
      this.router.navigate(['/']);
    } catch (error) {
      return false;
    }
  }

  public getNivel ()
  {
    // console.log(this.jwtHelper.decodeToken(this._token));
    if (this.jwtHelper.decodeToken(this._token).nivel || this.jwtHelper.decodeToken(this._token).nivel === 0)
      return this.jwtHelper.decodeToken(this._token).nivel;
    else
      return 1000;
    
  }
}
