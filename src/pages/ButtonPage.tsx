import Button from '../components/Button.tsx';
import { GoBell, GoDatabase, GoDownload } from 'react-icons/go';
import { useState } from 'react';

const ButtonPage = () => {
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
      <Button primary onClick={() => alert('Hello there')} className="mb-5">
        <GoBell />
        Click Me!
      </Button>
      <Button secondary>
        <GoDownload />
        Secondary!
      </Button>
      <Button success>
        <GoDatabase />
        Buy Now!
      </Button>
      <Button warning>See Deal!</Button>
      <Button danger>Hide Ads!</Button>
      <hr/>
      <Button rounded>Plain</Button>
      <Button primary rounded>
        <GoBell />
        Click Me!
      </Button>
      <Button secondary rounded>
        <GoDownload />
        Secondary!
      </Button>
      <Button success rounded>
        <GoDatabase />
        Buy Now!
      </Button>
      <Button warning rounded>See Deal!</Button>
      <Button danger rounded>Hide Ads!</Button>
      <hr/>
      <Button outline>Plain</Button>
      <Button primary outline>
        <GoBell />
        Click Me!
      </Button>
      <Button secondary outline>
        <GoDownload />
        Secondary!
      </Button>
      <Button success outline>
        <GoDatabase />
        Buy Now!
      </Button>
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
  );
};

export default ButtonPage;
