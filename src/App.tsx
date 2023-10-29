import { useState } from 'react';
import Button from './components/Button.tsx';

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <button
        onClick={() => {
          setCounter((prev) => prev + 1);
        }}>Counter
      </button>
      {counter}
      <Button primary>Click Me!</Button>
      <Button success>Buy Now!</Button>
      <Button warning>See Deal!</Button>
      <Button danger>Hide Ads!</Button>
      <Button outline>Something!</Button>
    </div>
  )
}

export default App
