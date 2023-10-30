import React, { useEffect, useRef, useState } from 'react';
import { Option } from '../models';
import { GoChevronDown } from 'react-icons/go'

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
      className="w-48 relative"
      ref={dropDrownRef}
      onClick={() => {
        setExpanded(prev => !prev);
      }}>
      <div
        className="flex justify-between items-center cursor-pointer border rounded p-3 shadow bg-white w-full">
        {value?.label ?? 'Select...'}
        <GoChevronDown className="text-xl"/>
      </div>
      {expanded &&
        <div className="absolute top-full border rounded p-3 shadow bg-white w-full">
          {options.map(option => {
            return (
              <div
                className="hover:bg-sky-100 rounded cursor-pointer p-1"
                key={option.value}
                onClick={() => onChange(option)}
              >{option.label}</div>
            );
          })}
        </div>
      }
    </div>
  );
};

export default Dropdown;
