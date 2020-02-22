import store from './store';
import { setUser, removeUser } from './user.actions';
import { addProduct, removeProduct } from './cart.actions';
import { setLanguage } from './language.actions';

store.subscribe(() => console.log(store.getState()));

store.dispatch(setUser({ name: 'Sarah' }));
store.dispatch(removeUser());
store.dispatch(addProduct({ id: 77, name: 'Banana' }));
store.dispatch(addProduct({ id: 78, name: 'Orange' }));
store.dispatch(addProduct({ id: 178, name: 'Fish' }));
store.dispatch(removeProduct(178));
store.dispatch(setLanguage('ru'));
