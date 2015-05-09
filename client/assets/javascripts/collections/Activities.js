import Backbone from 'backbone';
import Activity from 'models/Activity';

var Activities = Backbone.Collection.extend({
  model: Activity,
  comparator: 'order'
});

export default Activities;