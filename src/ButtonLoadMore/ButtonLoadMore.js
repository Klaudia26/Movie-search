import React, { Component } from 'react';
import './ButtonLoadMore.scss';

class ButtonLoadMore extends Component {
  render() {
    return (
      <button className="btn btn--loadMore" onClick={this.props.handleLoadMore}>
        load more
      </button>
    );
  }
}

export default ButtonLoadMore;
