import React, { Component } from 'react';

class ButtonLoadMore extends Component {
  render() {
    return (
      <button className="btn" onClick={this.props.handleLoadMore}>
        load more
      </button>
    );
  }
}

export default ButtonLoadMore;
