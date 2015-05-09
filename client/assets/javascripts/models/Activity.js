import Backbone from 'backbone';
import MovementsCollection from 'collections/Movements';
import WORKOUT_DATA from 'WORKOUT_DATA';

export const movementCollection = new MovementsCollection(WORKOUT_DATA.movementData);

var Activity = Backbone.Model.extend({
  name: function() {
    this.movements.get( this.get('activityId') ).get('name')
  }
},
//  class properties
{
  movements: movementCollection
});

export default Activity;
