import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { AppRoutes } from './app.routing';
import { NavbarModule } from './shared/navbar/navbar.module';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { SidebarModule } from './shared/sidebar/sidebar.module';
import { UserComponent } from './user/user.component';
import { DashboardService } from './dashboard/dashboard.service';
import { HttpModule } from '@angular/http';
import { RowcomponentComponent } from './rowcomponent/rowcomponent.component';
import { MapToIterablePipe } from './rowcomponent/rowcomponent.pipe';
import { TenantComponent } from './tenant/tenant.component';
import { TenantService } from './tenant/tenant.service';
import { AccordionComponent, AccordionGroup } from './shared/accordion/accordion.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UserComponent,
    RowcomponentComponent,
    MapToIterablePipe,
    TenantComponent,
    AccordionGroup
  ],
  imports: [
    BrowserModule,
    NavbarModule,
    SidebarModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(AppRoutes),
  ],
  providers: [DashboardService,TenantService, AccordionComponent],
  bootstrap: [AppComponent],
  entryComponents: [RowcomponentComponent],
})
export class AppModule { }
