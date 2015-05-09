import React from 'react';
import ReactBootstrap from 'react-bootstrap';
import Backbone from 'backbone';
import BackboneReactComponentMixin from 'backbone-react-component';
import Workout from 'models/Workout';
import WorkoutForm from 'components/WorkoutForm';
import WorkoutView from 'components/WorkoutView';
import Test from 'components/Test';
import WORKOUT_DATA from 'WORKOUT_DATA';

// Root component, HBIC of rendering all other workout editor components
var WorkoutEditor = React.createClass({
  displayName: 'WorkoutEditor',
  mixins: [BackboneReactComponentMixin],

  propTypes: {
    model: React.PropTypes.instanceOf(Workout)
  },

  getDefaultProps: function() {
    return {
      model: new Workout(WORKOUT_DATA.exampleWorkouts.amrapExample)
    }
  },

  render: function() {
    return(
      <div className='row'>
        <div className="col-sm-12">
          <h3>Workout Editor</h3>
        </div>

        <div id='editor' className='col-sm-6'>
          <WorkoutForm model={this.props.model} />
        </div>

        <div id='preview' className='col-sm-5 col-sm-offset-1'>
          <WorkoutView model={this.props.model} />
        </div>


        <div className="col-sm-12">
          <hr/>
          <Test />
        </div>
      </div>
    )
  }
})

export default WorkoutEditor;
