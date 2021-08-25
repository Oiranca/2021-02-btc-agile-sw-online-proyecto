import * as React from 'react';
import './dataAndResultArea.scss';
import { NumberArea } from '../NumberArea/NumberArea';
import { MathOperation } from '../MathOperation/MathOperation';
import { operation } from '../../../utils/operation';

export const DataAndResultArea: React.FC = () => {
  const [value, setValue] = React.useState<string[]>([]);
  const [result, setResult] = React.useState<string>('');
  const [lastItem, setLastItem] = React.useState<string>('');
  const [hasOperator, setHasOperator] = React.useState<boolean>(false);
  const isANumber = RegExp(/\d/);

  const calculate = (values: string[]) => {
    let initialNumbers = '';
    let lastNumbers = '';
    let typeOperation = '';
    let totalOperation = '';
    for (const element of values) {
      if (isANumber.test(element)) {
        typeOperation === '' ? (initialNumbers += element) : (lastNumbers += element);
      } else if (!isANumber.test(element) && element !== '') {
        if (typeOperation === '' && element !== '=') {
          typeOperation = element;
        } else if (element === '=') {
          totalOperation = operation(lastNumbers, initialNumbers, typeOperation);
        }
      }
    }
    return totalOperation;
  };
  const handleOnClick = (e: string) => {
    if (isANumber.test(e)) {
      setValue([...value, e]);
      setLastItem(e);
    } else if (isANumber.test(lastItem) && !hasOperator) {
      setValue([...value, e]);
      setHasOperator(true);
    } else if (isANumber.test(lastItem) && e === '=') {
      setValue([...value, e]);
      setHasOperator(false);
    }
  };

  React.useEffect(() => {
    if (value.includes('=')) {
      setResult(calculate(value));
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
