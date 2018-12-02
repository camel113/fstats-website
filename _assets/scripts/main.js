var domready = require('domready');
var AOS = require('aos');
import getFormData from 'get-form-data'

domready(function () {
  if(document.querySelector('.newsletter__newsletter-success') != null){
    document.querySelector('.newsletter__newsletter-success').style.display = 'none';  
  }
  if(document.querySelector('.newsletter__newsletter-error') != null){
    document.querySelector('.newsletter__newsletter-error').style.display = 'none';
  }
  AOS.init({
    disable: window.innerWidth < 768
  });

  
  function sendData(form) {
    var XHR = new XMLHttpRequest();
 
    var data = getFormData(form)
 
    console.log(JSON.stringify(data))

    // Define what happens on successful data submission
    XHR.addEventListener("load", function(event) {
      document.querySelector('.newsletter__newsletter-form').style.display = 'none';
      document.querySelector('.newsletter__newsletter-success').style.display = '';
    });

    // Define what happens in case of error
    XHR.addEventListener("error", function(event) {
      document.querySelector('.newsletter__newsletter-form').style.display = 'none';
      document.querySelector('.newsletter__newsletter-error').style.display = '';
    });

    // Set up our request
    XHR.open("POST", "https://footstatsapi.herokuapp.com/forms/newsletter");
    XHR.setRequestHeader("Content-Type", "application/json");
    XHR.setRequestHeader('Accept','application/json');

    // The data sent is what the user provided in the form
    XHR.send(JSON.stringify(data));
  }

  if(document.querySelector('#subscribe-form') != null){
    var form = document.querySelector('#subscribe-form')
    // ...and take over its submit event.
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      sendData(form);
    });
  }
})