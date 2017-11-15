import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { CityService } from './city.service';

describe('CityService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [CityService]
    });
  });

  it('should be created', inject([CityService], (service: CityService) => {
    expect(service).toBeTruthy();
  }));
});
