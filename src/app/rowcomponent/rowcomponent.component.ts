import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-rowcomponent',
  templateUrl: './rowcomponent.component.html',
  styleUrls: ['./rowcomponent.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RowcomponentComponent implements OnInit {

  _refData:any;

  constructor() { }

  @Input() rowData;

  ngOnInit() {
    this.rowData = this._refData;
  }

}
