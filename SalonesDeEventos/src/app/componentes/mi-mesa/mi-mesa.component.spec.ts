import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiMesaComponent } from './mi-mesa.component';

describe('MiMesaComponent', () => {
  let component: MiMesaComponent;
  let fixture: ComponentFixture<MiMesaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiMesaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiMesaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
