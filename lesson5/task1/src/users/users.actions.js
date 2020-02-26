export const GO_PREV = 'GO_PREV';
export const GO_NEXT = 'GO_NEXT';

export function goPrev() {
  return { type: GO_PREV };
};

export function goNext() {
  return { type: GO_NEXT };
};