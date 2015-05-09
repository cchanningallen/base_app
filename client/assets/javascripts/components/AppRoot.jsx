import React from 'react';
import { Navbar } from 'react-bootstrap';
import WorkoutEditor from 'components/WorkoutEditor';

var AppRoot  = React.createClass({
  displayName: 'AppRoot',

  render: function() {
    return(
      <div id="app-root">
        <Navbar brand="Base App" fixedTop={true} />
        <WorkoutEditor />
      </div>
    )
  }
});

export default AppRoot;