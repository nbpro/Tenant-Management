import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

@Injectable()

export class TenantService{
    constructor(private http:Http){}
    getTenantDetailsByTenantId(tenantId:string){
        const tenantDetails = this.http.get('assets/data/tenantOne.json')
                      .map(res => res.json())
                      .do(data => console.log(data));
        return tenantDetails;    
    }
    checkCorrectTenantId(tenantId):boolean{
        return true;
    }
}