import React, { Reducer, useReducer } from 'react';
import { Draft, Immutable, produce } from 'immer';
import Button from '../components/Button.tsx';
import Panel from '../components/Panel.tsx';

type CounterPageProps = {}

type State = Immutable<{
  counter: number;
  valueToAdd: number | null;
}>

const initialState: State = {
  counter: 10,
  valueToAdd: null
}

enum ActionType {
  Increment = 'Increment',
  Decrement = 'Decrement',
  SetValueToAdd = 'SetValueToAdd',
  SetValueToAddToCount = 'SetValueToAddToCount',
}

type SetValueToAddAction = {
  type: ActionType.SetValueToAdd,
  payload: number | null,
}

type SetValueToAddToCountAction = {
  type: ActionType.SetValueToAddToCount,
}

type IncrementAction = {
  type: ActionType.Increment
}

type DecrementAction = {
  type: ActionType.Decrement
}

type Action = IncrementAction | DecrementAction | SetValueToAddAction | SetValueToAddToCountAction;

const reducer = (state: Draft<State>, action: Action) => {
  switch (action.type) {
    case ActionType.Increment:
      state.counter += 1;
      break;
    case ActionType.Decrement:
      state.counter -= 1;
      break;
    case ActionType.SetValueToAdd:
      state.valueToAdd = action.payload;
      break;
    case ActionType.SetValueToAddToCount:
      state.counter = state.valueToAdd ?? 0;
      state.valueToAdd = null;
      break;
  }
}

const CounterReducerPage: React.FC<CounterPageProps> = () => {
  const [state, dispatch] = useReducer(produce(reducer), initialState);
  const { counter, valueToAdd } = state;
  return (
    <div>
      <Panel className="m-3">
        <h1 className="text-lg">Count is {counter}</h1>
        <div className="flex justify-start">
          <Button
            secondary
            onClick={() => dispatch({ type: ActionType.Decrement })}
          >Decrement
          </Button>
          <Button
            primary
            onClick={() => dispatch({ type: ActionType.Increment })}
          >Increment
          </Button>
        </div>

        <input
          type="number"
          min={0}
          value={valueToAdd ?? ''}
          onChange={evt => {
            const value = evt.target.value === '' ? null : +evt.target.value;
            dispatch({ type: ActionType.SetValueToAdd, payload: value })
          }}
        />
        <Button
          primary
          disabled={valueToAdd === null}
          onClick={() => dispatch({ type: ActionType.SetValueToAddToCount })}
        >Add it!
        </Button>
      </Panel>
    </div>
  );
};

export default CounterReducerPage;
