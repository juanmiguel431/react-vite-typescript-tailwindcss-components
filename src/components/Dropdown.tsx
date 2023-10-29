import React, { useEffect, useRef, useState } from 'react';
import { Option } from '../models';

type DropdownProps = {
  options: Option[];
  value: Option | null;
  onChange: (value: Option) => void;
};

const Dropdown: React.FC<DropdownProps> = ({ options, value, onChange }) => {
  const [expanded, setExpanded] = useState(false);

  const dropDrownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (dropDrownRef.current === null) {
      return;
    }

    const handleClick = (event: MouseEvent) => {
      if (dropDrownRef.current?.contains(event.target as Node)) {
      } else {
        setExpanded(false);
      }
    }

    document.addEventListener('click', handleClick, true);

    return () => {
      document.removeEventListener('click', handleClick, true);
    };

  }, []);

  return (
    <div
      ref={dropDrownRef}
      onClick={() => {
        setExpanded(prev => !prev);
      }}>
      <div>
        {value?.label ?? 'Select...'}
      </div>
      {expanded && options.map(option => {
        return (
          <div
            key={option.value}
            onClick={() => onChange(option)}
          >{option.label}</div>
        );
      })}
    </div>
  );
};

export default Dropdown;
