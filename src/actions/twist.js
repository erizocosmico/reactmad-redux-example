export var RETWIST = 'RETWIST';
export var FAV_TWIST = 'FAV_TWIST';
export var NEW_TWIST = 'NEW_TWIST';

export function retwist(id) {
  return {
    type: RETWIST,
    id
  };
}

export function favorite(id) {
  return {
    type: FAV_TWIST,
    id
  };
}

export function newTwist(text) {
  return {
    type: NEW_TWIST,
    text
  };
}
