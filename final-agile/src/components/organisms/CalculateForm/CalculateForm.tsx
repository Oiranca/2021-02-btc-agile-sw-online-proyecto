import * as React from 'react';
import './CalculateFormStyle.scss';
import { DataAndResultArea } from '../../molecules/DataAndResultArea/DataAndResultArea';

export const CalculateForm: React.FC = () => (
  <div className={'CalculateForm'}>
    <div className={'dataView'}>
      <DataAndResultArea />
    </div>
  </div>
);
