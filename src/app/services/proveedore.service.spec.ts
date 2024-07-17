import { TestBed } from '@angular/core/testing';

import { ProveedoreService } from './proveedore.service';

describe('ProveedoreService', () => {
  let service: ProveedoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProveedoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
