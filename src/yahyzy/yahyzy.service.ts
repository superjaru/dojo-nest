import { Injectable } from '@nestjs/common';

@Injectable()
export class YahyzyService {
  checkError(dice: number[], target?: number) {
    if (dice.length === 0) {
      throw new Error('Dice must be provided');
    }
    if (dice.length != 5) {
      throw new Error('Dice array length must be 5 long');
    }
    if (target !== undefined && (target < 1 || target > 6)) {
      throw new Error('Target must be between 1-6');
    }
  }
  sumDiceByTarget(dice: number[], target: number): number {
    this.checkError(dice, target);
    let sum = 0;
    dice.map((v) => {
      if (v < 1 || v > 6) throw new Error('Dice must be between 1-6');
      target === v ? (sum += v) : null;
    });
    return sum;
  }

  sumDiceByKind(dice: number[], target: number): number {
    this.checkError(dice, target);
    if (target !== 3 && target !== 4) throw new Error('Target must be 3 or 4');
    const counts: { [key: number]: number } = {};
    for (const num of dice) {
      counts[num] = (counts[num] || 0) + 1;
    }
    for (const key in counts) {
      if (counts[key] >= target) {
        return dice.reduce((acc, v) => acc + v, 0); // Sum all dice
      }
    }
    return 0
  }

  sumDiceByChance(dice: number[]) {
    return dice.reduce((acc, v) => (acc += v), 0);
  }
}
