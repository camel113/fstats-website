var page = require('webpage').create();
page.open('http://localhost:4000/posts-images/image.html', function() {
	var height = page.evaluate(function(){
    return document.getElementById('resume').offsetHeight;
  }); 
  var width = page.evaluate(function(){
    return document.getElementById('resume').offsetWidth;
  }); 
  console.log('Crop to: '+width+"x"+height);

  page.clipRect = { top: 0, left: 0, width: width, height: height };
  window.setTimeout(function () {
    page.render('_image.png');
    phantom.exit();
  }, 200);
});