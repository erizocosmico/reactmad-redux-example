export var INPUT_CHANGED = 'INPUT_CHANGED';

export function inputChanged(text) {
  return {
    type: INPUT_CHANGED,
    text
  };
}
