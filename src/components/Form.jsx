import React from 'react';
import { connect } from 'react-redux';

import { newTwist } from '../actions/twist';
import { inputChanged } from '../actions/form';

export const Form = React.createClass({
  onSubmit(e) {
    e.preventDefault();
    const text = this.props.form.text;
    if (text.length > 140) return;

    this.props.dispatch(newTwist(text));
    this.props.dispatch(inputChanged(''));
  },

  onChange(e) {
    this.props.dispatch(inputChanged(e.target.value));
  },

  render() {
    const len = this.props.form.text.length;
    return (
      <div className='twist__form'>
        <form onSubmit={this.onSubmit}>
          <textarea value={this.props.form.text} onChange={this.onChange}
            placeholder='What is going on?' />
          <span className={'character-count' + (len >= 140 ? ' red' : '')}>
            {len}
          </span>
          <button type='submit'>Send twist</button>
        </form>
      </div>
    );
  }
});

export default connect(state => ({ form: state.form }))(Form);
