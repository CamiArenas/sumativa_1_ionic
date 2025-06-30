import { TestBed } from '@angular/core/testing';

import { DatabaseForoService } from './database-foro.service';

describe('DatabaseForoService', () => {
  let service: DatabaseForoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatabaseForoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
