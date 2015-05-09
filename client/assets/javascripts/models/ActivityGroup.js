import Backbone from 'backbone';
import Activities from 'collections/Activities';

var ActivityGroup = Backbone.Model.extend({
  initialize: function() {
    this.set('activities', this.wrapActivitiesData(this.get('activities')));
  },

  wrapActivitiesData: function(data) {
    if(data instanceof Activities) {
      return(data);
    };

    return(new Activities(data))
  }
});

export default ActivityGroup;
