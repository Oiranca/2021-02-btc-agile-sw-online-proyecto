import * as React from 'react';
import './calculatorStyle.scss';
import { CalculateForm } from '../organisms/CalculateForm/CalculateForm';

export const CalculatorView: React.FC = () => (
  <div className={'CalculatorView'}>
    <div className={'header'}>
      <h1>Prueba Final Agile</h1>
      <h2>Principios SOLID / Patrones / Refactors</h2>
    </div>
    <div className={'body'}>
      <CalculateForm />
    </div>
  </div>
);
