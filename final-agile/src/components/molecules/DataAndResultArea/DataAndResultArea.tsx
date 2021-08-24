import * as React from 'react';
import './dataAndResultArea.scss';
import { FieldInput } from '../../atoms/FieldInput/FieldInput';

export const DataAndResultArea: React.FC = () => (
  <section className={'DataAndResultArea'}>
    <FieldInput name={'result'} type={'text'} readOnly />
    <FieldInput name={'data'} type={'text'} readOnly={false} />
  </section>
);
