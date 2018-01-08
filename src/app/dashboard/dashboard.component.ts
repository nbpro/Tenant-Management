import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';
import { ViewChild } from '@angular/core';
import { ViewContainerRef } from '@angular/core';
import { ComponentFactoryResolver } from '@angular/core';
import { ApplicationRef } from '@angular/core';
import { RowcomponentComponent } from '../rowcomponent/rowcomponent.component';
import { ViewEncapsulation } from '@angular/core';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  encapsulation : ViewEncapsulation.None
})
export class DashboardComponent implements OnInit {
  
  private responseData;

  constructor(
    private dashboardService:DashboardService,
    private _compoentFactoryResolver: ComponentFactoryResolver,
    private applicationRef: ApplicationRef
  ) { }

  ngOnInit() {

    this.dashboardService.getTenantDetails().subscribe((response =>{
      console.log(response);
      if(response && response.result){
        this.responseData = response.data;
        this.constructTable(this.responseData);
      }
    }));

  }

  @ViewChild('row',{read:ViewContainerRef}) row:ViewContainerRef;

  constructTable(tenantData:Array<Object>){
    this.addRowToTable(tenantData);
  }

  addRowToTable(rowData){
    let comp = this._compoentFactoryResolver.resolveComponentFactory(RowcomponentComponent);
    let expComponent = this.row.createComponent(comp);
    expComponent.instance._refData = rowData;
  }

}
