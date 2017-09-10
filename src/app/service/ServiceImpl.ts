/**
 * Created by ecancil on 9/9/17.
 */
import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ServiceImpl implements IService
{
  constructor(private http:Http) {
  }


  callService(endpoint:string, httpMethod:HTTPMethod, payload?:any):Promise<any>{
      let promise = new Promise((resolve, reject) => {
          let internalPromise;
          switch(httpMethod){
            case HTTPMethod.GET:
              internalPromise = this.http.get(endpoint).toPromise();
              break;
            case HTTPMethod.DELETE:
              internalPromise = this.http.delete(endpoint).toPromise();
              break;
            case HTTPMethod.POST:
              internalPromise = this.http.post(endpoint, payload).toPromise();
              break;
            case HTTPMethod.PUT:
              internalPromise = this.http.put(endpoint, payload).toPromise();
              break;
          }
          internalPromise.then(
            res => resolve(),
            rej => reject()
          )
      });
      return promise;
  }
}
