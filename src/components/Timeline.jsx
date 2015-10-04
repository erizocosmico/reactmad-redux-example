import React from 'react';
import { connect } from 'react-redux';

import Form from './Form';
import Twist from './Twist';
import { favorite, retwist } from '../actions/twist';

const Timeline = React.createClass({
  onFav(id) {
    this.props.dispatch(favorite(id));
  },

  onRetwist(id) {
    this.props.dispatch(retwist(id));
  },

  render() {
    const twists = this.props.twists.map(t => {
      return (
        <Twist twist={t} key={t.id}
          retwist={() => this.onRetwist(t.id)}
          fav={() => this.onFav(t.id)} />
      );
    });

    return (
      <div className='timeline'>
        <div className='wrap'>
          <Form />
          <div className='twist-list'>
            {twists}
          </div>
        </div>
      </div>
    );
  }
});

export default connect(state => ({ twists: state.twist }))(Timeline);
