import Dropdown from '../components/Dropdown.tsx';
import { Option } from '../models';
import { useState } from 'react';

const options: Option[] = [
  { value: 'red', label: 'Red' },
  { value: 'green', label: 'Green' },
  { value: 'blue', label: 'Blue' },
];

const DropdownPage = () => {
  const [value, setValue] = useState<Option | null>(null);

  return (
    <div className="flex justify-around">
      <Dropdown
        options={options}
        value={value}
        onChange={setValue}
      />
      <Dropdown
        options={options}
        value={value}
        onChange={setValue}
      />
    </div>
  );
}

export default DropdownPage;
