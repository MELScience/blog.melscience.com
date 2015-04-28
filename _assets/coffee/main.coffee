require.config
  paths:
    'jquery': 'vendor/jquery'

  shim:
    # Stripe payment lib
    'vendor/jquery.payment':
      deps: ['jquery']
      exports: '$'

    # Mediaelement
    'vendor/mediaelement':
      deps: ['jquery']
      exports: 'mejs'

    # Bootstrap
    #'vendor/bootstrap/affix':
    #  deps: ['jquery']
    #  exports: '$.fn.affix'
    #'vendor/bootstrap/alert':
    #  deps: ['jquery', 'vendor/bootstrap/transition']
    #  exports: '$.fn.alert'
    'vendor/bootstrap/button':
      deps: ['jquery']
      exports: '$.fn.button'
    #'vendor/bootstrap/carousel':
    #  deps: ['jquery', 'vendor/bootstrap/transition']
    #  exports: '$.fn.carousel'
    'vendor/bootstrap/collapse':
      deps: ['jquery', 'vendor/bootstrap/transition']
      exports: '$.fn.collapse'
    #'vendor/bootstrap/dropdown':
    #  deps: ['jquery', 'vendor/bootstrap/transition']
    #  exports: '$.fn.dropdown'
    'vendor/bootstrap/modal':
      deps: ['jquery', 'vendor/bootstrap/transition']
      exports: '$.fn.modal'
    #'vendor/bootstrap/popover':
    #  deps: ['jquery', 'vendor/bootstrap/tooltip']
    #  exports: '$.fn.popover'
    #'vendor/bootstrap/scrollspy':
    #  deps: ['jquery']
    #  exports: '$.fn.scrollspy'
    #'vendor/bootstrap/tab':
    #  deps: ['jquery', 'vendor/bootstrap/transition']
    #  exports: '$.fn.tab'
    'vendor/bootstrap/tooltip':
      deps: ['jquery', 'vendor/bootstrap/transition']
      exports: '$.fn.tooltip'
    'vendor/bootstrap/transition':
      deps: ['jquery']
      exports: '$.fn.transition'


require ['app'], (App)->
  App.initialize() if typeof App?.initialize == 'function'