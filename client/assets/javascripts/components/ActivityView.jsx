import React from 'react';
import ReactBootstrap from 'react-bootstrap';
import _ from 'underscore';
import titleize from 'underscore.string/titleize';
import Backbone from 'backbone';
import BackboneReactComponentMixin from 'backbone-react-component';
import Activity from 'models/Activity';

var ActivityView = React.createClass({
  displayName: "ActivityView",
  mixins: [BackboneReactComponentMixin],
  propTypes: { model: React.PropTypes.instanceOf(Activity).isRequired },

  getInitialState: function() {
    return(
      // Caches movement-related data (name, etc.)
      { movement: this.getModel().getMovement().attributes }
    )
  },

  buildDecoratedActivity: function() {
    var data = this.state.model.data;
    var decoratedActivity = titleize(this.state.movement.name);

    // @TODO make a prop when we enable kg/lbs switching
    var weightUnit = "#";

    if(data.mod){ decoratedActivity = `${decoratedActivity} (${data.mod})` }
    if(data.reps){ decoratedActivity = `${data.reps} x ${decoratedActivity}` }
    if(data.time){ decoratedActivity = `${decoratedActivity} ${data.time}` }
    if(data.weight){ decoratedActivity = `${decoratedActivity}, ${data.weight}${weightUnit}` }

    return `${decoratedActivity}`
  },

  render: function () {
    return(
      <div>{this.buildDecoratedActivity()}</div>
    )
  }
});

export default ActivityView;