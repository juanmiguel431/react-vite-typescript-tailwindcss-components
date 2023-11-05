import React from 'react';
import Button from '../components/Button.tsx';
import useCounter from '../hooks/useCounter.ts';

type CounterPageProps = {}

const CounterPage: React.FC<CounterPageProps> = () => {
  const { counter, increment } = useCounter(10);

  return (
    <div>
      <Button
        primary
        onClick={increment}
      >Increment</Button>

      {counter}
    </div>
  );
};

export default CounterPage;
