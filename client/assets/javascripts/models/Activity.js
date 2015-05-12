import Backbone from 'backbone';
import MovementsCollection from 'collections/Movements';
import WORKOUT_DATA from 'WORKOUT_DATA';

export const movementCollection = new MovementsCollection(WORKOUT_DATA.movementData);

var Activity = Backbone.Model.extend({
  getMovement: function() {
    return this.constructor.movements.get( this.get('movementId') )
  }
},
//  class properties
{
  movements: movementCollection
});

export default Activity;
