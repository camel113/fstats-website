var page = require('webpage').create();
var async = require('async');
var moment = require('moment');

var today = (moment().format('YYYY-MM-DD'))

var regions = ["aff","acgf","avf","anf","acvf"]
regions = ["aff"]
async.eachSeries(regions, function(item, callback) {
	page.open('http://localhost:4000/posts-images/'+today+'-image-size300-'+item+'.html', function() {
		console.log('http://localhost:4000/posts-images/'+today+'-image-size300-'+item+'.html')
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
	    page.render('images/posts/headers/'+today+'-image-'+item+'-size300.png');
	    callback()
	  }, 500);
	})
},function(){
	async.eachSeries(regions, function(item, callback) {
		page.open('http://localhost:4000/posts-images/'+today+'-image-size500-'+item+'.html', function() {
			console.log('http://localhost:4000/posts-images/'+today+'-image-size500-'+item+'.html')
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
		    page.render('images/posts/headers/'+today+'-image-'+item+'-size500.png');
		    callback()
		  }, 500);
		})
	},function(){
		async.eachSeries(regions, function(item, callback) {
			page.open('http://localhost:4000/posts-images/'+today+'-image-size800-'+item+'.html', function() {
				console.log('http://localhost:4000/posts-images/'+today+'-image-size800-'+item+'.html')
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
			    page.render('images/posts/headers/'+today+'-image-'+item+'-size800.png');
			    callback()
			  }, 500);
			})
		},function(){
			async.eachSeries(regions, function(item, callback) {
				page.open('http://localhost:4000/posts-images/'+today+'-image-size1100-'+item+'.html', function() {
					console.log('http://localhost:4000/posts-images/'+today+'-image-size1100-'+item+'.html')
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
				    page.render('images/posts/headers/'+today+'-image-'+item+'-size1100.png');
				    callback()
				  }, 500);
				})
			},function(){
				async.eachSeries(regions, function(item, callback) {
					page.open('http://localhost:4000/posts-images/'+today+'-image-size2200-'+item+'.html', function() {
						console.log('http://localhost:4000/posts-images/'+today+'-image-size2200-'+item+'.html')
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
					    page.render('images/posts/headers/'+today+'-image-'+item+'-size2200.png');
					    callback()
					  }, 500);
					})
				},function(){
					async.eachSeries(regions, function(item, callback) {
						page.open('http://localhost:4000/posts-images/'+today+'-image-facebook-'+item+'.html', function() {
							console.log('http://localhost:4000/posts-images/'+today+'-image-facebook-'+item+'.html')
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
						    page.render('images/facebook/'+today+'-image-'+item+'-facebook.png');
						    callback()
						  }, 500);
						})
					},function(){
						phantom.exit();
						console.log("phatomjs finish")
					})
				})
			})
		})
	})
});
