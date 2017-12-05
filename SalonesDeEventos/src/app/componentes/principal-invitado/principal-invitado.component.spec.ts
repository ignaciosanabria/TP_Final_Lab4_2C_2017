import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalInvitadoComponent } from './principal-invitado.component';

describe('PrincipalInvitadoComponent', () => {
  let component: PrincipalInvitadoComponent;
  let fixture: ComponentFixture<PrincipalInvitadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrincipalInvitadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrincipalInvitadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
