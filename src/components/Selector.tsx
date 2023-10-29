import { Section } from '../models';
import React from 'react';

type InitialProps<T> = Single<T> | Multiple<T>;

type SelectorProps<T> = {
  hide?: boolean;
} & InitialProps<T>;

export type Event<T> = {
  action: 'add' | 'remove';
  items: T[]
}

type Single<T> = {
  multiple?: false;
  selected?: T;
  handleSelected?: (item: T, event?: Event<T>) => void;
}

type Multiple<T> = {
  multiple: true;
  selected?: T[];
  handleSelected?: (item: T[], event?: Event<T>) => void;
}

// const Selector = <T,>(props: SelectorProps<T>) => {
//   return (
//     <div>JMPC</div>
//   );
// };

class Selector<T> extends React.Component<SelectorProps<T>> {
  render() {
    return (
      <div>JMPC</div>
    );
  }
}


const Test = () => {

  return (
    <>
      <Selector<Section>
        multiple
        handleSelected={(item) => {
          console.log(item);
        }}
      />

      <Selector<Section>
        handleSelected={(item) => {
          console.log(item);
        }}
      />
    </>
  );
};

export default Selector;
