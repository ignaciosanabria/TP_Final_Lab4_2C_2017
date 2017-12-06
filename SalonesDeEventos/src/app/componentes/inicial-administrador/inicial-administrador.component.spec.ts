import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InicialAdministradorComponent } from './inicial-administrador.component';

describe('InicialAdministradorComponent', () => {
  let component: InicialAdministradorComponent;
  let fixture: ComponentFixture<InicialAdministradorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InicialAdministradorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InicialAdministradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
