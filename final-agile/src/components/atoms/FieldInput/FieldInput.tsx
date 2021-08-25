import * as React from 'react';
import './FieldInputstyle.scss';
import { FieldInputProps } from './type';

export const FieldInput: React.FC<FieldInputProps> = ({
  type,
  name,
  readOnly,
  value,
  onChange
}) => (
  <input
    className={'FieldInput'}
    name={name}
    type={type}
    readOnly={readOnly}
    value={value}
    onChange={onChange}
  />
);
