import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RowcomponentComponent } from './rowcomponent.component';

describe('RowcomponentComponent', () => {
  let component: RowcomponentComponent;
  let fixture: ComponentFixture<RowcomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RowcomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RowcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
