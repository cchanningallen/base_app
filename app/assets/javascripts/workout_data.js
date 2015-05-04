BA.WORKOUT_EDITOR_DATA = {
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
      date: new Date(),
      activityGroups: [
        { order: 1,
          type: 'amrap',
          scoreData: {rounds: 5, reps: 12 },
          activities: [
            {order: 1, activityId: 5, data: {reps: 15, mod: 'ab mat'} },
            {order: 2, activityId: 6, data: {time: '00:30'} }
          ]
        }
      ]
    }
  }
}
