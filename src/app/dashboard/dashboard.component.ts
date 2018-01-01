import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';
import { ViewChild } from '@angular/core';
import { ViewContainerRef } from '@angular/core';
import { ComponentFactoryResolver } from '@angular/core';
import { ApplicationRef } from '@angular/core';
import { RowcomponentComponent } from '../rowcomponent/rowcomponent.component';

declare interface TableData {
  headerRow: string[];
}


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public tableData1: TableData;
  public tableData2: TableData;
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
        this.responseData = response.data[0];
        this.constructTable(this.responseData);
      }
    }));

  }

  @ViewChild('row',{read:ViewContainerRef}) row:ViewContainerRef;

  constructTable(tenantData:Array<Object>){
    console.log(tenantData);
    this.addRowToTable(tenantData);
    this.tableData2 = {
      headerRow: ['Unique Tenant ID','Name','External ID','External Name','Tenant Type']
    };
  }

  addRowToTable(rowData){
    let comp = this._compoentFactoryResolver.resolveComponentFactory(RowcomponentComponent);
    let expComponent = this.row.createComponent(comp);
    expComponent.instance._refData = rowData;
  }

}
