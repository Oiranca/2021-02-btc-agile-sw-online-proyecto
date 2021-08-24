import * as React from 'react';
import { Button } from '../../atoms/Button/Button';
import './mathOperationStyle.scss';

export const MathOperation: React.FC = () => (
  <div className={'MathOperation'}>
    <div className={'operatorColumn'}>
      <Button text={'+'} />
    </div>
    <div className={'operatorColumn'}>
      <Button text={'-'} />
    </div>
    <div className={'operatorColumn'}>
      <Button text={'*'} />
    </div>
  </div>
);
