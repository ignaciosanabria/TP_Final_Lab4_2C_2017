import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InicialInvitadoComponent } from './inicial-invitado.component';

describe('InicialInvitadoComponent', () => {
  let component: InicialInvitadoComponent;
  let fixture: ComponentFixture<InicialInvitadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InicialInvitadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InicialInvitadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
