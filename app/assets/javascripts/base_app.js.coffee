# For monkey-patching mixins with Cocktail https://github.com/onsi/cocktail
Cocktail.patch(Backbone);

window.BA =
  Models: {}
  Collections: {}
  Components: {}
  Mixins: {}
  initialize: -> console.log 'Hello from Backbone!'

$(document).ready ->
  BA.initialize()
