import React from 'react';
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar';
import Button from 'react-bootstrap/lib/Button';
import Backbone from 'backbone';
import _ from 'underscore';
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

  getInitialState: function() {
    return {
      model: new Workout(WORKOUT_DATA.exampleWorkouts.roundsExample)
    }
  },

  // @TODO For demo - remove
  swapModel: function(demoModelName) {
    this.setState({
      model: new Workout(WORKOUT_DATA.exampleWorkouts[demoModelName])
    })
  },

  render: function() {
    return(
      <div>
        <div className='row'>
          <div className="col-sm-6">
            <h3>
              Workout Editor
            </h3>
          </div>

          <div className="col-sm-5">
            <ButtonToolbar className="inlined pull-right">
              <Button bsSize='xsmall' onClick={_.partial(this.swapModel, "amrapExample")}>Amrap Example</Button>
              <Button bsSize='xsmall' onClick={_.partial(this.swapModel, "roundsExample")}>Rounds Example</Button>
            </ButtonToolbar>
          </div>
        </div>
        <br/>

        <div className='row'>
          <div id='editor' className='col-sm-6'>
            <WorkoutForm model={this.state.model} />
          </div>

          <div id='preview' className='col-sm-5 col-sm-offset-1'>
            <WorkoutView model={this.state.model} />
          </div>


          <div className="col-sm-12">
            <hr/>
            <Test />
          </div>
        </div>
      </div>
    )
  }
})

export default WorkoutEditor;
