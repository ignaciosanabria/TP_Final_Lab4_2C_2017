import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventosClientesComponent } from './eventos-clientes.component';

describe('EventosClientesComponent', () => {
  let component: EventosClientesComponent;
  let fixture: ComponentFixture<EventosClientesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventosClientesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventosClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
