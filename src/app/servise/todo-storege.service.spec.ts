import { TestBed } from '@angular/core/testing';

import { TodoStorageService } from './todo-storage.service';

describe('TodoStoregeService', () => {
  let service: TodoStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
