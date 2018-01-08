import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { Router } from '@angular/router';

declare interface TableData {
  headerRow: string[];
}
@Component({
  selector: 'app-rowcomponent',
  templateUrl: './rowcomponent.component.html',
  styleUrls :['./rowcomponent.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RowcomponentComponent  implements OnInit {
  public tableData: TableData;
  _refData:any;

  constructor(private router: Router) {
  }

  @Input() rowData;
  @Input() searchText;

  ngOnInit() {
    this.tableData = {
      headerRow: ['#','Unique Tenant ID','Name','Tenant Type','Actions']
    };
    this.rowData = this._refData;
  }
  goToTenantDetails(tenantDetails){
    console.log(tenantDetails);
    this.router.navigate(['/tenant-details', tenantDetails.TenantId]);
  }
}
