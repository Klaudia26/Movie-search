import React from 'react';
import './scroll.scss';

const Scroll = (props) => {
  return <div className="scroll-wrapper">{props.children}</div>;
};

export default Scroll;
