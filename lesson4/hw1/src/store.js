import { createStore, combineReducers } from 'redux'
import usersReduser from './users/users.reducer';

const store = createStore(
  usersReduser,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;