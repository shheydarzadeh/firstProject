import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
@Injectable()
export class ListService {

  constructor(private http: HttpClient) { }
   endpoint = 'http://api.nemov.org/';
   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  list(): Observable<any> {
    return this.http.get('http://api.nemov.org/api/v1/Market/Symbol').pipe(
      map(this.extractData));
  }
  get_detailes(id): Observable<any> {
    return this.http.get(this.endpoint + 'api/v1/Market/Symbol/' + id).pipe(
      map(this.extractData));
  }
  private extractData(res: Response) {
    const body = res;
    return body || { };
  }

}
