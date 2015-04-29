define [
  'jquery'
  'utils'
], (
  $
  utils
)->
  class Abstract
    # private cid counter
    cid = 0

    # Constructor
    constructor: (options)->
      @_cid = "#{@_namespace}#{cid++}"
      @options = $.extend true, {}, (@defaults or {}), options

      if @options.el
        el = @options.el
        delete @options.el
      else
        el = '<div>'
      @ensureElement el

      if (ns = @_getElementNs())
        inst = @el.data ns
        if inst instanceof @constructor
          inst.destructor()
        @el.data ns, @

      @init(options)

    # Destructor
    destructor: ->
      if @el
        @undelegate()
        @el.removeData(ns) if (ns = @_getElementNs())
      @destroy()

    # Namespace helpers
    _getElementNs: (obj=@)->
      return obj?._namespace or null

    _getDataSelector: (obj=@)->
      str = null

      if (ns = obj?._namespace)
        str = "data-#{ns}"

      if str and (sub_ns = obj?._sub_namespace)
        str = "#{str}=\"#{sub_ns}\""

      return "[#{str}]" if str
      return null

    $: (selector)->
      @el.find(selector)

    ensureElement: (el)->
      @undelegate() if @el

      if el
        @el = $(el)
        @delegate()

    # Abstract mock methods
    init: ->
    destroy: ->
    delegate: ->
    undelegate: ->


    # Location working helpers
    redirectPage: (path)->
      window.location = path
    reloadPage: ()->
      window.location.reload()

    i18n: ->
      utils.i18n.apply utils, arguments

  # Static methods
  Abstract.create = (ctx)->
    if (selector = @::_getDataSelector(@::))
      $(selector, ctx).each (i, el)=>
        klass = @

        new klass({
          el: el
        })

  Abstract.remove = (ctx)->
    if (selector = @::_getDataSelector(@::))
      $(selector, ctx).each (i, el)=>
        el = $(el)

        if (ns = @::_getElementNs(@::))
          inst = el.data ns
          inst.destructor() if inst instanceof @


  return Abstract