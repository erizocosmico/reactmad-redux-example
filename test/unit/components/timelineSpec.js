import {assert} from 'chai'
import sinon from 'sinon'
import React from 'react'
import TestUtils from 'react-addons-test-utils'
import {Timeline} from '../../../src/components/Timeline.jsx'

function setup() {
    let props = {
        dispatch: sinon.spy(),
        twists: [
            {
                id: 1,
                username: 'twinklebee',
                time: new Date(),
                favorited: false,
                retwisted: false,
                text: 'McNulty rulez!'
            },
            {
                id: 2,
                username: 'twinklebee',
                time: new Date(),
                favorited: false,
                retwisted: false,
                text: 'Omar Little for President!'
            }
        ]
    };

    let renderer = TestUtils.createRenderer();
    renderer.render(<Timeline {...props} />);
    let output = renderer.getRenderOutput();

    return {props, output, renderer}
}

describe('Timeline component', () => {
    it('should render correctly', () => {
        const { props, output } = setup();

        assert.equal(output.type, 'div');
        assert.equal(output.props.className, 'timeline');

        let twistElems = output.props.children.props.children[1].props.children;
        assert.equal(twistElems.length, props.twists.length);
        assert.equal(twistElems[0].type.displayName, 'Twist');
    });
});

