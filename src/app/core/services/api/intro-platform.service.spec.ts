import { TestBed } from '@angular/core/testing';

import { IntroPlatformService } from './intro-platform.service';

describe('IntroPlatformService', () => {
  let service: IntroPlatformService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IntroPlatformService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
