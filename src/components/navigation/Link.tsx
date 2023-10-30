import React, { PropsWithChildren, useCallback, useMemo } from 'react';
import classNames from 'classnames';
import useNavigation from '../../hooks/useNavigation.ts';

type LinkProps = {
  to: string;
  className?: string;
  activeClassName?: string;
} & PropsWithChildren;

const Link: React.FC<LinkProps> = ({ to, children, className, activeClassName }) => {
  const { navigate, currentPath } = useNavigation();

  const onClick: React.MouseEventHandler<HTMLAnchorElement> = useCallback( (event) => {
    if (event.ctrlKey || event.metaKey) {
      return;
    }

    event.preventDefault();
    navigate(to);
  }, [navigate, to]);

  const classes = useMemo(() => {
    return classNames(
      'text-blue-500',
      className,
      currentPath == to && activeClassName
    );
  }, [activeClassName, className, currentPath, to])

  return (
    <a href={to} onClick={onClick} className={classes}>
      {children}
    </a>
  );
};

export default Link;
