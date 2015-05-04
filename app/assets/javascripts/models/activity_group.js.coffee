#= require collections/activities

class BA.Models.ActivityGroup extends Backbone.Model
  initialize: ->
    @set('activities', @wrapActiviesData(@get('activities')))

  # Bake this into Backbone.Collection on refactor
  wrapActiviesData: (data) ->
    return data if data instanceof BA.Collections.Activities
    new BA.Collections.Activities(data)
