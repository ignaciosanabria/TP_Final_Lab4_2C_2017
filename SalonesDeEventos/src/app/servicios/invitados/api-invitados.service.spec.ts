import { TestBed, inject } from '@angular/core/testing';

import { ApiInvitadosService } from './api-invitados.service';

describe('ApiInvitadosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiInvitadosService]
    });
  });

  it('should be created', inject([ApiInvitadosService], (service: ApiInvitadosService) => {
    expect(service).toBeTruthy();
  }));
});
