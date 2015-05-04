//= require models/workout

// Workout form base
BA.Components.WorkoutForm = React.createClass({
  displayName: "WorkoutForm",
  mixins: [Backbone.React.Component.mixin],

  propTypes: {
    model: React.PropTypes.instanceOf(BA.Models.Workout).isRequired
  },

  handleChange: function(event) {
    this.getModel().set(event.target.ref, event.target.value);
  },

  render: function() {
    return(
      <div className="workout-form-container">
        <div className="workout-name-container">
          <ReactBootstrap.Input type="text" value={this.state.model.name} label="Name" ref="name" onChange={this.handleChange} />
        </div>
        <div className="workout-date-container">
          <ReactBootstrap.Input type="text" value={this.state.model.date} label="Date" ref="date" onChange={this.handleChange} />
        </div>
      </div>
    )
  }
});

