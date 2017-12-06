import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuEncargadoComponent } from './menu-encargado.component';

describe('MenuEncargadoComponent', () => {
  let component: MenuEncargadoComponent;
  let fixture: ComponentFixture<MenuEncargadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuEncargadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuEncargadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
