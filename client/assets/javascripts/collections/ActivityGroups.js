import Backbone from 'backbone';
import ActivityGroup from 'models/ActivityGroup';

var ActivityGroups = Backbone.Collection.extend({
  model: ActivityGroup,
  comparator: 'order'
})

export default ActivityGroups;