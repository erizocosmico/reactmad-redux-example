import {assert} from 'chai'
import * as actions from '../../../src/actions/form'
import reducer from '../../../src/reducers/form';

describe('form reducer', () => {
    it('should return the initial state', () => {
        assert.deepEqual(
            reducer(undefined, {}),
            {text: ''}
        );
    });

    it('should handle INPUT_CHANGED', () => {
        assert.deepEqual(
            reducer(undefined, {
                type: actions.INPUT_CHANGED,
                text: 'McNulty rulez!'
            }),
            {text: 'McNulty rulez!'});

        assert.deepEqual(
            reducer(
                {text: 'McNulty rulez!'},
                {
                    type: actions.INPUT_CHANGED,
                    text: 'Omar Little for President!'
                }
            ), {text: 'Omar Little for President!'}
        )
    })
});