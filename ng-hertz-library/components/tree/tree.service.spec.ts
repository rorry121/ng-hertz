import { TestBed } from '@angular/core/testing';

import { HzTreeService } from './tree.service';

describe('HzTreeService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [HzTreeService]
    })
  );

  it('should be created', () => {
    const service: HzTreeService = TestBed.get(HzTreeService);
    expect(service).toBeTruthy();
  });
});
