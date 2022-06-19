import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams, HttpParamsOptions} from "@angular/common/http";
import { Observable } from 'rxjs';
import {environment} from "../../../environments/environment"

@Injectable({
  providedIn: 'root'
})
export class DriverService {


  constructor(private http: HttpClient) {}

  getAll(pagination: any): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const httpParams: HttpParamsOptions = { fromObject: pagination } as HttpParamsOptions;
    const options = { params: new HttpParams(httpParams), headers: headers };
    return this.http.get(environment.backendUrl, options);
  }


}
