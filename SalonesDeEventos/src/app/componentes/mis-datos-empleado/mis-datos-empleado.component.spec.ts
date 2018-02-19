import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MisDatosEmpleadoComponent } from './mis-datos-empleado.component';

describe('MisDatosEmpleadoComponent', () => {
  let component: MisDatosEmpleadoComponent;
  let fixture: ComponentFixture<MisDatosEmpleadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MisDatosEmpleadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MisDatosEmpleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
