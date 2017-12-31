import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import { RequestOptions } from '@angular/http/src/base_request_options';

@Injectable()
export class DashboardService {
  constructor(private http:Http) {
    console.log('inside dashboard service constructor');
  
   }
   getTenantDetails() {
    const tenantList = this.http.get('assets/data/tenant.json')
                      .map(res => res.json())
                      .do(data => console.log(data));
    return tenantList;                  
   }
}
