import React from 'react';
import ReactBootstrap from 'react-bootstrap';
import Backbone from 'backbone';
import BackboneReactComponentMixin from 'backbone-react-component';
import Workout from 'models/Workout';

// Workout view root component
var WorkoutView = React.createClass({
  displayName: 'WorkoutView',
  mixins: [BackboneReactComponentMixin],
  propTypes: {
    model: React.PropTypes.instanceOf(Workout).isRequired
  },
  activityGroups: function() {
    
  },
  render: function() {
    return(
      <div className="workout-view-container">
        <div>Name: {this.state.model.name}</div>
        <div>Date: {this.state.model.date}</div>
      </div>
    )
  }
});

export default WorkoutView;