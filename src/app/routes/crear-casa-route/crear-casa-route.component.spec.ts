import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearCasaRouteComponent } from './crear-casa-route.component';

describe('CrearCasaRouteComponent', () => {
  let component: CrearCasaRouteComponent;
  let fixture: ComponentFixture<CrearCasaRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearCasaRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearCasaRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
