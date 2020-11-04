import { TestBed } from '@angular/core/testing';

import { PostegemService } from './postagem.service';

describe('PostegemService', () => {
  let service: PostegemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostegemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
