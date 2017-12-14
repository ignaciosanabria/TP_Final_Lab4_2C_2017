import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerEventosEncargadoComponent } from './ver-eventos-encargado.component';

describe('VerEventosEncargadoComponent', () => {
  let component: VerEventosEncargadoComponent;
  let fixture: ComponentFixture<VerEventosEncargadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerEventosEncargadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerEventosEncargadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
