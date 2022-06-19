import { TestBed } from '@angular/core/testing';

import { DriverService } from './driver.service';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('DriverService', () => {
  let service: DriverService;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
  }));

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DriverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
