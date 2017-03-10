var page = require('webpage').create();
var async = require('async');
var moment = require('moment');

var today = (moment().format('YYYY-MM-DD'))

var regions = ["aff","acgf","avf","anf","acvf"]
async.eachSeries(regions, function(item, callback) {
	page.open('http://localhost:4000/posts-images/'+today+'-image-'+item+'.html', function() {
		console.log('http://localhost:4000/posts-images/'+today+'-image-'+item+'.html')
		var height = page.evaluate(function(){
	    return document.getElementById('resume').offsetHeight;
	  }); 
	  var width = page.evaluate(function(){
	    return document.getElementById('resume').offsetWidth;
	  }); 
	  console.log(item)
	  console.log('Crop to: '+width+"x"+height);

	  page.clipRect = { top: 0, left: 0, width: width, height: height };
	  window.setTimeout(function () {
	    page.render('images/posts/headers/'+today+'-image-'+item+'.png');
	    callback()
	  }, 500);
	})
},function(){
	async.eachSeries(regions, function(item, callback) {
		page.open('http://localhost:4000/posts-images/'+today+'-image-mobile-'+item+'.html', function() {
			console.log('http://localhost:4000/posts-images/'+today+'-image-mobile-'+item+'.html')
			var height = page.evaluate(function(){
		    return document.getElementById('resume').offsetHeight;
		  }); 
		  var width = page.evaluate(function(){
		    return document.getElementById('resume').offsetWidth;
		  }); 
		  console.log(item)
		  console.log('Crop to: '+width+"x"+height);

		  page.clipRect = { top: 0, left: 0, width: width, height: height };
		  window.setTimeout(function () {
		    page.render('images/posts/headers/'+today+'-image-'+item+'-mobile.png');
		    callback()
		  }, 500);
		})
	},function(){
		phantom.exit();
		console.log("phatomjs finish")
	})
});