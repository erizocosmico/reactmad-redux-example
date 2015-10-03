import React from 'react';

const Twist = React.createClass({
  retwist() {
    if (this.props.twist.retwist) return;
    this.props.retwist();
  },

  fav() {
    if (this.props.twist.favorited) return;
    this.props.fav();
  },
  
  render() {
    return (
      <div className='twist'>
        <div className='twist__avatar' />
        <div className='twist__username'>{this.props.twist.username}</div>
        <div className='twist__date'>{this.props.twist.time.toString()}</div>
        <p>{this.props.twist.text}</p>
        <button className={'retwist' + (this.props.twist.retwisted ? ' retwisted': '')}
          onClick={this.retwist} />
        <button className={'fav' + (this.props.twist.favorited ? ' faved': '')}
            onClick={this.fav} />
      </div>
    );
  }
});

export default Twist;
