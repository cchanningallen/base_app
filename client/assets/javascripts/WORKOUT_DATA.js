import moment from 'moment';

var WORKOUT_DATA = {
  movementData: [
    { id: 1,
      name: 'power clean',
      type: 'strength',
      units: { required: ['reps', 'weight'], optional: [] },
      mods: []
    },
    { id: 2,
      name: 'overhead squat',
      type: 'strength',
      units: {required: ['reps', 'weight'], optional: [] },
      mods: []
    },
    { id: 3,
      name: 'muscle up',
      type: 'gymnastics',
      units: {required: ['reps'], optional: [] },
      mods: ['rings', 'bar', 'rings strict', 'bar strict']
    },
    { id: 4,
      name: 'pull up',
      type: 'basic',
      units: {required: ['reps'], optional: ['weight'] },
      mods: ['rings', 'bar', 'rings strict', 'bar strict']
    },
    { id: 5,
      name: 'sit up',
      type: 'basic',
      units: {required: ['reps'], optional: ['weight'] },
      mods: ['ab mat', 'GHD', 'weighted ab mat', 'weighted GHD']
    },
    {
      id: 6,
      name: 'rest',
      type: 'basic',
      units: {required: ['time'], optional: [] },
      mods: []
    }
  ],
  exampleWorkouts: {
    amrapExample: {
      name: 'AMRAP wod example 1',
      date: moment().format("MM/DD/YYYY"),
      activityGroups: [
        { order: 1,
          type: 'amrap',
          details: { time: "12:00" },
          scoreData: {rounds: 5, reps: 12 },
          activities: [
            {order: 1, movementId: 5, data: {reps: 15, mod: 'ab mat'} },
            {order: 2, movementId: 6, data: {time: '00:30'} }
          ]
        }
      ]
    },
    roundsExample: {
      name: 'Rounds wod example 1',
      date: moment().subtract(1, "days").format("MM/DD/YYYY"),
      activityGroups: [
        { order: 1,
          type: 'rounds',
          details: { rounds: 3 },
          scoreData: { time: "8:36" },
          activities: [
            {order: 1, movementId: 2, data: {reps: 15, weight: 95} },
            {order: 2, movementId: 3, data: {mod: 'rings'} }
          ]
        }
      ]
    }
  }
}

export default WORKOUT_DATA