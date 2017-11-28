import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalClienteComponent } from './principal-cliente.component';

describe('PrincipalClienteComponent', () => {
  let component: PrincipalClienteComponent;
  let fixture: ComponentFixture<PrincipalClienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrincipalClienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrincipalClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
