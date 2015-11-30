import {assert} from 'chai'
import sinon from 'sinon'
import React from 'react'
import TestUtils from 'react-addons-test-utils'
import {Form} from '../../../src/components/Form.jsx'

function setup() {
    let props = {
        dispatch: sinon.spy(),
        form: {
            text: 'foo'
        }
    };

    let renderer = TestUtils.createRenderer();
    renderer.render(<Form {...props} />);
    let output = renderer.getRenderOutput();

    return {props, output, renderer}
}

describe('Form component', () => {
    it('should render correctly', () => {
        const { props, output } = setup();

        assert.equal(output.type, 'div');
        assert.equal(output.props.className, 'twist__form');

        let form = output.props.children;
        assert.equal(form.type, 'form');

        let [textarea, span, button] = form.props.children;
        assert.equal(textarea.type, 'textarea');
        assert.equal(textarea.props.value, props.form.text);

        assert.equal(span.type, 'span');
        assert.equal(span.props.children, props.form.text.length);

        assert.equal(button.type, 'button');
    });


    it('should call dispatch once on change', () => {
        const { output, props } = setup();
        let textarea = output.props.children.props.children[0];

        textarea.props.onChange({target:{value: 'foo'}});
        sinon.assert.calledOnce(props.dispatch);
    });


    it('should call dispatch twice and preventDefault once on submit', () => {
        const { output, props } = setup();
        let form = output.props.children;
        const preventDefault = sinon.spy();
        form.props.onSubmit({preventDefault});

        sinon.assert.calledOnce(preventDefault);
        sinon.assert.calledTwice(props.dispatch);
    });
});

