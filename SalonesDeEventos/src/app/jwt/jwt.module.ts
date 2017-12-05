import { NgModule } from '@angular/core';
import { Http, RequestOptions } from '@angular/http';
import { AuthHttp, AuthConfig } from 'angular2-jwt';

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp(new AuthConfig(
    {
      headerName : 'Authorization',
      tokenName : 'token',
      noJwtError : false,
      tokenGetter: (() => localStorage.getItem('token')),
     // globalHeaders: [{'Content-Type':'application/json'}]
  }
  ), http, options);
}

/**
 * Configuracion basica del modulo angular2-jwt
 */
@NgModule({
  providers: [
    {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [Http, RequestOptions]
    }
  ]
})
export class JwtModule { }
