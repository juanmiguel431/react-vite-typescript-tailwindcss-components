import React, { PropsWithChildren } from 'react';

type ButtonProps = PropsWithChildren & {
  rounded?: boolean;
  outline?: boolean;
}
  & ({ primary?: true; secondary?: never } | { secondary?: true; primary?: never; })
  & (
    { success?: true; warning?: never; danger?: never }
  | { success?: never; warning?: true; danger?: never }
  | { success?: never; warning?: never; danger?: true }
  );

const Button: React.FC<ButtonProps> = ({ children }) => {

  return (
    <button>
      {children}
    </button>
  );
};

export default Button;
