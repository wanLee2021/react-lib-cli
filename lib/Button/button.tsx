import { FC } from 'react';

export interface ButtonProps {
  name?: string;
  age?: number;
}
export const Button: FC<ButtonProps> = (props) => {
  return <button>click</button>;
};

export default Button;