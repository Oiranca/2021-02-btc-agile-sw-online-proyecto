import React from 'react';

export interface ButtonProps {
  text: string;
  disabled?: boolean;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => string | void;
}
