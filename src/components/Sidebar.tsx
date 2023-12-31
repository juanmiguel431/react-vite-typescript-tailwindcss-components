import React from 'react';
import Link from './navigation/Link.tsx';

const Sidebar: React.FC = () => {
  const links = [
    { label: 'Dropdown', path: '/dropdown' },
    { label: 'Accordion', path: '/accordion' },
    { label: 'Buttons', path: '/buttons' },
    { label: 'Modal', path: '/modal' },
    { label: 'Table', path: '/table' },
    { label: 'Counter', path: '/counter' },
    { label: 'Counter Reducer', path: '/counter-reducer' },
  ];

  return (
    <div className="sticky top-0 flex flex-col items-start">
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
