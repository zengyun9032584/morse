/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MorseService } from './list.service';

describe('Service: Person', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MorseService]
    });
  });

  it('should ...', inject([MorseService], (service: MorseService) => {
    expect(service).toBeTruthy();
  }));
});
