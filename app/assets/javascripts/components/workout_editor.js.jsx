//= require models/workout

// Root component, HBIC of rendering all other workout editor components
BA.Components.WorkoutEditor = React.createClass({
  displayName: 'WorkoutEditor',
  mixins: [Backbone.React.Component.mixin],

  propTypes: {
    model: React.PropTypes.instanceOf(BA.Models.Workout).isRequired
  },

  render: function() {
    var model = this.getModel();

    return(
      <div className='row'>
        <div id='editor' className='col-lg-3'>
          <BA.Components.WorkoutForm model={model} />
        </div>

        <div id='preview' className='col-lg-4 col-lg-offset-1'>
          <BA.Components.WorkoutView model={model} />
        </div>
      </div>
    )
  }
})

