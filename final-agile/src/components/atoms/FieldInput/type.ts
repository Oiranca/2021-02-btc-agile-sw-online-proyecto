import React from 'react';

export interface FieldInputProps {
  type: inputType;
  name: string;
  value?: string[];
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => string | void;
  readOnly?: disableType;
}

export type disableType = true | false;
export type inputType = 'text' | 'number';
