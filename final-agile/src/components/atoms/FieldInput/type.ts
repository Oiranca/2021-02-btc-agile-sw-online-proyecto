export interface FieldInputProps {
  type:inputType;
  name:string;
  readOnly?: disableType;
}

export type disableType = true | false;
export type inputType = 'text' | 'number';
