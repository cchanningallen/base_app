import React from 'react';

var Test = React.createClass({
  displayName: 'Test',

  propTypes: {
  },

  render() {
    return (
      <div>
        <h2 className="text-muted">This the way I test</h2>
        <h3>Next up:</h3>
        <ul>
          <li>Move all current components + dependencies into /client</li>
          <li>Forbid signup and deploy to heroku</li>
          <li>Start using RubyMine + WebStorm</li>
          <li></li>
          <li></li>
        </ul>
      </div>
    );
  }
});

export default Test;
