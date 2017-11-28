import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalRecepcionistaComponent } from './principal-recepcionista.component';

describe('PrincipalRecepcionistaComponent', () => {
  let component: PrincipalRecepcionistaComponent;
  let fixture: ComponentFixture<PrincipalRecepcionistaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrincipalRecepcionistaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrincipalRecepcionistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
