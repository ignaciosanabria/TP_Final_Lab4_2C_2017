import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginInvitadoComponent } from './login-invitado.component';

describe('LoginInvitadoComponent', () => {
  let component: LoginInvitadoComponent;
  let fixture: ComponentFixture<LoginInvitadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginInvitadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginInvitadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
