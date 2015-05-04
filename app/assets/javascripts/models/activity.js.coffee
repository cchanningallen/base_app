#= require collections/movements

class BA.Models.Activity extends Backbone.Model
  movements: new BA.Collections.Movements(BA.WORKOUT_EDITOR_DATA.movementData)

  name: ->
    @movements.get(@get('activityId')).get('name')
