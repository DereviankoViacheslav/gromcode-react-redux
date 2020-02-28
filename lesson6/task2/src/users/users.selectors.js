export function isFetchingSelector(state) {
  return state.users.isFetching;
}

export function userDataSelector(state) {
  return state.users.userData;
}