import React, { useState } from 'react';
import { Section } from '../models';
import { GoChevronDown, GoChevronLeft } from 'react-icons/go';

type AccordionProps = {
  items: Section[];
};

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <div className="border-x border-t rounded">
      {items.map((item, index) => {
        const expanded = selectedIndex === index;

        return (
          <div key={item.id}>
            <div className="flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer" onClick={() => {
              setSelectedIndex((prev) => prev === index ? -1 : index);
            }}>
              {item.title}
              {expanded ? <GoChevronDown/> : <GoChevronLeft/>}
            </div>
            {expanded &&
              <div className="border-b p-5">
                {item.content}
              </div>
            }
          </div>
        );
      })}
    </div>
  )
};

export default Accordion;
