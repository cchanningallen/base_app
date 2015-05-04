class BA.Models.Workout extends Backbone.Model
  defaults: {
    date:           new Date()
    name:           "My New WOD"
    activityGroups: []
  }

  initialize: ->
    @set('activityGroups', @wrapActivityGroupsData(@get('activityGroups')))

  # Bake this into Backbone.Collection on refactor
  wrapActivityGroupsData: (data) ->
    return data if data instanceof BA.Collections.ActivityGroups
    new BA.Collections.ActivityGroups(data)
