import { TestBed } from '@angular/core/testing';

import { GetapiService } from './getapi.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

describe('GetapiService', () => {
  let service: GetapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [HttpClient],
    });
    service = TestBed.inject(GetapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
