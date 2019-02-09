import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioRouteComponent } from './inicio-route.component';

describe('InicioRouteComponent', () => {
  let component: InicioRouteComponent;
  let fixture: ComponentFixture<InicioRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InicioRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
