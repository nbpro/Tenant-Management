import { Component, OnInit } from '@angular/core';
import { ElementRef } from '@angular/core';
import { ROUTES } from '@angular/router/src/router_config_loader';
import { ViewChild } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  private listTitles: any[];
  location: Location;
  private nativeElement: Node;
  private toggleButton;
  private sidebarVisible: boolean;

  @ViewChild("app-navbar") button;

  constructor(location:Location, private element : ElementRef) {
      this.location = location;
      this.nativeElement = element.nativeElement;
      this.sidebarVisible = false;
  }

  ngOnInit(){
      // this.listTitles = ROUTES.filter(listTitle => listTitle);
      var navbar : HTMLElement = this.element.nativeElement;
      this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
  }
  getTitle(){
    const title:string = `Tenant Management`;
    return title;
  }
  sidebarToggle(){
      var toggleButton = this.toggleButton;
      var body = document.getElementsByTagName('body')[0];

      if(this.sidebarVisible == false){
          setTimeout(function(){
              toggleButton.classList.add('toggled');
          },500);
          body.classList.add('nav-open');
          this.sidebarVisible = true;
      } else {
          this.toggleButton.classList.remove('toggled');
          this.sidebarVisible = false;
          body.classList.remove('nav-open');
      }
  }

}
