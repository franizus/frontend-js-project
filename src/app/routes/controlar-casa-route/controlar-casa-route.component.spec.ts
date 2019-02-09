import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlarCasaRouteComponent } from './controlar-casa-route.component';

describe('ControlarCasaRouteComponent', () => {
  let component: ControlarCasaRouteComponent;
  let fixture: ComponentFixture<ControlarCasaRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControlarCasaRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlarCasaRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
