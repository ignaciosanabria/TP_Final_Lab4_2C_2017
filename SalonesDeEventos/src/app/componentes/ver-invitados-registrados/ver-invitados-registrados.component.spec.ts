import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerInvitadosRegistradosComponent } from './ver-invitados-registrados.component';

describe('VerInvitadosRegistradosComponent', () => {
  let component: VerInvitadosRegistradosComponent;
  let fixture: ComponentFixture<VerInvitadosRegistradosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerInvitadosRegistradosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerInvitadosRegistradosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
