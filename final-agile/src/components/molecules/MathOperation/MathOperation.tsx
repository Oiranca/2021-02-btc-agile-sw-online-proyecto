import * as React from 'react';
import { Button } from '../../atoms/Button/Button';
import './mathOperationStyle.scss';

type MathOperationProps = {
  value: (value: string) => void;
};
export const MathOperation: React.FC<MathOperationProps> = ({ value }) => {
  const handleOnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    value(e.currentTarget.innerText);
  };
  return (
    <div className={'MathOperation'}>
      <div className={'operatorColumn'}>
        <Button text={'+'} onClick={handleOnClick} />
      </div>
      <div className={'operatorColumn'}>
        <Button text={'-'} onClick={handleOnClick} />
      </div>
      <div className={'operatorColumn'}>
        <Button text={'*'} onClick={handleOnClick} />
      </div>
    </div>
  );
};
