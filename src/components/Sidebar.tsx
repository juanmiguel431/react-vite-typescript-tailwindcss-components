import React from 'react';
import Link from './navigation/Link.tsx';
import useNavigation from '../hooks/useNavigation.ts';

const Sidebar: React.FC = () => {
  const links = [
    { label: 'Dropdown', path: '/dropdown' },
    { label: 'Accordion', path: '/accordion' },
    { label: 'Buttons', path: '/buttons' },
  ];

  const { currentPath } = useNavigation();

  return (
    <div className="sticky top-0 overflow-y-scroll flex flex-col">
      {links.map(l => {
        return (
          <Link
            key={l.path}
            to={l.path} className="mb-5"
            activeClassName="font-bold border-l-4 border-blue-500 pl-2"
          >{l.label}</Link>
        );
      })}
    </div>

  );
};

export default Sidebar;