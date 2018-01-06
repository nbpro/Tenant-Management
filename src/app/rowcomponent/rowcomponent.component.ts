import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { DashboardComponent } from '../dashboard/dashboard.component';

declare interface TableData {
  headerRow: string[];
}
@Component({
  selector: 'app-rowcomponent',
  templateUrl: './rowcomponent.component.html',
  encapsulation: ViewEncapsulation.None
})
export class RowcomponentComponent  implements OnInit {
  public tableData: TableData;
  _refData:any;

  constructor() {
  }

  @Input() rowData;

  ngOnInit() {
    this.tableData = {
      headerRow: ['Unique Tenant ID','Name','External ID','External Name','Tenant Type']
    };
    this.rowData = this._refData;
  }

}
