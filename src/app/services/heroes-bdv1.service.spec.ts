import { TestBed } from '@angular/core/testing';

import { HeroesBDV1Service } from './heroes-bdv1.service';

describe('HeroesBDV1Service', () => {
  let service: HeroesBDV1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeroesBDV1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
