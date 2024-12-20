import { initialState } from './counter.state';
import { createReducer, on } from '@ngrx/store';
import * as CounterActions from './counter.actions';

const _counterReducer = createReducer(
  initialState,

  on(CounterActions.increment, (state) => {
    return {
      ...state,
      counter: state.counter + 1
    };
  }),

  on(CounterActions.decrement, (state) => {
    return {
      ...state,
      counter: state.counter - 1
    };
  }),

  on(CounterActions.reset, (state) => {
    return {
      ...state,
      counter: 0
    };
  }),

  on(CounterActions.customIncrement, (state, action) => {
    return {
      ...state,
      counter: action.action == 'add' ? state.counter + action.value : state.counter - action.value
    };
  }),

  on(CounterActions.changeChannelName, (state, action) => {
    return {
      ...state,
      channelName: action.channel
    };
  }),
);

export function counterReducer(state: any, action: any) {
  return _counterReducer(state, action);
}

