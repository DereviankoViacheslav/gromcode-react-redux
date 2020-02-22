import { createStore, combineReducers } from 'redux'
import usersReduser from './users.reducer';
import counterReduser from './counter.reducer';

const appReduser = combineReducers({
  users: usersReduser,
  counter: counterReduser
});

const store = createStore(appReduser);

export default store;