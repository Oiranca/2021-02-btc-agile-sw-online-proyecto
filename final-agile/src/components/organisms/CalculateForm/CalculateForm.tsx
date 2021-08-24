import * as React from 'react';
import './CalculateFormStyle.scss';
import { DataAndResultArea } from '../../molecules/DataAndResultArea/DataAndResultArea';
import { NumberArea } from '../../molecules/NumberArea/NumberArea';
import { MathOperation } from '../../molecules/MathOperation/MathOperation';

export const CalculateForm: React.FC = () => (
  <div className={'calculator'}>
    <div className={'dataView'}>
      <DataAndResultArea />
    </div>
    <div className={'operation row'}>
      <div className={'digit col'}>
        <NumberArea />
      </div>
      <div className={'operator col'}>
        <MathOperation />
      </div>
    </div>
  </div>
);
