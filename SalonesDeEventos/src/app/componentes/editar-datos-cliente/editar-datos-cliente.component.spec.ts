import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarDatosClienteComponent } from './editar-datos-cliente.component';

describe('EditarDatosClienteComponent', () => {
  let component: EditarDatosClienteComponent;
  let fixture: ComponentFixture<EditarDatosClienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarDatosClienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarDatosClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
