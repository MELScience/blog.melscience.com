define [
  'blocks/Abstract'
  'jquery'
], (
  Abstract
  $
)->
  class Accordion extends Abstract
    _namespace: 'accordion'

    delegate: ->
      @el
        .on "shown.bs.collapse.#{@_cid}", (e)=>
          @checkHeader e.target
        .on "show.bs.collapse.#{@_cid}", (e)=>
          @toggleHeader e.target, true
        .on "hide.bs.collapse.#{@_cid}", (e)=>
          @toggleHeader e.target, false
    undelegate: ->
      @el.off ".#{@_cid}"

    checkHeader: (el)->
      block = $(el).closest('.panel')
      top = block.offset().top

      if top < $(window).scrollTop()
        $('html, body').animate({
          scrollTop: top
        }, 300)

    toggleHeader: (el, state)->
      block = $(el).closest('.panel')
      head = block.find('.panel-heading')

      if state
        head.addClass 'active'
      else
        head.removeClass 'active'


