import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';

declare interface TableData {
  headerRow: string[];
  dataRows: string[][];
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

  constructor(private dashboardService:DashboardService) { }

  ngOnInit() {

    this.dashboardService.getTenantDetails().subscribe((response =>{
      console.log(response);
      if(response && response.result){
        this.responseData = response.data[0];
        this.constructTable(this.responseData);
      }
    }));

  }

  constructTable(tenantData:Array<Object>){
    console.log(tenantData);
    this.tableData2 = {
      headerRow: ['Unique Tenant ID','Name','External ID','External Name','Tenant Type'],
      dataRows: [
        [ tenantData['TenantId'],tenantData['TenantName'] ,tenantData['ExternalTenantID'],tenantData['ExternalTenantName'],tenantData['tenantType']]
      ]
    };
  }

}
