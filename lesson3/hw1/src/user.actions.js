export const SAVE_USER_DATA = 'SAVE_USER_DATA';
export const REMOVE_USER_DATA = 'REMOVE_USER_DATA';

export function setUser(userData) {
  return {
    type: SAVE_USER_DATA,
    payload: { userData }
  };
};

export function removeUser() {
  return {
    type: REMOVE_USER_DATA,
  };
};