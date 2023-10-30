import React from 'react';
import classNames from 'classnames';

type PanelProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

const Panel: React.FC<PanelProps> = ({ children, ...rest}) => {
  const classes = classNames('border rounded p-3 shadow bg-white w-full', rest.className);
  return (
    <div {...rest} className={classes} >
      {children}
    </div>
  );
};

export default Panel;
