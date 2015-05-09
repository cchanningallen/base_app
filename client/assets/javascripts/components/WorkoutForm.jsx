import React from 'react';
import ReactBootstrap from 'react-bootstrap';
import Backbone from 'backbone';
import BackboneReactComponentMixin from 'backbone-react-component';
import Workout from 'models/Workout';

// Workout form base
var WorkoutForm = React.createClass({
  displayName: "WorkoutForm",
  mixins: [BackboneReactComponentMixin],

  propTypes: {
    model: React.PropTypes.instanceOf(Workout).isRequired
  },

  handleChange: function(e) {
    e.preventDefault();
    this.getModel().set(e.target.name, e.target.value);
  },

  render: function() {
    return(
      <div className="workout-form-container">
        <div className="workout-name-container">
          <ReactBootstrap.Input type="text"
                                value={this.state.model.name}
                                label="Name"
                                name="name"
                                onChange={this.handleChange} />
        </div>
        <div className="workout-date-container">
          <ReactBootstrap.Input type="text"
                                value={this.state.model.date}
                                label="Date"
                                name="date"
                                onChange={this.handleChange} />
        </div>
      </div>
    )
  }
});

export default WorkoutForm;