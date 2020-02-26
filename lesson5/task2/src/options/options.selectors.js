import { createSelector } from 'reselect';

export function optionsListSelector(state) {
  return state.options.optionsList;
}

export function selectedIdsSelector(state) {
  return state.options.selected;
}

export const selectedOptionsSelector = createSelector(
  [optionsListSelector, selectedIdsSelector],
  (allOptionsList, selectedIds) => {
    return allOptionsList.filter((option) => selectedIds.includes(option.id));
  }
);

export const availableOptionsSelector = createSelector(
  [optionsListSelector, selectedIdsSelector],
  (allOptionsList, selectedIds) => {
    return allOptionsList.filter((option) => !selectedIds.includes(option.id));
  }
);