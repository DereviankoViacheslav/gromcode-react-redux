import store from './store';
import { addUser, deleteUser, updateUser } from './users.actions';
import { increment, decrement, reset } from './counter.actions';

store.subscribe(() => console.log(store.getState()));

store.dispatch(addUser({ id: 76, name: 'Sarah' }));
store.dispatch(addUser({ id: 77, name: 'Tom' }));
store.dispatch(deleteUser(77));
store.dispatch(addUser({ id: 78, name: 'Bob' }));
store.dispatch(updateUser(76, { name: 'Sarah Conor' }));
store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(reset());
store.dispatch(decrement());
store.dispatch(decrement());
