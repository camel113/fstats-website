var region;
$(document).ready(function(){
    if(document.getElementById('aff-4') !== null){
        region = 'aff'
        var minGoals = 1;
        var scorerRankingGroup1 = 1;
        var scorerRankingGroup2 = 1;
        var scorerRankingGroup3 = 1;
        var scorerRankingGroup4 = 1;
        var scorerRankingGroup5 = 1;
        
        $.getJSON( 'http://footballtopscorers-pmeweb.rhcloud.com/scorerRanking/4/aff',function(data){
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

    if(document.getElementById('aff-4-teams') !== null){
        var attackRankingGroup1 = 1;
        var defenseRankingGroup1 = 1;
        var attackRankingGroup2 = 1;
        var defenseRankingGroup2 = 1;
        var attackRankingGroup3 = 1;
        var defenseRankingGroup3 = 1;
        var attackRankingGroup4 = 1;
        var defenseRankingGroup4 = 1;
        var attackRankingGroup5 = 1;
        var defenseRankingGroup5 = 1;
        var globalRanking = 1;
        var globalRankingDefense = 1;
        var globalRankingAttack = 1;

        $.getJSON('http://footballtopscorers-pmeweb.rhcloud.com/teams/global/aff/4',function(data){
            $('.loader').hide()
            $.each( data.teams,function(i, team){
                if(team.group == 1){
                    $('#group1-standard tbody').append('<tr><td>'+team.rank+'</td><td>'+team.team+'</td><td>'+team.goalsfor+'</td><td>'+team.goalsagainst+'</td><td>'+team.won+'</td><td>'+team.tied+'</td><td>'+team.lost+'</td><td>('+team.fairplay+')</td><td><strong>'+team.points+'</strong></td></tr>')
                }
                if(team.group == 2){
                    $('#group2-standard tbody').append('<tr><td>'+team.rank+'</td><td>'+team.team+'</td><td>'+team.goalsfor+'</td><td>'+team.goalsagainst+'</td><td>'+team.won+'</td><td>'+team.tied+'</td><td>'+team.lost+'</td><td>('+team.fairplay+')</td><td><strong>'+team.points+'</strong></td></tr>')
                }
                if(team.group == 3){
                    $('#group3-standard tbody').append('<tr><td>'+team.rank+'</td><td>'+team.team+'</td><td>'+team.goalsfor+'</td><td>'+team.goalsagainst+'</td><td>'+team.won+'</td><td>'+team.tied+'</td><td>'+team.lost+'</td><td>('+team.fairplay+')</td><td><strong>'+team.points+'</strong></td></tr>')
                }
                if(team.group == 4){
                    $('#group4-standard tbody').append('<tr><td>'+team.rank+'</td><td>'+team.team+'</td><td>'+team.goalsfor+'</td><td>'+team.goalsagainst+'</td><td>'+team.won+'</td><td>'+team.tied+'</td><td>'+team.lost+'</td><td>('+team.fairplay+')</td><td><strong>'+team.points+'</strong></td></tr>')
                }
                if(team.group == 5){
                    $('#group5-standard tbody').append('<tr><td>'+team.rank+'</td><td>'+team.team+'</td><td>'+team.goalsfor+'</td><td>'+team.goalsagainst+'</td><td>'+team.won+'</td><td>'+team.tied+'</td><td>'+team.lost+'</td><td>('+team.fairplay+')</td><td><strong>'+team.points+'</strong></td></tr>')
                }
            })
        })
        $.getJSON('http://footballtopscorers-pmeweb.rhcloud.com/teams/attack/aff/4',function(data){
            $.each( data.teams,function(i, team){
                if(team.group == 1){
                    $('#group1-attack tbody').append('<tr><td>'+attackRankingGroup1+'</td><td>'+team.team+'</td><td>'+team.rank+'</td><td><strong>'+team.goalsfor+'</strong></td><td>'+team.goalsagainst+'</td><td>'+team.won+'</td><td>'+team.tied+'</td><td>'+team.lost+'</td><td>('+team.fairplay+')</td><td>'+team.points+'</td></tr>')
                    attackRankingGroup1++;
                }
                if(team.group == 2){
                    $('#group2-attack tbody').append('<tr><td>'+attackRankingGroup2+'</td><td>'+team.team+'</td><td>'+team.rank+'</td><td><strong>'+team.goalsfor+'</strong></td><td>'+team.goalsagainst+'</td><td>'+team.won+'</td><td>'+team.tied+'</td><td>'+team.lost+'</td><td>('+team.fairplay+')</td><td>'+team.points+'</td></tr>')
                    attackRankingGroup2++;
                }
                if(team.group == 3){
                    $('#group3-attack tbody').append('<tr><td>'+attackRankingGroup3+'</td><td>'+team.team+'</td><td>'+team.rank+'</td><td><strong>'+team.goalsfor+'</strong></td><td>'+team.goalsagainst+'</td><td>'+team.won+'</td><td>'+team.tied+'</td><td>'+team.lost+'</td><td>('+team.fairplay+')</td><td>'+team.points+'</td></tr>')
                    attackRankingGroup3++;
                }
                if(team.group == 4){
                    $('#group4-attack tbody').append('<tr><td>'+attackRankingGroup4+'</td><td>'+team.team+'</td><td>'+team.rank+'</td><td><strong>'+team.goalsfor+'</strong></td><td>'+team.goalsagainst+'</td><td>'+team.won+'</td><td>'+team.tied+'</td><td>'+team.lost+'</td><td>('+team.fairplay+')</td><td>'+team.points+'</td></tr>')
                    attackRankingGroup4++;
                }
                if(team.group == 5){
                    $('#group5-attack tbody').append('<tr><td>'+attackRankingGroup5+'</td><td>'+team.team+'</td><td>'+team.rank+'</td><td><strong>'+team.goalsfor+'</strong></td><td>'+team.goalsagainst+'</td><td>'+team.won+'</td><td>'+team.tied+'</td><td>'+team.lost+'</td><td>('+team.fairplay+')</td><td>'+team.points+'</td></tr>')
                    attackRankingGroup5++;
                }
                $('#global-attack tbody').append('<tr><td>'+globalRankingAttack+'</td><td>'+team.team+'</td><td>'+team.rank+'</td><td>'+team.group+'</td><td><strong>'+team.goalsfor+'</strong></td><td>'+team.goalsagainst+'</td><td>'+team.won+'</td><td>'+team.tied+'</td><td>'+team.lost+'</td><td>('+team.fairplay+')</td><td>'+team.points+'</td></tr>')
                globalRankingAttack++;
            })
        })
        $.getJSON('http://footballtopscorers-pmeweb.rhcloud.com/teams/defense/aff/4',function(data){
            $.each( data.teams,function(i, team){
                if(team.group == 1){
                    $('#group1-defense tbody').append('<tr><td>'+defenseRankingGroup1+'</td><td>'+team.team+'</td><td>'+team.rank+'</td><td>'+team.goalsfor+'</td><td><strong>'+team.goalsagainst+'</strong></td><td>'+team.won+'</td><td>'+team.tied+'</td><td>'+team.lost+'</td><td>('+team.fairplay+')</td><td>'+team.points+'</td></tr>')
                    defenseRankingGroup1++;
                }
                if(team.group == 2){
                    $('#group2-defense tbody').append('<tr><td>'+defenseRankingGroup2+'</td><td>'+team.team+'</td><td>'+team.rank+'</td><td>'+team.goalsfor+'</td><td><strong>'+team.goalsagainst+'</strong></td><td>'+team.won+'</td><td>'+team.tied+'</td><td>'+team.lost+'</td><td>('+team.fairplay+')</td><td>'+team.points+'</td></tr>')
                    defenseRankingGroup2++;
                }
                if(team.group == 3){
                    $('#group3-defense tbody').append('<tr><td>'+defenseRankingGroup3+'</td><td>'+team.team+'</td><td>'+team.rank+'</td><td>'+team.goalsfor+'</td><td><strong>'+team.goalsagainst+'</strong></td><td>'+team.won+'</td><td>'+team.tied+'</td><td>'+team.lost+'</td><td>('+team.fairplay+')</td><td>'+team.points+'</td></tr>')
                    defenseRankingGroup3++;
                }
                if(team.group == 4){
                    $('#group4-defense tbody').append('<tr><td>'+defenseRankingGroup4+'</td><td>'+team.team+'</td><td>'+team.rank+'</td><td>'+team.goalsfor+'</td><td><strong>'+team.goalsagainst+'</strong></td><td>'+team.won+'</td><td>'+team.tied+'</td><td>'+team.lost+'</td><td>('+team.fairplay+')</td><td>'+team.points+'</td></tr>')
                    defenseRankingGroup4++;
                }
                if(team.group == 5){
                    $('#group5-defense tbody').append('<tr><td>'+defenseRankingGroup5+'</td><td>'+team.team+'</td><td>'+team.rank+'</td><td>'+team.goalsfor+'</td><td><strong>'+team.goalsagainst+'</strong></td><td>'+team.won+'</td><td>'+team.tied+'</td><td>'+team.lost+'</td><td>('+team.fairplay+')</td><td>'+team.points+'</td></tr>')
                    defenseRankingGroup5++;
                }
                $('#global-defense tbody').append('<tr><td>'+globalRankingDefense+'</td><td>'+team.team+'</td><td>'+team.rank+'</td><td>'+team.group+'</td><td>'+team.goalsfor+'</td><td><strong>'+team.goalsagainst+'</strong></td><td>'+team.won+'</td><td>'+team.tied+'</td><td>'+team.lost+'</td><td>('+team.fairplay+')</td><td><strong>'+team.points+'</strong></td></tr>')
                globalRankingDefense++;
            })
        })

        $.getJSON('http://footballtopscorers-pmeweb.rhcloud.com/teams/global/aff/4',function(data){
            $.each( data.teams,function(i, team){
                $('#global-standard tbody').append('<tr><td>'+globalRanking+'</td><td>'+team.team+'</td><td>'+team.rank+'</td><td>'+team.group+'</td><td>'+team.goalsfor+'</td><td>'+team.goalsagainst+'</td><td>'+team.won+'</td><td>'+team.tied+'</td><td>'+team.lost+'</td><td>('+team.fairplay+')</td><td><strong>'+team.points+'</strong></td></tr>')
                globalRanking++;
            })
        })

        rankingChoice.init(5)
        
    }

    if(document.getElementById('acvf-4') !== null){
        region = 'acvf'
        var minGoals = 1;
        var scorerRankingGroup1 = 1;
        var scorerRankingGroup2 = 1;
        var scorerRankingGroup3 = 1;
        var scorerRankingGroup4 = 1;
        var scorerRankingGroup5 = 1;
        var scorerRankingGroup6 = 1;
        var scorerRankingGroup7 = 1;
        var scorerRankingGroup8 = 1;
        
        $.getJSON( 'http://footballtopscorers-pmeweb.rhcloud.com/scorerRanking/4/acvf',function(data){
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
            $.each( data.scorers["8"], function( i, scorer ) {
                if(scorer.goals > minGoals){
                    $('#group8 tbody').append('<tr><td>'+scorerRankingGroup8+'</td><td>'+scorer.scorer+'</td><td>'+scorer.team+'</td><td>'+scorer.goals+'</td></tr>')
                    scorerRankingGroup8++
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