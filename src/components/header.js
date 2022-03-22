import React from 'react';

function Header(props) {
  return (
    <div className="header">
      <div className="scores"></div>
      <div className="title">
        <h1>Memory Game</h1>
        <h3>Don't click the same owl twice!</h3>
      </div>
      <div className="scores">
        <div className="current--score">Score: {props.score}</div>
        <div className="high--score">Best: </div>
      </div>
    </div>
  );
}

export default Header;
