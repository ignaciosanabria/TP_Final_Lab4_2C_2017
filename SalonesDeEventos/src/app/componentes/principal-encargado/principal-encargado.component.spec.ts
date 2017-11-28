import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalEncargadoComponent } from './principal-encargado.component';

describe('PrincipalEncargadoComponent', () => {
  let component: PrincipalEncargadoComponent;
  let fixture: ComponentFixture<PrincipalEncargadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrincipalEncargadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrincipalEncargadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
