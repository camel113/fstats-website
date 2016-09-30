requirejs.config({baseUrl:"/js",urlArgs:"bust=v1.0.2",paths:{app:"./",jquery_magnific_popup:"jquery.magnific-popup.min",jquery_easing:"jquery.easing.1.3.min",jquery_flexslider:"jquery.flexslider-min",jquery_scrollTo:"jquery.scrollTo.min",wow:"wow.min",owl:"../libs/owl-carousel/owl.carousel.min",jquery:"//ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min",bootstrap:"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min",chart:"chart"},shim:{bootstrap:{deps:["jquery"]},jquery_magnific_popup:{deps:["jquery"]},jquery_easing:{deps:["jquery"]},jquery_flexslider:{deps:["jquery"]},jquery_scrollTo:{deps:["jquery"]},assan:{deps:["jquery","bootstrap"]},owl:{deps:["jquery"]}}}),requirejs(["abg"]);