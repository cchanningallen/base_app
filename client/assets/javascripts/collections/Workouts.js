import Backbone from 'backbone';
import Workout from 'models/Workout';

class Workouts extends Backbone.Collection {
  model: Workout
}

export default Workouts;


