import { createSelector } from 'reselect';

export function usersListSelector(state) {
  return state.users.usersList;
}

export function filterTextSelector(state) {
  return state.users.filterText;
}

export const filteredUsersSelector = createSelector(
  [usersListSelector, filterTextSelector],
  (usersList, filterText) => {
    return usersList.filter((user) => {
      return user.name.toLowerCase().includes(filterText.toLowerCase())
    });
  }
);