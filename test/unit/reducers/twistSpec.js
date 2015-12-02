import {assert} from 'chai'
import * as actions from '../../../src/actions/twist'
import reducer from '../../../src/reducers/twist';

describe('twist reducer', () => {
    it('should return the initial state', () => {
        assert.deepEqual(reducer(undefined, {}), []);
    });

    it('should handle FAV_TWIST', () => {
        let currentState = [{
            id: 1,
            username: 'twinklebee',
            time: new Date(),
            favorited: false,
            retwisted: false,
            text: 'McNulty rulez!'
        }];

        let newState = reducer(currentState, {
            type: actions.FAV_TWIST,
            id: 1
        });

        assert.equal(newState[0].favorited, true);
    });

    it('should handle NEW_TWIST', () => {
        let newState = reducer(undefined, {
            type: actions.NEW_TWIST,
            text: 'McNulty rulez!'
        });

        assert.equal(
            newState[0].text,
            'McNulty rulez!'
        );

        let newNewState = reducer(
            newState,
            {
                type: actions.NEW_TWIST,
                text: 'Omar Little for President!'
            }
        );
        assert.equal(newNewState.length, 2);
        assert.equal(newNewState[0].text, 'Omar Little for President!');
        assert.equal(newNewState[0].id, newState[0].id + 1)
    });

    it('should handle RETWIST', () => {
        let currentState = [{
            id: 1,
            username: 'twinklebee',
            time: new Date(),
            favorited: false,
            retwisted: false,
            text: 'McNulty rulez!'
        }];

        let newState = reducer(
            currentState,
            {
                type: actions.RETWIST,
                id: 1
            }
        );

        assert.equal(newState.length, 2);
        assert.equal(newState[0].text, currentState[0].text);
        assert.equal(newState[0].retwisted, true);
    })
});