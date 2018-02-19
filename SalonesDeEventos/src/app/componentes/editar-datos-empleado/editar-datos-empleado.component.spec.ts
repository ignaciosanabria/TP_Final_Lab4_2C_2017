import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarDatosEmpleadoComponent } from './editar-datos-empleado.component';

describe('EditarDatosEmpleadoComponent', () => {
  let component: EditarDatosEmpleadoComponent;
  let fixture: ComponentFixture<EditarDatosEmpleadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarDatosEmpleadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarDatosEmpleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
