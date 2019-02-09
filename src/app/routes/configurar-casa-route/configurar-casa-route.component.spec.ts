import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigurarCasaRouteComponent } from './configurar-casa-route.component';

describe('ConfigurarCasaRouteComponent', () => {
  let component: ConfigurarCasaRouteComponent;
  let fixture: ComponentFixture<ConfigurarCasaRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigurarCasaRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigurarCasaRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
