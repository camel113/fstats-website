(function($) {

  $(function() {
    console.log("app-landing")
    analyticsConfig.init();
    errorReportForm.init();
    contactForm.init();
    transfersForm.init();

  });
})(jQuery);

var analyticsConfig = {
  init: function(){
    $('.shop-product-checkout').on('click', function(event){
      ga('send', {
        hitType: 'event',
        eventCategory: 'Checkout',
        eventAction: 'click',
        eventLabel: 'Cadenza'
      });

      fbq('track', 'InitiateCheckout');
    });

    $('.ad-for-ad').on('click', function(event){
      ga('send', {
        hitType: 'event',
        eventCategory: 'Ad-Click',
        eventAction: 'click',
        eventLabel: 'Marketing'
      });
    });

    $('#contact-pub').on('click', function(event){
      fbq('track', 'InitiateCheckout');
      console.log('InitiateCheckout')
    })

    $('.job-tease').on('click', function(event){
      ga('send', {
        hitType: 'event',
        eventCategory: 'Job-Tease-Click',
        eventAction: 'click',
      });
    });
  }
}

var errorReportForm = {
  init: function(){
    $("#errors-report-form").submit(function(e) {
      e.preventDefault();

      var $form = $(this);

      var posting = $.post($form.attr("action"), $form.serialize())

      posting.done(function() {
        $("#errors-report-form-container").hide()
        $("#errors-report-form-success").show()
      });
      posting.fail(function() {
        $("#errors-report-form-container").hide()
        $("#errors-report-form-fail").show()
      });

    });
  }
}

var contactForm = {
  init: function(){
    $("#contact-form").submit(function(e) {
      e.preventDefault();

      var $form = $(this);

      var posting = $.post($form.attr("action"), $form.serialize())

      posting.done(function() {
        $("#contact-form-container").hide()
        $("#contact-form-success").show()
      });
      posting.fail(function() {
        $("#contact-form-container").hide()
        $("#contact-form-fail").show()
      });

    });
  }
}

var transfersForm = {
  init: function(){
    console.log("transfersForm")
    $("#transfers-info-form").submit(function(e) {
      e.preventDefault();

      var $form = $(this);

      var posting = $.post($form.attr("action"), $form.serialize())

      posting.done(function() {
        $("#errors-report-form-container").hide()
        $("#transfers-info-form-success").show()
      });
      posting.fail(function() {
        $("#transfers-info-form-container").hide()
        $("#transfers-info-form-fail").show()
      });

    });
  }
}