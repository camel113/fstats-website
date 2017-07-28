(function($) {

  $(function() {
    
    $('.shop-product-gallery').slick({
      "arrows":false,
      "dots":true
    });


    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/service-worker.js', {
        scope: '/'
      });
    }

    analyticsConfig.init()
    navManager.init()
    if($('.ligue-teams').length>0){
      rankingChoice.init()
    }
    infiniteScroll.init()
    backToTop.init()

    var options = {
      prefetch: true,
      cacheLength: 2,
      onStart: {
        duration: 250, // Duration of our animation
        render: function ($container) {
          // Add your CSS animation reversing class
          $container.addClass('is-exiting');

          // Restart your animation
          smoothState.restartCSSAnimations();
        }
      },
      onReady: {
        duration: 0,
        render: function ($container, $newContent) {
          // Remove your CSS animation reversing class
          $container.removeClass('is-exiting');

          // Inject the new content
          $container.html($newContent);

        }
      },
      onAfter: function($container, $newContent) {
        if($('.ligue-teams').length>0){
          rankingChoice.init()
          backToTop.init()
        }
      }
    }
    var smoothState = $('#league-stats').smoothState(options).data('smoothState');

  });
})(jQuery);

var infiniteScroll = {
  //https://blog.codestack.de/2015/05/17/seo-friendly-infinite-scroll.html
  init: function(){
    $(window).scroll(function() {
      // get current scroll top in px, add window height and
      // check if this is greater than the document height minus 300
      if ($(window).scrollTop() + $(window).height() >= $(document).height() - 300) {
        infiniteScroll.loadMoreContent();
      }
    })
  },
  loadMoreContent: function(){
    console.log("LOADMORE")
    var next = $("a.next").first();
    next.each(function(key, value) {
      var url = $(value).attr('href');
      // remove button, so we can't load multiple times
      next.remove();
      // adding a temp. dom object to load the next page
      var list = $("<div></div>");
      // call load method and get the div.post-list node
      list.load(url + " div.scroll-content", function(response, status, xhr) {
        // check if we doesn't get any error
        if ( status != "error" ) {
          // copy all childrens of our temp container to the real container
          // note: jQuery load will copy the div.post-list node as well,
          // so use the childrens and move them
          var container = $("div.scroll-content");
          list.children("div.scroll-content").children().each(
            function(key, value){
              container.append(value);
            }
          );
        }
      });
    });
  }
}

var backToTop = {
  init: function(){
    var offset = 300,
    //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
    offset_opacity = 1200,
    //duration of the top scrolling animation (in ms)
    scroll_top_duration = 700,
    //grab the "back to top" link
    $back_to_top = $('.cd-top');

    //hide or show the "back to top" link
    $(window).scroll(function(){
      ( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
      if( $(this).scrollTop() > offset_opacity ) { 
        $back_to_top.addClass('cd-fade-out');
      }
    });

    //smooth scroll to top
    $back_to_top.on('click', function(event){
      event.preventDefault();
      $('body,html').animate({
        scrollTop: 0 ,
        }, scroll_top_duration
      );
    });
  }
}

var navManager = {
  init: function(){
    $('.toggle-overlay').click(function() {
      $('aside').toggleClass('open');
      $('.visible').toggleClass('visible');
    });
    $('nav li.nav-subnav a').click(function(){
      $(this).next('ul').toggleClass('visible');
    })
    $('.nav-back-one-step').on('click',function(){
      $(this).parent().parent().toggleClass('visible')
    })
  }
}

var rankingChoice = {
  groupCount: 0,
  init: function(nbGroups){
    var group, rankingType;
    rankingChoice.groupCount = nbGroups;
    rankingChoice.hideRankings()
    if($('#global, #global-standard').length > 0){
        $('#global, #global-standard').show()
    }else{
        $('#group1-standard').show()
    }
    rankingChoice.groupChoice()
  },
  groupChoice: function(){
    $("#group-choice, #rank-choice").on('change',function() {
        rankingChoice.hideRankings();
        group = $("#group-choice option:selected").val()
        rankingType = $("#rank-choice option:selected").val()
        $('#'+group).show()
        $('#'+group+'-'+rankingType).show() 
    });
  },
  hideRankings: function(){
    for (var i = 1; i <= rankingChoice.groupCount; i++) {
        $('#group'+i).hide()
    };
    $('#global, .ranking').hide()
  }
}

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

    $('.private-ad').on('click', function(event){
      ga('send', {
        hitType: 'event',
        eventCategory: 'Ad-Click',
        eventAction: 'click',
        eventLabel: 'Cadenza'
      });
    });

    $('.job-tease').on('click', function(event){
      ga('send', {
        hitType: 'event',
        eventCategory: 'Job-Tease-Click',
        eventAction: 'click',
      });
    });
  }
}
var snipcartConfig = {
  init: function(){
    Snipcart.api.configure('split_firstname_and_lastname', true);
    Snipcart.execute('registerLocale', 'fr', {"company_name":"Société"});
  }
}