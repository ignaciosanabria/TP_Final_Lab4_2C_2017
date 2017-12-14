import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerEventoHoyEmpleadoComponent } from './ver-evento-hoy-empleado.component';

describe('VerEventoHoyEmpleadoComponent', () => {
  let component: VerEventoHoyEmpleadoComponent;
  let fixture: ComponentFixture<VerEventoHoyEmpleadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerEventoHoyEmpleadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerEventoHoyEmpleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
