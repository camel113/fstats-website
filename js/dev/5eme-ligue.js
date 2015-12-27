var region;
$(document).ready(function(){
    if(document.getElementById('aff-5') !== null){
        $('h3').after('<div class="alert alert-dismissable alert-warning"><button type="button" class="close" data-dismiss="alert">×</button>Communiquez nous les erreurs des résumés de matchs football.ch par message sur&nbsp;<a href="http://www.facebook.com/footballtopscorers" title="Top scorers sur facebook">facebook.com/footballtopscorers</a></div>')
        region = 'aff'
        var minGoals = 1;
        var scorerRankingGroup1 = 1;
        var scorerRankingGroup2 = 1;
        var scorerRankingGroup3 = 1;
        var scorerRankingGroup4 = 1;
        var scorerRankingGroup5 = 1;

        $.getJSON( 'http://footballtopscorers-pmeweb.rhcloud.com/scorerRanking/5/aff',function(data){
            $('.loader').hide()

            $.each( data.scorers["1"], function( i, scorer ) {
                if(scorer.goals > minGoals){
                    $('#group1 tbody').append('<tr><td>'+scorerRankingGroup1+'</td><td>'+scorer.scorer+'</td><td>'+scorer.team+'</td><td>'+scorer.goals+'</td></tr>')
                    scorerRankingGroup1++
                }
            });
            $.each( data.scorers["2"], function( i, scorer ) {
                if(scorer.goals > minGoals){
                    $('#group2 tbody').append('<tr><td>'+scorerRankingGroup2+'</td><td>'+scorer.scorer+'</td><td>'+scorer.team+'</td><td>'+scorer.goals+'</td></tr>')
                    scorerRankingGroup2++
                }
            });
            $.each( data.scorers["3"], function( i, scorer ) {
                if(scorer.goals > minGoals){
                    $('#group3 tbody').append('<tr><td>'+scorerRankingGroup3+'</td><td>'+scorer.scorer+'</td><td>'+scorer.team+'</td><td>'+scorer.goals+'</td></tr>')
                    scorerRankingGroup3++
                }
            });
            $.each( data.scorers["4"], function( i, scorer ) {
                if(scorer.goals > minGoals){
                    $('#group4 tbody').append('<tr><td>'+scorerRankingGroup4+'</td><td>'+scorer.scorer+'</td><td>'+scorer.team+'</td><td>'+scorer.goals+'</td></tr>')
                    scorerRankingGroup4++
                }
            });
            $.each( data.scorers["5"], function( i, scorer ) {
                if(scorer.goals > minGoals){
                    $('#group5 tbody').append('<tr><td>'+scorerRankingGroup5+'</td><td>'+scorer.scorer+'</td><td>'+scorer.team+'</td><td>'+scorer.goals+'</td></tr>')
                    scorerRankingGroup5++
                }
            });
            $('.lastUpdate').append(data.lastUpdate)
        })
    }
    if(document.getElementById('acvf-5') !== null){
        $('h3').after('<div class="alert alert-dismissable alert-warning"><button type="button" class="close" data-dismiss="alert">×</button>Communiquez nous les erreurs des résumés de matchs football.ch par message sur&nbsp;<a href="http://www.facebook.com/footballtopscorers" title="Top scorers sur facebook">facebook.com/footballtopscorers</a></div>')
        region = 'aff'
        var minGoals = 1;
        var scorerRankingGroup1 = 1;
        var scorerRankingGroup2 = 1;
        var scorerRankingGroup3 = 1;
        var scorerRankingGroup4 = 1;
        var scorerRankingGroup5 = 1;
        var scorerRankingGroup6 = 1;
        var scorerRankingGroup7 = 1;

        $.getJSON( 'http://footballtopscorers-pmeweb.rhcloud.com/scorerRanking/5/acvf',function(data){
            $('.loader').hide()

            $.each( data.scorers["1"], function( i, scorer ) {
                if(scorer.goals > minGoals){
                    $('#group1 tbody').append('<tr><td>'+scorerRankingGroup1+'</td><td>'+scorer.scorer+'</td><td>'+scorer.team+'</td><td>'+scorer.goals+'</td></tr>')
                    scorerRankingGroup1++
                }
            });
            $.each( data.scorers["2"], function( i, scorer ) {
                if(scorer.goals > minGoals){
                    $('#group2 tbody').append('<tr><td>'+scorerRankingGroup2+'</td><td>'+scorer.scorer+'</td><td>'+scorer.team+'</td><td>'+scorer.goals+'</td></tr>')
                    scorerRankingGroup2++
                }
            });
            $.each( data.scorers["3"], function( i, scorer ) {
                if(scorer.goals > minGoals){
                    $('#group3 tbody').append('<tr><td>'+scorerRankingGroup3+'</td><td>'+scorer.scorer+'</td><td>'+scorer.team+'</td><td>'+scorer.goals+'</td></tr>')
                    scorerRankingGroup3++
                }
            });
            $.each( data.scorers["4"], function( i, scorer ) {
                if(scorer.goals > minGoals){
                    $('#group4 tbody').append('<tr><td>'+scorerRankingGroup4+'</td><td>'+scorer.scorer+'</td><td>'+scorer.team+'</td><td>'+scorer.goals+'</td></tr>')
                    scorerRankingGroup4++
                }
            });
            $.each( data.scorers["5"], function( i, scorer ) {
                if(scorer.goals > minGoals){
                    $('#group5 tbody').append('<tr><td>'+scorerRankingGroup5+'</td><td>'+scorer.scorer+'</td><td>'+scorer.team+'</td><td>'+scorer.goals+'</td></tr>')
                    scorerRankingGroup5++
                }
            });
            $.each( data.scorers["6"], function( i, scorer ) {
                if(scorer.goals > minGoals){
                    $('#group6 tbody').append('<tr><td>'+scorerRankingGroup6+'</td><td>'+scorer.scorer+'</td><td>'+scorer.team+'</td><td>'+scorer.goals+'</td></tr>')
                    scorerRankingGroup6++
                }
            });
            $.each( data.scorers["7"], function( i, scorer ) {
                if(scorer.goals > minGoals){
                    $('#group7 tbody').append('<tr><td>'+scorerRankingGroup7+'</td><td>'+scorer.scorer+'</td><td>'+scorer.team+'</td><td>'+scorer.goals+'</td></tr>')
                    scorerRankingGroup7++
                }
            });
            $('.lastUpdate').append(data.lastUpdate)
        })
    }
})

    

var rankingChoice = {
    groupCount: 0,
    init: function(nbGroups){
        var group, rankingType;
        rankingChoice.groupCount = nbGroups;
        rankingChoice.hideRankings()
        $('#global, #global-standard').show()
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