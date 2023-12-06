// import { TestBed } from '@angular/core/testing';
// import { JogoDaVelhaService } from './jogo-da-velha.service';

// describe('JogoDaVelhaService', () => {
//   let service: JogoDaVelhaService;

//   beforeEach(() => {
//     TestBed.configureTestingModule({});
//     service = TestBed.inject(JogoDaVelhaService);
//   });

//   it('should ...', inject([JogoDaVelhaService], (service:JogoDaVelhaService)) => {
//     expect(service).toBeTruthy();
//   });
// });

import { TestBed, inject } from '@angular/core/testing';

import { JogoDaVelhaService } from './jogo-da-velha.service';

describe('JogoDaVelhaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JogoDaVelhaService]
    });
  });

  it('should ...', inject([JogoDaVelhaService], (service: JogoDaVelhaService) => {
    expect(service).toBeTruthy();
  }));
});