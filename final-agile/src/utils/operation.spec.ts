import { operation } from './operation';

describe('operations are correct', () => {
  test('return result for sum two number', () => {
    const previousNumber: string = '2';
    const lastNumber: string = '2';
    const operator: string = '+';
    const isOperationSum = operation(previousNumber, lastNumber, operator);
    expect(isOperationSum).toBe('4');
  });
  test('return result for subtraction two number', () => {
    const previousNumber: string = '2';
    const lastNumber: string = '2';
    const operator: string = '-';
    const isOperationSubtraction = operation(previousNumber, lastNumber, operator);
    expect(isOperationSubtraction).toBe('0');
  });
  test('return result for multiplication two number', () => {
    const previousNumber: string = '2';
    const lastNumber: string = '2';
    const operator: string = '*';
    const isOperationMultiplication = operation(previousNumber, lastNumber, operator);
    expect(isOperationMultiplication).toBe('4');
  });
});
