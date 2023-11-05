import React, { useState } from 'react';
import Button from '../components/Button.tsx';

type CounterPageProps = {}

const CounterPage: React.FC<CounterPageProps> = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <Button
        primary
        onClick={() => setCounter(prev => prev + 1)}
      >Increment</Button>

      {counter}
    </div>
  );
};

export default CounterPage;
