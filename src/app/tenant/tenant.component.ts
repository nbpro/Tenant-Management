import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TenantService } from './tenant.service';
import { ViewEncapsulation } from '@angular/core';
import { Input } from '@angular/core';
//import { AccordionComponent, AccordionGroup } from '../shared/accordion/accordion.component';

@Component({
  selector: 'app-tenant',
  templateUrl: './tenant.component.html',
  styleUrls: ['./tenant.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TenantComponent implements OnInit {
  private routeSubscriber;
  private tenantId;
  private isGroupOpen = false;

  groups: Array<any> = [];

  @Input()tenantDetails;
  constructor(
    private route: ActivatedRoute,
    private tenantService:TenantService) { }

  ngOnInit() {
    this.routeSubscriber = this.route.params.subscribe(params => {
      this.tenantId = params['tenantId'];
    });
    this.setUpView();
  }

  setUpView(){
    const TenantData = this.tenantService.getTenantDetailsByTenantId(this.tenantId).subscribe((response =>{
        this.tenantDetails = response[0];
        this.addAccountDetails(this.tenantDetails.profile)
    }));
  }

  removeAccordionGroup() {
      this.groups.splice(1,1);
  }

  addAccordionGroup(headingData:string ='', contentData) {
      let accordionGroupContent = {
        heading: headingData,
        content: contentData,
      };
      this.groups.splice(1,0,accordionGroupContent);
  }

  addAccountDetails(profileData:Object):void{
      const profileHeading:string = `Tenant Profile Information`;
      const profileContent = `<div>This is tenant profile information</div>`;
      this.addAccordionGroup(profileHeading,profileContent);
  }
}
