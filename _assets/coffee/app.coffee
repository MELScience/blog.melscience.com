define [
  'jquery'
  'utils'
  'vendor/bootstrap/collapse'
  'vendor/bootstrap/tooltip'

  'blocks/ToggleNav'
  'blocks/Accordion'
], (
  $
  utils
  collapse
  tooltip

  ToggleNav
  Accordion
) ->
  $.ajaxSetup
    beforeSend: (xhr, settings) ->
      unless (/^http:.*/.test settings.url) or (/^https:.*/.test settings.url)
        xhr.setRequestHeader "X-CSRFToken", utils.getCookie 'csrftoken'

  plugins = [
    ToggleNav
    Accordion
  ]

  return {
    clean: (ctx)->
      plugin.remove(ctx) for plugin in plugins

    initialize: (ctx)->
      $('[data-toggle="tooltip"]', ctx).tooltip()
      plugin.create(ctx) for plugin in plugins
  }