import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InicialRecepcionistaComponent } from './inicial-recepcionista.component';

describe('InicialRecepcionistaComponent', () => {
  let component: InicialRecepcionistaComponent;
  let fixture: ComponentFixture<InicialRecepcionistaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InicialRecepcionistaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InicialRecepcionistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
