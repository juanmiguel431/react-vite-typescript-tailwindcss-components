import Accordion from './components/Accordion.tsx';
import { Option, Section } from './models';
import AccordionPage from './pages/AccordionPage.tsx';
import Dropdown from './components/Dropdown.tsx';
import { useState } from 'react';

const options: Option[] = [
  { value: 'red', label: 'Red' },
  { value: 'green', label: 'Green' },
  { value: 'blue', label: 'Blue' },
];

function App() {
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
  )
}

export default App
