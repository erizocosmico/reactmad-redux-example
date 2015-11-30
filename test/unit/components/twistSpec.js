import {assert} from 'chai'
import sinon from 'sinon'
import React from 'react'
import TestUtils from 'react-addons-test-utils'
import Twist from '../../../src/components/Twist.jsx'

function setup() {
    let props = {
        twist: {
            id: 1,
            username: 'twinklebee',
            time: new Date(),
            favorited: false,
            retwisted: false,
            text: 'McNulty rulez!'
        },
        retwist: sinon.spy(),
        fav: sinon.spy()
    };

    let renderer = TestUtils.createRenderer();
    renderer.render(<Twist {...props} />);
    let output = renderer.getRenderOutput();

    return {props, output, renderer}
}

describe('Twist Component', () => {
    it('should render correctly', () => {
        const { props, output } = setup();

        assert.equal(output.type, 'div');
        assert.equal(output.props.className, 'twist');

        let [avatar, username, date, text] = output.props.children;

        assert.equal(avatar.type, 'div');
        assert.equal(avatar.props.className, 'twist__avatar');

        assert.equal(username.props.children.join(''), '@' + props.twist.username);
        assert.equal(date.props.children, props.twist.time.toString());
        assert.equal(text.props.children, props.twist.text);
    });


    it('should call retwist', () => {
        const { output, props } = setup();
        let retwist = output.props.children[4];
        retwist.props.onClick();
        sinon.assert.calledOnce(props.retwist);
    });


    it('should call addTodo', () => {
        const { output, props } = setup();
        let fav = output.props.children[5];
        fav.props.onClick();
        sinon.assert.calledOnce(props.fav);
    });
});

