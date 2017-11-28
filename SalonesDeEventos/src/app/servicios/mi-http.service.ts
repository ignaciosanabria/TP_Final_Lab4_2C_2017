import { Injectable } from '@angular/core';
import {Http ,Response, RequestOptions, Headers} from '@angular/http';
import 'rxjs/add/operator/toPromise';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class MiHttpService {

  apiRuta : string = "http://localhost/API_Final/";
  constructor(public http:Http) { }

  public httpGetPromise(url: string){
    
    
        return this.http
        .get(this.apiRuta+url)
        .toPromise()
        .then(this.extraerDatos)
        .catch(this.handleError);
      }

      private extraerDatos(resp:Response) {
      return resp.json() || {};
      }
    private handleError(error:Response | any) {
              return error;
           }

  public httpPost(url : string, body : any)
  {
   let headers = new Headers({ 'Content-Type': 'application/json' });
   let options = new RequestOptions({ headers: headers });   
   return this.http.post(this.apiRuta+url,body,options);
  }

}
