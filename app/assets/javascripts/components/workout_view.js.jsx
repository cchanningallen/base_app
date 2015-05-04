//= require models/workout

// Workout view root component
BA.Components.WorkoutView = React.createClass({
  displayName: 'WorkoutView',
  mixins: [Backbone.React.Component.mixin],
  propTypes: {
    model: React.PropTypes.instanceOf(BA.Models.Workout).isRequired
  },
  render: function() {
    var _model          = this.state.model,
        name            = _model.name,
        date            = _model.date,
        activityGroups  = _model.activityGroups

    return(
      <div className="workout-view-container">
        <div>Name: {name}</div>
        <div>Date: {date}</div>
      </div>
    )
  }
});
