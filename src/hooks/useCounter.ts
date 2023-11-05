import { useCallback, useState } from 'react';

const useCounter = (initialValue: number) => {
  const [counter, setCounter] = useState(initialValue);

  const increment = useCallback(() => {
    setCounter(prev => prev + 1);
  }, []);

  return {
    counter, increment
  };
};

export default useCounter;
