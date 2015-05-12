import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import _ from 'underscore';
import WorkoutEditor from 'components/WorkoutEditor';
import WorkoutIndex from 'components/WorkoutIndex';
import NewTest from 'components/NewTest';

var AppRoot  = React.createClass({
  displayName: 'AppRoot',
  getInitialState: function(){
    return({view: "edit"})
  },
  switchView: function(view){
    this.setState({view: view})
  },
  getMainView: function(){
    if(this.state.view == "edit"){
      return <WorkoutEditor />
    } else if(this.state.view == "index") {
      return <WorkoutIndex />
    }
  },
  render: function() {
    return(
      <div id="app-root">
        <Navbar brand="Base App" fixedTop={true} >
          <Nav>
            <NavItem eventKey={1} onClick={_.partial(this.switchView, 'edit')} href='#'>Build Workout</NavItem>
            <NavItem eventKey={2} onClick={_.partial(this.switchView, 'index')} href='#'>View Workouts</NavItem>
          </Nav>
        </Navbar>
        { this.getMainView() }
        <NewTest />
      </div>
    )
  }
});

export default AppRoot;