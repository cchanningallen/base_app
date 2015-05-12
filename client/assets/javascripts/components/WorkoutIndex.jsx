import React from 'react';
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar';
import Button from 'react-bootstrap/lib/Button';
import Backbone from 'backbone';
import _ from 'underscore';
import BackboneReactComponentMixin from 'backbone-react-component';
import Workouts from 'collections/Workouts';
import Workout from 'models/Workout';
import WorkoutView from 'components/WorkoutView';
import WORKOUT_DATA from 'WORKOUT_DATA';

var WorkoutIndex = React.createClass({
  displayName: 'WorkoutIndex',
  mixins: [BackboneReactComponentMixin],

  getInitialState: function() {
    var workoutsData = _.values(WORKOUT_DATA.exampleWorkouts)
    var workoutModels = _.map(workoutsData, function(workoutData) {
      return new Workout(workoutData)
    });
    return { collection: new Workouts(workoutModels) }
  },

  render: function() {
    console.log("this.collection")
    console.log(this.state.collection)
    return(
      <div>
        <div className='row'>
          <div className="col-sm-12">
            <h3>
              Workout Index
            </h3>

            { this.state.collection.map(function(workout) {
                return <div><WorkoutView key={workout.cid} model={workout} /></div>
              })
            }
          </div>
        </div>
      </div>
    )
  }
})

export default WorkoutIndex;
