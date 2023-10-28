import { useState } from 'react';

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
    </div>
  )
}

export default App
