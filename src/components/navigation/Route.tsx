import React from 'react';
import useNavigation from '../../hooks/useNavigation.ts';

type RouteProps = {
  path: string;
  component: React.FC | React.ComponentClass;
}

const Route: React.FC<RouteProps> = ({ path, component: Component}) => {
  const { currentPath } = useNavigation();

  return path === currentPath ? <Component /> : null;
};

export default Route;
