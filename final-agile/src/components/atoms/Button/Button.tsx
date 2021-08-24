import * as React from 'react';
import './ButtonStyle.scss';
import { ButtonProps } from './types';

export const Button: React.FC<ButtonProps> = ({ text = '', disabled = false }) => (
  <button className="Button" aria-label="submit-button" type="submit" disabled={disabled}>
    {text}
  </button>
);
