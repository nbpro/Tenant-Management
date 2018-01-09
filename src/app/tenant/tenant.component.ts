import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TenantService } from './tenant.service';

@Component({
  selector: 'app-tenant',
  templateUrl: './tenant.component.html',
  styleUrls: ['./tenant.component.scss']
})
export class TenantComponent implements OnInit {
  private routeSubscriber;
  private tenantId;
  private tenantDetails;
  constructor(
    private route: ActivatedRoute,
    private tenantService:TenantService) { }

  ngOnInit() {
    this.routeSubscriber = this.route.params.subscribe(params => {
      this.tenantId = params['tenantId'];
    });
  }

  setUpView(){
    const TenantData = this.tenantService.getTenantDetailsByTenantId(this.tenantId).subscribe((response =>{
        this.tenantDetails = response;
    }));
    debugger;
  }
}
