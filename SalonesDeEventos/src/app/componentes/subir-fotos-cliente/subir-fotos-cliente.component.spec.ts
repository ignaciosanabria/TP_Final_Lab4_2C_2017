import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubirFotosClienteComponent } from './subir-fotos-cliente.component';

describe('SubirFotosClienteComponent', () => {
  let component: SubirFotosClienteComponent;
  let fixture: ComponentFixture<SubirFotosClienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubirFotosClienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubirFotosClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
