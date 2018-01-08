import { Injectable } from "@angular/core";

@Injectable()

export class TenantService{
    constructor(){

    }

    getTenantDetailsByTenantId(tenantId:string){

    }

    checkCorrectTenantId(tenantId):boolean{
        return true;
    }
}