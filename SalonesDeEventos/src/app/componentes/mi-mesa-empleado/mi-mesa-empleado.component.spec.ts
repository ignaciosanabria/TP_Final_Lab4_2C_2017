import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiMesaEmpleadoComponent } from './mi-mesa-empleado.component';

describe('MiMesaEmpleadoComponent', () => {
  let component: MiMesaEmpleadoComponent;
  let fixture: ComponentFixture<MiMesaEmpleadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiMesaEmpleadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiMesaEmpleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
