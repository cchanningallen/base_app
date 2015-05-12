import React from 'react';
import ReactBootstrap from 'react-bootstrap';
import Backbone from 'backbone';
import BackboneReactComponentMixin from 'backbone-react-component';
import ActivityGroup from 'models/ActivityGroup';
import ActivityView from 'components/ActivityView';

var ActivityGroupView = React.createClass({
  displayName: "ActivityGroupView",
  mixins: [BackboneReactComponentMixin],
  propTypes: { model: React.PropTypes.instanceOf(ActivityGroup).isRequired },

  activitiesView: function() {
    return(
      <div>
        { this.state.model.activities.map( function(activity) {
            return <ActivityView key={activity.cid} model={activity} />
          })
        }
      </div>
    )
  },

  amrapView: function() {
    console.log(this.state.model)
    return(
      <div>
        <strong>AMRAP {this.state.model.details.time}</strong>
        {this.activitiesView()}
      </div>
    )
  },

  roundsView: function() {
    return(
      <div>
        <strong>{this.state.model.details.rounds} Rounds</strong>
        {this.activitiesView()}
      </div>
    )
  },

  basicView: function() {
    return(
      <strong>Basic</strong>
    )
  },

  render: function () {
    if (this.state.model.type == "amrap") {
      return this.amrapView()
    } else if (this.state.model.type == "rounds") {
      return this.roundsView()
    } else {
      return this.basicView()
    }
  }
});

export default ActivityGroupView;