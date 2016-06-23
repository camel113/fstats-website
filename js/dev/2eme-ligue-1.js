var region;
$(document).ready(function(){
    var concoursAdvertising = '<div class="alert alert-dismissable alert-info"><button type="button" class="close" data-dismiss="alert">×</button>CONCOURS ! Envoyez-nous les vidéos de vos plus beaux buts et gagnez une paire de Nike Hypervenom.&nbsp;<a href="/topbuts" title="Concours buts en vidéo">Plus d\'infos ici</a>.</div>'
    var errorMessage = '<div class="alert alert-dismissable alert-success"><button type="button" class="close" data-dismiss="alert">×</button>Communiquez nous les erreurs par message sur&nbsp;<a href="http://www.facebook.com/footballtopscorers" title="Top scorers sur facebook">facebook.com/footballtopscorers</a> ou à goal@footballtopscorers.ch</div>'
    var appAdvertising = '<div class="alert alert-dismissable alert-info"><button type="button" class="close" data-dismiss="alert">×</button>Suivez et reportez les matchs des finales en direct avec&nbsp;<a href="/app" title="App footballtopscorers">notre App</a>.</div>'

    if(document.getElementById('aff-2') !== null){
        
        console.log("test")
        $('h3').before(appAdvertising)

        region = 'aff'
        var minGoals = 1;
        var scorerRankingGroup1 = 1;
        var scorerRankingGroup2 = 1;
        var scorerRankingGroup3 = 1;

        $.getJSON( 'http://127.0.0.1:8080/scorerRanking/4/acvf',function(data){
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
            $('.lastUpdate').append(data.lastUpdate)
        })
    }
    if(document.getElementById('aff-2-teams') !== null){
        var globalRanking = 1;
        var globalRankingDefense = 1;
        var globalRankingAttack = 1;

        $.getJSON('http://127.0.0.1:8080/teams/attack/acvf/4',function(data){
            $.each( data.teams,function(i, team){
                $('#global-attack tbody').append('<tr><td>'+globalRankingAttack+'</td><td>'+team.team+'</td><td>'+team.rank+'</td><td>'+team.group+'</td><td><strong>'+team.goalsfor+'</strong></td><td>'+team.goalsagainst+'</td><td>'+team.won+'</td><td>'+team.tied+'</td><td>'+team.lost+'</td><td>('+team.fairplay+')</td><td>'+team.points+'</td></tr>')
                globalRankingAttack++;
            })
        })
        $.getJSON('http://127.0.0.1:8080/teams/defense/acvf/4',function(data){
            $.each( data.teams,function(i, team){
                $('#global-defense tbody').append('<tr><td>'+globalRankingDefense+'</td><td>'+team.team+'</td><td>'+team.rank+'</td><td>'+team.group+'</td><td>'+team.goalsfor+'</td><td><strong>'+team.goalsagainst+'</strong></td><td>'+team.won+'</td><td>'+team.tied+'</td><td>'+team.lost+'</td><td>('+team.fairplay+')</td><td>'+team.points+'</td></tr>')
                globalRankingDefense++;
            })
        })

        $.getJSON('http://127.0.0.1:8080/teams/global/acvf/4',function(data){
            $('.loader').hide()
            $.each( data.teams,function(i, team){
                $('#global-standard tbody').append('<tr><td>'+globalRanking+'</td><td><a href="#">'+team.team+'</a></td><td>'+team.rank+'</td><td>'+team.group+'</td><td>'+team.goalsfor+'</td><td>'+team.goalsagainst+'</td><td>'+team.won+'</td><td>'+team.tied+'</td><td>'+team.lost+'</td><td>('+team.fairplay+')</td><td><strong>'+team.points+'</strong></td></tr>')
                globalRanking++;
            })
        })
        rankingChoice.init(0)
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
            if(group == undefined){
                group = "global"
            }
            $('#'+group).show()
            console.log(group)
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