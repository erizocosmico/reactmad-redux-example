import {
  FAV_TWIST,
  NEW_TWIST,
  RETWIST
} from '../actions/twist';

let initialState = [];
let id = 0;

export default function twistReducer(state = initialState, action = {}) {
  switch (action.type) {
  case FAV_TWIST:
    return state.map(function (t) {
      if (t.id === action.id) {
        t.favorited = true;
      }
      return t;
    });
  case NEW_TWIST:
    return [twist(action.text), ...state];
  case RETWIST:
    return [retwist(state, action.id), ...state];
  default:
    return state;
  }
}

function retwist(twists, id) {
  for (let t of twists) {
    if (t.id === id) {
      return Object.assign({}, t, { retwisted: true, id: ++id });
    }
  }
}

function twist(text) {
  return {
    id: ++id,
    username: 'twinklebee',
    time: new Date(),
    favorited: false,
    retwisted: false,
    text
  };
}
