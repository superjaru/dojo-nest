import { Test, TestingModule } from '@nestjs/testing';
import { FizzbuzzService } from './fizzbuzz.service';

describe('FizzbuzzService', () => {
  let service: FizzbuzzService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FizzbuzzService],
    }).compile();

    service = module.get<FizzbuzzService>(FizzbuzzService);
  });

  it('input 1 ควรจะ return เท่ากับ 1', () => {
    const test = service.checkfizzbuzz(1);
    const result = '1';
    expect(result).toBe(test);
  });
  it('input 3 ควรจะ return เท่ากับ 3', () => {
    const test = service.checkfizzbuzz(3);
    const result = 'Fizz';
    expect(result).toBe(test);
  });
  it('input 5 ควรจะ return เท่ากับ 5', () => {
    const test = service.checkfizzbuzz(5);
    const result = 'Buzz';
    expect(result).toBe(test);
  });
  it('input 6 ควรจะ return เท่ากับ 6', () => {
    const test = service.checkfizzbuzz(6);
    const result = 'Fizz';
    expect(result).toBe(test);
  });
  it('input 8 ควรจะ return เท่ากับ 8', () => {
    const test = service.checkfizzbuzz(8);
    const result = '8';
    expect(result).toBe(test);
  });
  it('input 9 ควรจะ return เท่ากับ 9', () => {
    const test = service.checkfizzbuzz(9);
    const result = 'Fizz';
    expect(result).toBe(test);
  });
  it('input 10 ควรจะ return เท่ากับ 10', () => {
    const test = service.checkfizzbuzz(10);
    const result = 'Buzz';
    expect(result).toBe(test);
  });
  it('input 13 ควรจะ return เท่ากับ 13', () => {
    const test = service.checkfizzbuzz(13);
    const result = '13';
    expect(result).toBe(test);
  });
  it('input 15 ควรจะ return เท่ากับ 15', () => {
    const test = service.checkfizzbuzz(15);
    const result = 'FizzBuzz';
    expect(result).toBe(test);
  });
  it('input 20 ควรจะ return เท่ากับ 20', () => {
    const test = service.checkfizzbuzz(20);
    const result = 'Buzz';
    expect(result).toBe(test);
  });
  it('input 30 ควรจะ return เท่ากับ 30', () => {
    const test = service.checkfizzbuzz(30);
    const result = 'FizzBuzz';
    expect(result).toBe(test);
  });
  it('input 0 ควรจะ return เท่ากับ 0', () => {
    const test = service.checkfizzbuzz(0);
    const result = 'invalid number';
    expect(result).toBe(test);
  });
});
