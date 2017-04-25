(function($) {
  $(function() {
    navManager.init()
    if($('.ligue-teams').length>0){
      rankingChoice.init()
    }
    infiniteScroll.init()
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
      list.load(url + " div.container", function(response, status, xhr) {
        // check if we doesn't get any error
        if ( status != "error" ) {
          // copy all childrens of our temp container to the real container
          // note: jQuery load will copy the div.post-list node as well,
          // so use the childrens and move them
          var container = $("div.container");
          list.children("div.container").children().each(
            function(key, value){
              container.append(value);
            }
          );
        }
      });
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