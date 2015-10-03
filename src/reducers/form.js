import { INPUT_CHANGED } from '../actions/form';

let initialState = {
  text: ''
};

export default function formReducer(state = initialState, action = {}) {
  switch (action.type) {
  case INPUT_CHANGED:
    return Object.assign({}, state, { text: action.text });
  default:
    return state;
  }
}
