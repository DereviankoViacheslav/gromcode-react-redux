import { getUserData } from './users.gateway';

export const SHOW_SPINNER = 'SHOW_SPINNER';
export const USER_DATA_RECIEVED = 'USER_DATA_RECIEVED';

export function showSpinner() {
  return {
    type: SHOW_SPINNER,
  };
}

export function userDataRecieved(userData) {
  return {
    type: USER_DATA_RECIEVED,
    payload: { userData },
  };
}

export function fetchUserData(userName) {
  return function (dispatch) {
    dispatch(showSpinner());
    getUserData(userName)
      .then((userData) => {
        dispatch(userDataRecieved(userData));
      });
  };
}