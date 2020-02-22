import { ADD_USER, DELETE_USER, UPDATE_USER } from './users.actions'

const initialState = {
  usersList: []
};

export default function reduser(state = initialState, action) {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        usersList: [...state.usersList, action.payload.userData]
      };
    case DELETE_USER:
      return {
        ...state,
        usersList: state.usersList.filter(({ id }) => id !== action.payload.userId)
      };
    case UPDATE_USER:
      const newUsersList = state.usersList.map((user) => {
        if (user.id !== action.payload.userId) return user;
        return { ...user, ...action.payload.userData }
      });
      return {
        ...state,
        usersList: newUsersList
      };
    default:
      return state;
  }
}