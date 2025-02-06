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
    let sum = 0;
    dice.map((v) => {
      if (v < 1 || v > 6) throw new Error('Dice must be between 1-6');
      target === v ? (sum += v) : null;
    });
    return sum;
  }

  sumDiceByKind(dice: number[], target: number): number {
    if (target !== 3 && target !== 4) throw new Error('Target must be 3 or 4');
    const counts: { [key: number]: number } = {};
    for (const num of dice) {
      counts[num] = (counts[num] || 0) + 1;
    }
    for (const key in counts) {
      if (counts[key] >= target) {
        return dice.reduce((acc, v) => acc + v, 0); 
      }
    }
    return 0
  }

  sumDiceByChance(dice: number[]) {
    return dice.reduce((acc, v) => (acc += v), 0);
  }

  sumDiceByFullhouse(dice : number[]){
    const counts: { [key: number]: number } = {};
    for (const num of dice) {
      counts[num] = (counts[num] || 0) + 1;
    }

    let hasThree = false;
    let hasTwo = false;

    for (const count of Object.values(counts)) {
      if (count === 3) hasThree = true;
      if (count === 2) hasTwo = true;
    }

    return (hasThree && hasTwo) ? 25 : 0
  }
  sumDiceByStraight(dice : number[], target : string){
    let sorted = dice.sort((a,b) => a-b)
    if (target !== 'small' && target !== 'large') throw new Error("Target must be small or large");
    let stack = sorted[0];
    let cnt = 1;

    if (target == 'small'){
      for  (const num of dice){
        if (num == stack + 1) {
          cnt += 1
          stack = num
        }
        if (cnt == 4 ) return 30
      }
    }
    else {
      for  (const num of dice){
        if (num == stack + 1) {
          cnt += 1
          stack = num
        }
        if (cnt == 4 ) return 40
      }
    }
    return 0
  }
  sumDiceByYahtzy(dice : number[]) {
    const unique = [... new Set(dice)]
    return unique.length === 1 ? 50 : 0
  }
}
