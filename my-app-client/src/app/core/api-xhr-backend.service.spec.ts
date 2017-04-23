import { TestBed, inject } from '@angular/core/testing';

import { ApiXhrBackendService } from './api-xhr-backend.service';

describe('ApiXhrBackendService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiXhrBackendService]
    });
  });

  it('should ...', inject([ApiXhrBackendService], (service: ApiXhrBackendService) => {
    expect(service).toBeTruthy();
  }));
});
