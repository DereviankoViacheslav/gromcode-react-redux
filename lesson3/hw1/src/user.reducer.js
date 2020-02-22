import { SAVE_USER_DATA, REMOVE_USER_DATA } from './user.actions'

export default function reduser(state = null, action) {
  switch (action.type) {
    case SAVE_USER_DATA:
      return {
        ...state,
        ...action.payload.userData
      };
    case REMOVE_USER_DATA:
      return null;
    default: return state;
  }
}