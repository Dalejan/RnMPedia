import { TestBed } from '@angular/core/testing';

import { FetchApiService } from './fetch-api.service';

describe('FetchApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FetchApiService = TestBed.get(FetchApiService);
    expect(service).toBeTruthy();
  });
});
