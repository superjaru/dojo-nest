import { Injectable } from '@nestjs/common';
import { stringify } from 'querystring';

@Injectable()
export class FizzbuzzService {
  checkfizzbuzz(input: number): string {
    if (input === 0) return 'invalid number';
    if (input % 3 === 0 && input % 5 === 0) {
      return 'FizzBuzz';
    }
    if (input % 3 === 0) {
      return 'Fizz';
    }
    if (input % 5 === 0) {
      return 'Buzz';
    } else {
      return input.toString();
    }
  }
}
