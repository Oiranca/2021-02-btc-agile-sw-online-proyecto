import * as React from 'react';
import './dataAndResultArea.scss';
import { NumberArea } from '../NumberArea/NumberArea';
import { MathOperation } from '../MathOperation/MathOperation';

export const DataAndResultArea: React.FC = () => {
  const [value, setValue] = React.useState<string[]>([]);
  const [result, setResult] = React.useState<string>('');
  const isANumber = RegExp(/\d/);

  const operation = (previousNumber: string, lastNumber: string, operator: string) => {
    switch (operator) {
      case '+':
        return (Number(previousNumber) + Number(lastNumber)).toString();
      case '-':
        return (Number(previousNumber) - Number(lastNumber)).toString();
      case '*':
        return (Number(previousNumber) * Number(lastNumber)).toString();
      default:
        return '';
    }
  };

  const calculate = (values: string[]) => {
    let lastNumber = '';
    let previousNumber = '';
    let operator = '';
    for (const element of values) {
      if (isANumber.test(element)) {
        lastNumber += element;
      } else if (!isANumber.test(element)) {
        if (element === '=') {
          lastNumber = operation(previousNumber, lastNumber, operator);
        } else if (operator === '') {
          previousNumber = lastNumber;
          lastNumber = '';
          operator = element;
        } else {
          previousNumber = operation(previousNumber, lastNumber, operator);
          lastNumber = '';
        }
      }
    }
    return lastNumber;
  };

  const handleOnClick = (e: string) => {
    setValue([...value, e]);
  };

  React.useEffect(() => {
    if (value.includes('=')) {
      setResult(calculate(value)!);
      setValue(['']);
    }
  }, [value]);
  return (
    <div className={'DataAndResultArea'}>
      <div className={'resultArea'}>
        <div className={'result'}>{result}</div>
        <div className={'data'}>{value}</div>
      </div>
      <div className={'operation row'}>
        <div className={'digit col'}>
          <NumberArea value={handleOnClick} />
        </div>
        <div className={'operator col'}>
          <MathOperation value={handleOnClick} />
        </div>
      </div>
    </div>
  );
};
