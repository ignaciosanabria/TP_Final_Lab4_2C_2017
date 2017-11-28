import { TestBed, inject } from '@angular/core/testing';

import { InvitadosService } from './invitados.service';

describe('InvitadosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InvitadosService]
    });
  });

  it('should be created', inject([InvitadosService], (service: InvitadosService) => {
    expect(service).toBeTruthy();
  }));
});
