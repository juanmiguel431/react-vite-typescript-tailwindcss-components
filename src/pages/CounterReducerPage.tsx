import React, { Reducer, useReducer } from 'react';
import Button from '../components/Button.tsx';
import Panel from '../components/Panel.tsx';

type CounterPageProps = {}

type State = {
  counter: number;
  valueToAdd: number | null;
}

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

const reducer: Reducer<State, Action> = (state, action) => {
  switch (action.type) {
    case ActionType.Increment:
      return { ...state, counter: state.counter + 1 };
    case ActionType.Decrement:
      return { ...state, counter: state.counter - 1 };
    case ActionType.SetValueToAdd:
      return { ...state, valueToAdd: action.payload };
    case ActionType.SetValueToAddToCount:
      return { ...state, counter: state.valueToAdd ?? 0, valueToAdd: null };
    default:
      return state;
  }
}

const CounterReducerPage: React.FC<CounterPageProps> = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
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
