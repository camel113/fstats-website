(function($) {
  $(function() {
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
    rankingChoice.init()
  });
})(jQuery);

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