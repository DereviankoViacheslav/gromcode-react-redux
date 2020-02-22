import { ADD_PRODUCT, REMOVE_PRODUCT } from './cart.actions'

const initialState = {
  products: []
};

export default function reduser(state = initialState, action) {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        products: state.products.concat(action.payload.product)
      };
    case REMOVE_PRODUCT:
      return {
        ...state,
        products: state.products.filter(({ id }) => id !== action.payload.productId)
      };
    default: return state;
  }
}