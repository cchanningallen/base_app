import React from 'react';
import ReactBootstrap from 'react-bootstrap';
import Backbone from 'backbone';
import BackboneReactComponentMixin from 'backbone-react-component';
import moment from 'moment';
import Workout from 'models/Workout';
import ActivityGroupView from 'components/ActivityGroupView';

// Workout view root component
var WorkoutView = React.createClass({
  displayName: 'WorkoutView',
  mixins: [BackboneReactComponentMixin],
  propTypes: {
    model: React.PropTypes.instanceOf(Workout).isRequired
  },
  activityGroupsView: function() {
    console.log('this.state.model.activityGroups')
    console.log(this.state.model.activityGroups)
    return(
      <div>
        { this.state.model.activityGroups.map( function( activityGroup ) {
           return <ActivityGroupView model={ activityGroup } />
          })
        }
      </div>
    )
  },
  render: function() {
    console.log("calling render() in WorkoutView")
    console.log("this.state.model.dateTime")
    console.log(this.state.model.dateTime)
    var formattedDate = moment(this.state.model.date).format("dddd, MMMM Do")
    return(
      <div className="workout-view-container">
        <div>Name: {this.state.model.name}</div>
        <div>Date: {formattedDate}</div>
        <br/>
        { this.activityGroupsView() }
      </div>
    )
  }
});

export default WorkoutView;