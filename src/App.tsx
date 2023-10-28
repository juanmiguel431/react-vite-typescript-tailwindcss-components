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
      <Button primary>Hi there</Button>
      <Button success>Hi there</Button>
      <Button warning>Hi there</Button>
      <Button danger>Hi there</Button>
      <Button outline>Hi there</Button>
      <Button rounded>Hi there</Button>
    </div>
  )
}

export default App
