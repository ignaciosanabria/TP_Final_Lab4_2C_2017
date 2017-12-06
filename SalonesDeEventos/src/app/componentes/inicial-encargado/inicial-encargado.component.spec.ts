import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InicialEncargadoComponent } from './inicial-encargado.component';

describe('InicialEncargadoComponent', () => {
  let component: InicialEncargadoComponent;
  let fixture: ComponentFixture<InicialEncargadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InicialEncargadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InicialEncargadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
