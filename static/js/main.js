require.config({paths:{jquery:"vendor/jquery"},shim:{"vendor/jquery.payment":{deps:["jquery"],exports:"$"},"vendor/mediaelement":{deps:["jquery"],exports:"mejs"},"vendor/bootstrap/button":{deps:["jquery"],exports:"$.fn.button"},"vendor/bootstrap/collapse":{deps:["jquery","vendor/bootstrap/transition"],exports:"$.fn.collapse"},"vendor/bootstrap/modal":{deps:["jquery","vendor/bootstrap/transition"],exports:"$.fn.modal"},"vendor/bootstrap/tooltip":{deps:["jquery","vendor/bootstrap/transition"],exports:"$.fn.tooltip"},"vendor/bootstrap/transition":{deps:["jquery"],exports:"$.fn.transition"}}}),require(["app"],function(o){if("function"==typeof(null!=o?o.initialize:void 0))return o.initialize()});