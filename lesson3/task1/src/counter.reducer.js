import { INCREMENT, DECREMENT, RESET } from './counter.actions';

export default function counterReducer(state = 0, action) {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        counter: state + 1
      };
    case DECREMENT:
      return {
        ...state,
        counter: state - 1
      };
    case RESET:
      return {
        ...state,
        counter: 0
      };
    default:
      return state;
  }
}