import { createStore, combineReducers } from 'redux'
import usersReduser from './users/users.reducer';

const appReduser = combineReducers({
  users: usersReduser,
});

const store = createStore(
  appReduser,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;