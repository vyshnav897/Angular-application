import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Resolve,ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Injectable()
export class AppResolver implements Resolve<any> {

  constructor(private http: HttpClient) { 


  }

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    return this.http.get("posts/"+route.params['id']).pipe(
      map( (dataFromApi) => dataFromApi ),
      catchError( (err) => Observable.throw(err.json().error) )
    )
  }
}