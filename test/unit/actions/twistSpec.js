import {assert} from 'chai'
import * as actions from '../../../src/actions/twist'

describe('twist actions', () => {
    it('should create an action to retwist', () => {
        const id = 1;
        const expectedAction = {
            type: actions.RETWIST,
            id
        };
        assert.deepEqual(actions.retwist(id), expectedAction)
    });

    it('should create an action to favor it', () => {
        const id = 1;
        const expectedAction = {
            type: actions.FAV_TWIST,
            id
        };
        assert.deepEqual(actions.favorite(id), expectedAction)
    });

    it('should create an action to change input', () => {
        const text = 'Hello wordl!';
        const expectedAction = {
            type: actions.NEW_TWIST,
            text
        };
        assert.deepEqual(actions.newTwist(text), expectedAction)
    });
});