import { TestBed } from '@angular/core/testing';

import { ServicioSociosService } from './servicio-socios.service';

describe('ServicioSociosService', () => {
  let service: ServicioSociosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioSociosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
