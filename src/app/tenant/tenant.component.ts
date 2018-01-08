import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tenant',
  templateUrl: './tenant.component.html',
  styleUrls: ['./tenant.component.scss']
})
export class TenantComponent implements OnInit {
  private routeSubscriber;
  private tenantId;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.routeSubscriber = this.route.params.subscribe(params => {
      this.tenantId = params['tenantId'];
    });
    console.log(this.routeSubscriber);
    console.log(this.tenantId);
    debugger;
  }
}
