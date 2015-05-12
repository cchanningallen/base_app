import Backbone from 'backbone';
import ActivityGroups from 'collections/ActivityGroups';

var Workout = Backbone.Model.extend({
  defaults: {
    date: new Date(),
    name: "My New WOD",
    activityGroups: []
  },

  initialize: function() {
    console.log("called initialize in Workout")
    this.set('activityGroups',
      this.wrapActivityGroupsData( this.get('activityGroups') )
    )
  },

  wrapActivityGroupsData: function(data) {
    console.log("called wrapActivityGroupsData in Workout")
    if(data instanceof ActivityGroups){ return(data) };
    return(new ActivityGroups(data));
  }
})

export default Workout;
