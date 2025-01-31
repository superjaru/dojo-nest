import { Injectable } from '@nestjs/common';

@Injectable()
export class YahyzyService {
  sumDiceByTarget(dice: number[], target: number) {
    let sum = 0;
    if (dice.length === 0) {
      throw new Error('Dice must be provided');
    }
    if (dice.length != 5) {
      throw new Error('Dice array length must be 5 long');
    }
    if (target < 1 || target > 6) {
      throw new Error('Target must be between 1-6');
    }
    dice.map((v) => {
      if (v < 1 || v > 6) throw new Error('Dice must be between 1-6');
      target === v ? (sum += v) : null;
    });
    return sum;
  }
}
