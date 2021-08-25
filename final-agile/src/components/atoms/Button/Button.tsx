import * as React from 'react';
import './ButtonStyle.scss';
import { ButtonProps } from './types';

export const Button: React.FC<ButtonProps> = ({ text = '', disabled, onClick }) => {
  return (
    <button
      className="Button"
      aria-label="submit-button"
      type="submit"
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
