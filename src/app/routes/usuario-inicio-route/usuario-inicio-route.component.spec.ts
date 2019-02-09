import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioInicioRouteComponent } from './usuario-inicio-route.component';

describe('UsuarioInicioRouteComponent', () => {
  let component: UsuarioInicioRouteComponent;
  let fixture: ComponentFixture<UsuarioInicioRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuarioInicioRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioInicioRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
