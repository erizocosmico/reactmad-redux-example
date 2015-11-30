import {assert} from 'chai'
import * as actions from '../../../src/actions/form'

describe('form actions', () => {
    it('should create an action to change input', () => {
        const text = 'Hello wordl!';
        const expectedAction = {
            type: actions.INPUT_CHANGED,
            text
        };
        assert.deepEqual(actions.inputChanged(text), expectedAction)
    });
});