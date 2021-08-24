import * as React from 'react';
import { Button } from '../../atoms/Button/Button';
import './numberAreaStyle.scss';

export const NumberArea: React.FC = () => (
  <div className={'NumberArea'}>
    <div className={'numberColumn'}>
      <Button text={'7'} />
      <Button text={'8'} />
      <Button text={'9'} />
    </div>
    <div className={'numberColumn'}>
      <Button text={'4'} />
      <Button text={'5'} />
      <Button text={'6'} />
    </div>
    <div className={'numberColumn'}>
      <Button text={'1'} />
      <Button text={'2'} />
      <Button text={'3'} />
    </div>
    <div className={'numberColumn'}>
      <Button text={'0'} />
    </div>{' '}
    <div className={'numberColumn'}>
      <Button text={'='} />
    </div>
  </div>
);
