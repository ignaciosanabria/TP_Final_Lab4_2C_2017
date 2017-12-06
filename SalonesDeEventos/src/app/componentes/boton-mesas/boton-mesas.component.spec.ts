import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonMesasComponent } from './boton-mesas.component';

describe('BotonMesasComponent', () => {
  let component: BotonMesasComponent;
  let fixture: ComponentFixture<BotonMesasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotonMesasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotonMesasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
