import { TestBed } from '@angular/core/testing';

import { HttpToolsService } from './http-tools.service';

describe('HttpToolsService', () => {
  let service: HttpToolsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpToolsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
