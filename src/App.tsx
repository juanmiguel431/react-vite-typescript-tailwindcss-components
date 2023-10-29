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
      <Button>Plain</Button>
      <Button primary>Click Me!</Button>
      <Button secondary>Secondary!</Button>
      <Button success>Buy Now!</Button>
      <Button warning>See Deal!</Button>
      <Button danger>Hide Ads!</Button>
      <hr/>
      <Button rounded>Plain</Button>
      <Button primary rounded>Click Me!</Button>
      <Button secondary rounded>Secondary!</Button>
      <Button success rounded>Buy Now!</Button>
      <Button warning rounded>See Deal!</Button>
      <Button danger rounded>Hide Ads!</Button>
      <hr/>
      <Button outline>Plain</Button>
      <Button primary outline>Click Me!</Button>
      <Button secondary outline>Secondary!</Button>
      <Button success outline>Buy Now!</Button>
      <Button warning outline>See Deal!</Button>
      <Button danger outline>Hide Ads!</Button>
      <hr/>
      <Button outline rounded>Plain</Button>
      <Button primary outline rounded>Click Me!</Button>
      <Button secondary outline rounded>Secondary!</Button>
      <Button success outline rounded>Buy Now!</Button>
      <Button warning outline rounded>See Deal!</Button>
      <Button danger outline rounded>Hide Ads!</Button>
    </div>
  )
}

export default App
