import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { AppRoutes } from './app.routing';
import { NavbarModule } from './shared/navbar/navbar.module';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { SidebarModule } from './shared/sidebar/sidebar.module';
import { UserComponent } from './user/user.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UserComponent,
  ],
  imports: [
    BrowserModule,
    NavbarModule,
    SidebarModule,
    RouterModule.forRoot(AppRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
