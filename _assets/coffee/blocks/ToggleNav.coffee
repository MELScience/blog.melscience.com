define [
  'blocks/Abstract'
  'jquery'
], (
  Abstract
  $
) ->
  class ToggleNav extends Abstract
    _namespace: 'toggle'
    _sub_namespace: 'nav'

    destroy: ->
      @render false

    # Events delegation
    delegate: ->
      @el.on "click.#{@_cid}", '> a', =>
        @toggleContainer.apply @, arguments

      $(window).on "click.#{@_cid}", (e)=>
        if not $.contains(@getTarget()[0], e.target) and not $.contains(@el[0], e.target)
          @render false


    undelegate: ->
      @el.off ".#{@_cid}"
      $(window).off ".#{@_cid}"

    # Helpers
    getTarget: ->
      @_target = @_target or $(@el.data('target'))

    # Events handlers
    toggleContainer: (e)->
      e.preventDefault()
      @render !@el.hasClass('active')


    # Render methods
    render: (state)->
      block = @getTarget()

      if state
        @el.addClass 'active'
        block.addClass 'in'
        $(":text", block).first().focus()
      else
        @el.removeClass 'active'
        block.removeClass 'in'
