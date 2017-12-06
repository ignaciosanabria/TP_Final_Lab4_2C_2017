import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerEventosRecepcionistaComponent } from './ver-eventos-recepcionista.component';

describe('VerEventosRecepcionistaComponent', () => {
  let component: VerEventosRecepcionistaComponent;
  let fixture: ComponentFixture<VerEventosRecepcionistaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerEventosRecepcionistaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerEventosRecepcionistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
