import { createStore } from 'redux'
import reduser from './users.reducer';

const store = createStore(reduser);

export default store;