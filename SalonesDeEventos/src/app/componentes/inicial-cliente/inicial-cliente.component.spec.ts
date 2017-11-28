import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InicialClienteComponent } from './inicial-cliente.component';

describe('InicialClienteComponent', () => {
  let component: InicialClienteComponent;
  let fixture: ComponentFixture<InicialClienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InicialClienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InicialClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
