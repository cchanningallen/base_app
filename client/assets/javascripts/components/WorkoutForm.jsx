import React from 'react';
import Input from 'react-bootstrap/lib/Input';
import Backbone from 'backbone';
import BackboneReactComponentMixin from 'backbone-react-component';
import moment from 'moment';
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

  // Needs its own method because the react-bootstrap-datetimepicker onChange
  // passes back the datetime string, not an event variable.
  handleDateChange: function(newDate) {
    console.log(this.state.model.date)
    console.log(newDate);
    this.getModel().set("date", newDate);
  },

  render: function() {
    console.log(this.state.model.date)
    return(
      <form className="row">
        <div className="col-sm-6">
          <Input type="text"
                 value={this.state.model.name}
                 label="Name"
                 name="name"
                 onChange={this.handleChange} />
        </div>

        <div className="col-sm-6">
          <label for="date">Date</label>

        </div>
      </form>
    )
  }
});

export default WorkoutForm;
