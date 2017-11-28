import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarInvitadosComponent } from './agregar-invitados.component';

describe('AgregarInvitadosComponent', () => {
  let component: AgregarInvitadosComponent;
  let fixture: ComponentFixture<AgregarInvitadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarInvitadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarInvitadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
