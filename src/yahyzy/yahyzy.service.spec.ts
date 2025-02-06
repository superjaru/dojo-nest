import { Test, TestingModule } from '@nestjs/testing';
import { YahyzyService } from './yahyzy.service';

describe('Successul case', () => {
  let service: YahyzyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [YahyzyService],
    }).compile();

    service = module.get<YahyzyService>(YahyzyService);
  });

  it('ทอยได้หน้า [1,2,2,1,2] โดยให้ target มีค่า 1 และผลรวมมีค่า 2', () => {
    const dice = [1, 2, 2, 1, 2];
    const target = 1;
    const result = 2;
    const test = service.sumDiceByTarget(dice, target);

    expect(result).toBe(test);
  });
  it('ทอยได้หน้า [2,2,2,5,1] โดยให้ target มีค่า 2 และผลรวมมีค่า 6', () => {
    const dice = [2, 2, 2, 5, 1];
    const target = 2;
    const result = 6;
    const test = service.sumDiceByTarget(dice, target);

    expect(result).toBe(test);
  });
  it('ทอยได้หน้า [2,3,2,5,1] โดยให้ target มีค่า 3 และผลรวมมีค่า 3', () => {
    const dice = [2, 3, 2, 5, 1];
    const target = 3;
    const result = 3;
    const test = service.sumDiceByTarget(dice, target);

    expect(result).toBe(test);
  });
  it('ทอยได้หน้า [4,4,4,4,4] โดยให้ target มีค่า 4 และผลรวมมีค่า 20', () => {
    const dice = [4, 4, 4, 4, 4];
    const target = 4;
    const result = 20;
    const test = service.sumDiceByTarget(dice, target);

    expect(result).toBe(test);
  });
  it('ทอยได้หน้า [5,5,5,2,1] โดยให้ target มีค่า 5 และผลรวมมีค่า 15', () => {
    const dice = [5, 5, 5, 2, 1];
    const target = 5;
    const result = 15;
    const test = service.sumDiceByTarget(dice, target);

    expect(result).toBe(test);
  });
  it('ทอยได้หน้า [6,6,5,3,1] โดยให้ target มีค่า 6 และผลรวมมีค่า 12', () => {
    const dice = [6, 6, 5, 3, 1];
    const target = 6;
    const result = 12;
    const test = service.sumDiceByTarget(dice, target);

    expect(result).toBe(test);
  });

  it('ทอยได้หน้า [2,1,2,1,2] โดยให้ target มีค่า 3 และผลรวมมีค่า 8', () => {
    const dice = [2, 1, 2, 1, 2];
    const target = 3;
    const result = 8;
    const test = service.sumDiceByKind(dice, target);

    expect(result).toBe(test);
  });
  it('ทอยได้หน้า [1,1,2,2,2] โดยให้ target มีค่า 3 และผลรวมมีค่า 8', () => {
    const dice = [1, 1, 2, 2, 2];
    const target = 3;
    const result = 8;
    const test = service.sumDiceByKind(dice, target);

    expect(result).toBe(test);
  });
  // X Kind of card
  it('ทอยได้หน้า [4,4,4,4,1] โดยให้ target มีค่า 4 และผลรวมมีค่า 17', () => {
    const dice = [4, 4, 4, 4, 1];
    const target = 4;
    const result = 17;
    const test = service.sumDiceByKind(dice, target);

    expect(result).toBe(test);
  });
   // X Kind of card
  it('ทอยได้หน้า [4,4,1,4,4] โดยให้ target มีค่า 4 และผลรวมมีค่า 17', () => {
    const dice = [4, 4, 1, 4, 4];
    const target = 4;
    const result = 17;
    const test = service.sumDiceByKind(dice, target);

    expect(result).toBe(test);
  });
  it('ทอยได้หน้า [2,2,3,3,3] โดยให้ target  และผลรวมมีค่า 13', () => {
    const dice = [2,2,3,3,3];
    const result = 13;
    const test = service.sumDiceByChance(dice);

    expect(result).toBe(test);
  });
});

describe('Alternative case', () => {
  let service: YahyzyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [YahyzyService],
    }).compile();

    service = module.get<YahyzyService>(YahyzyService);
  });

  it('ทอยได้หน้า [2,3,2,5,1] โดยให้ target มีค่า 4 และผลรวมมีค่า 0', () => {
    const dice = [2, 3, 2, 5, 1];
    const target = 4;
    const expected = 0;
    const result = service.sumDiceByTarget(dice, target);

    expect(result).toBe(expected);
  });

  it('ทอยได้หน้า [] โดยให้ target มีค่า 3 แต่ result error คือ "Dice must be provided"', () => {
    const dice = [];
    const target = 3;
    const expected = 'Dice must be provided';
    const result = () => service.sumDiceByTarget(dice, target);

    expect(result).toThrow(expected);
  });
  it('ทอยได้หน้า [1,3,4] โดยให้ target มีค่า 1 แต่ result error คือ "Dice array length must be 5 long"', () => {
    const dice = [1, 3, 4];
    const target = 1;
    const expected = 'Dice array length must be 5 long';
    const result = () => service.sumDiceByTarget(dice, target);

    expect(result).toThrow(expected);
  });
  it('ทอยได้หน้า [1,3,4,1,1,1] โดยให้ target มีค่า 1 แต่ result error คือ "Dice array length must be 5 long"', () => {
    const dice = [1, 3, 4, 1, 1, 1];
    const target = 1;
    const expected = 'Dice array length must be 5 long';
    const result = () => service.sumDiceByTarget(dice, target);

    expect(result).toThrow(expected);
  });
  it('ทอยได้หน้า [2,3,2,5,1] โดยให้ target มีค่า -1 แต่ result error คือ "Target must be between 1-6"', () => {
    const dice = [2, 3, 2, 5, 1];
    const target = -1;
    const expected = 'Target must be between 1-6';
    const result = () => service.sumDiceByTarget(dice, target);

    expect(result).toThrow(expected);
  });
  it('ทอยได้หน้า [2,3,2,5,1] โดยให้ target มีค่า 7 แต่ result error คือ "Target must be between 1-6"', () => {
    const dice = [2, 3, 2, 5, 1];
    const target = 7;
    const expected = 'Target must be between 1-6';
    const result = () => service.sumDiceByTarget(dice, target);

    expect(result).toThrow(expected);
  });
  it('ทอยได้หน้า [2,3,2,5,7] โดยให้ target มีค่า 1 แต่ result error คือ "Dice must be between 1-6"', () => {
    const dice = [2, 3, 2, 5, 7];
    const target = 1;
    const expected = 'Dice must be between 1-6';
    const result = () => service.sumDiceByTarget(dice, target);

    expect(result).toThrow(expected);
  });
  it('ทอยได้หน้า [2,3,2,5,-1] โดยให้ target มีค่า 1 แต่ result error คือ "Dice must be between 1-6"', () => {
    const dice = [2, 3, 2, 5, -1];
    const target = 1;
    const expected = 'Dice must be between 1-6';
    const result = () => service.sumDiceByTarget(dice, target);

    expect(result).toThrow(expected);
  });
});
