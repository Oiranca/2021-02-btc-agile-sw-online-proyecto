import * as React from 'react';
import { Button } from '../../atoms/Button/Button';
import './numberAreaStyle.scss';

type NumberAreaProps = {
  value: (value: string) => void;
};
export const NumberArea: React.FC<NumberAreaProps> = ({ value }) => {
  const handleOnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    value(e.currentTarget.innerText);
  };
  return (
    <div className={'NumberArea'}>
      <div className={'numberColumn'}>
        <Button text={'7'} onClick={handleOnClick} />
        <Button text={'8'} onClick={handleOnClick} />
        <Button text={'9'} onClick={handleOnClick} />
      </div>
      <div className={'numberColumn'}>
        <Button text={'4'} onClick={handleOnClick} />
        <Button text={'5'} onClick={handleOnClick} />
        <Button text={'6'} onClick={handleOnClick} />
      </div>
      <div className={'numberColumn'}>
        <Button text={'1'} onClick={handleOnClick} />
        <Button text={'2'} onClick={handleOnClick} />
        <Button text={'3'} onClick={handleOnClick} />
      </div>
      <div className={'numberColumn'}>
        <Button text={'0'} onClick={handleOnClick} />
      </div>{' '}
      <div className={'numberColumn'}>
        <Button text={'='} onClick={handleOnClick} />
      </div>
    </div>
  );
};
