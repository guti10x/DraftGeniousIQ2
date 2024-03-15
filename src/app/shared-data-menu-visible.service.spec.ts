import { TestBed } from '@angular/core/testing';

import { SharedDataMenuVisibleService } from './shared-data-menu-visible.service';

describe('SharedDataMenuVisibleService', () => {
  let service: SharedDataMenuVisibleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedDataMenuVisibleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
