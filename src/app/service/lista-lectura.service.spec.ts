import { TestBed } from '@angular/core/testing';

import { ListaLecturaService } from './lista-lectura.service';

describe('ListaLecturaService', () => {
  let service: ListaLecturaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListaLecturaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
