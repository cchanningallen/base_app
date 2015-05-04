import React from 'react';

const Test = React.createClass({
  displayName: 'Test',

  propTypes: {
  },

  render() {
    return (
      <div className='test'>
        <h2 className="text-muted">This the way I test</h2>
        <hr/>
        <h3>Next up:</h3>
        <ul>
          <li>Use installed Backbone component package successfully. Do any additional changes need to be made? Just import straight into the file? Try it out.</li>
          <li>Forbid signup and deploy to heroku</li>
          <li>Move all current components + dependencies into /client</li>
          <li></li>
        </ul>
      </div>
    );
  }
});

export default Test;
