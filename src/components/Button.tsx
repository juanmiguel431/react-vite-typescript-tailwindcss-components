import React, { PropsWithChildren } from 'react';
import PropTypes from 'prop-types';

type ButtonProps = PropsWithChildren & {
  rounded?: boolean;
  outline?: boolean;
}
  & (
    { primary?: true; secondary?: never; success?: never; warning?: never; danger?: never; }
  | { primary?: never; secondary?: true; success?: never; warning?: never; danger?: never; }
  | { primary?: never; secondary?: never; success?: true; warning?: never; danger?: never; }
  | { primary?: never; secondary?: never; success?: never; warning?: true; danger?: never; }
  | { primary?: never; secondary?: never; success?: never; warning?: never; danger?: true; }
  );

const Button: React.FC<ButtonProps> = ({ children }) => {

  return (
    <button className="bg-red-500">
      {children}
    </button>
  );
};

type Props = {
  primary?: boolean;
  secondary?: boolean;
  success?: boolean;
  warning?: boolean;
  danger?: boolean
}

Button.propTypes = {
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  success: PropTypes.bool,
  warning: PropTypes.bool,
  danger: PropTypes.bool,
  checkVariationValue: ({ primary, secondary, success, warning, danger }: Props) => {
    const count = Number(!!primary)
      + Number(!!secondary)
      + Number(!!success)
      + Number(!!warning)
      + Number(!!danger)

    if (count > 1) {
      throw new Error('Only one of primary, secondary, success, warning, danger can be true.');
    }
  }
}

export default Button;
