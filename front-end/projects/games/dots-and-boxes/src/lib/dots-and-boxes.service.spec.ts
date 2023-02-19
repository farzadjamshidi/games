import { TestBed } from '@angular/core/testing';

import { DotsAndBoxesService } from './dots-and-boxes.service';

describe('DotsAndBoxesService', () => {
  let service: DotsAndBoxesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DotsAndBoxesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
