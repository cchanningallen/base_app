# Root object for workout editor. Triggered by #workout_root node. On trigger:
# - Pulls in base data for workout movements (& sample data for demo)
# - Creates the base Workout model
# - Mounts top-level WorkoutEditor react component, backed by the Workout model

class BA.WorkoutEditor
  constructor: (@$el) ->
    @setup()
    @initWorkoutModel(@DATA.exampleWorkouts.amrapExample)
    @render()

  setup: ->
    @DATA = BA.WORKOUT_EDITOR_DATA
    @WorkoutModel = BA.Models.Workout

  initWorkoutModel: (data) ->
    @workoutModel = new @WorkoutModel(data)

  render: ->
    WorkoutEditorView = React.createFactory(BA.Components.WorkoutEditor)
    React.render(WorkoutEditorView({model: @workoutModel}), document.getElementById('workout_root'))

# Initialize the class if it finds #workout_root on the page.  Ensures code
# will only be called for the appropriate view.
$ ->
  $el = $("#workout_root")
  window.editor = new BA.WorkoutEditor($el) if $el.length > 0
  window.activity = editor.workoutModel.get('activityGroups').first().get('activities').first()
