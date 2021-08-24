import * as React from 'react';
import './FieldInputstyle.scss';
import { FieldInputProps } from './type';

export const FieldInput: React.FC<FieldInputProps> = ({ type, name, readOnly }) => (
  <input className={'FieldInput'} name={name} type={type} readOnly={readOnly} />
);
