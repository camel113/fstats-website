var region;
$(document).ready(function(){
    var concoursAdvertising = '<div class="alert alert-dismissable alert-info"><button type="button" class="close" data-dismiss="alert">×</button>CONCOURS ! Envoyez-nous les vidéos de vos plus beaux buts et gagnez une paire de Nike Hypervenom.&nbsp;<a href="/topbuts" title="Concours buts en vidéo">Plus d\'infos ici</a>.</div>'
    var errorMessage = '<div class="alert alert-dismissable alert-success"><button type="button" class="close" data-dismiss="alert">×</button>Communiquez nous les erreurs par message sur&nbsp;<a href="http://www.facebook.com/footballtopscorers" title="Top scorers sur facebook">facebook.com/footballtopscorers</a> ou à goal@footballtopscorers.ch</div>'

    var appAdvertising = '<div class="alert alert-dismissable alert-info"><button type="button" class="close" data-dismiss="alert">×</button>Suivez et reportez les matchs des finales en direct avec&nbsp;<a href="/app" title="App footballtopscorers">notre App</a>.</div>'

    if(document.getElementById('aff-4') !== null){
        
        $('h3').before(appAdvertising)

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
        var globalRanking = 1;

        $.getJSON('http://footballtopscorers-pmeweb.rhcloud.com/teams/global/aff/4',function(data){
            $('.loader').hide()
            $.each( data.teams,function(i, team){
                if(team.group == 1){
                    teamRankingManager.add("#group1-standard",team,41)
                }
                if(team.group == 2){
                    teamRankingManager.add("#group2-standard",team,42)
                }
                if(team.group == 3){
                    teamRankingManager.add("#group3-standard",team,43)
                }
                if(team.group == 4){
                    teamRankingManager.add("#group4-standard",team,44)
                }
                if(team.group == 5){
                    teamRankingManager.add("#group5-standard",team,45)
                }
            })
        })
        $.getJSON('http://footballtopscorers-pmeweb.rhcloud.com/teams/attack/aff/4',function(data){
            $.each( data.teams,function(i, team){
                if(team.group == 1){
                    teamAttacksRankingManager.add("#group1-attack",team,1)
                }
                if(team.group == 2){
                    teamAttacksRankingManager.add("#group2-attack",team,2)
                }
                if(team.group == 3){
                    teamAttacksRankingManager.add("#group3-attack",team,3)
                }
                if(team.group == 4){
                    teamAttacksRankingManager.add("#group4-attack",team,4)
                }
                if(team.group == 5){
                    teamAttacksRankingManager.add("#group5-attack",team,5)
                }
            })
        })
        $.getJSON('http://footballtopscorers-pmeweb.rhcloud.com/teams/defense/aff/4',function(data){
            $.each( data.teams,function(i, team){
                if(team.group == 1){
                    teamDefencesRankingManager.add("#group1-defense",team,1)
                }
                if(team.group == 2){
                    teamDefencesRankingManager.add("#group2-defense",team,2)
                }
                if(team.group == 3){
                    teamDefencesRankingManager.add("#group3-defense",team,3)
                }
                if(team.group == 4){
                    teamDefencesRankingManager.add("#group4-defense",team,4)
                }
                if(team.group == 5){
                    teamDefencesRankingManager.add("#group5-defense",team,5)
                }
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
        
        $('h3').before(appAdvertising)
        
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

    if(document.getElementById('acvf-4-teams') !== null){
        var globalRanking = 1;

        $.getJSON('http://footballtopscorers-pmeweb.rhcloud.com/teams/global/acvf/4',function(data){
            $('.loader').hide()
            $.each( data.teams,function(i, team){
                if(team.group == 1){
                    teamRankingManager.add("#group1-standard",team,41)
                }
                if(team.group == 2){
                    teamRankingManager.add("#group2-standard",team,42)
                }
                if(team.group == 3){
                    teamRankingManager.add("#group3-standard",team,43)
                }
                if(team.group == 4){
                    teamRankingManager.add("#group4-standard",team,44)
                }
                if(team.group == 5){
                    teamRankingManager.add("#group5-standard",team,45)
                }
                if(team.group == 6){
                    teamRankingManager.add("#group6-standard",team,46)
                }
                if(team.group == 7){
                    teamRankingManager.add("#group7-standard",team,47)
                }
                if(team.group == 8){
                    teamRankingManager.add("#group8-standard",team,48)
                }
            })
        })
        $.getJSON('http://footballtopscorers-pmeweb.rhcloud.com/teams/attack/acvf/4',function(data){
            $.each( data.teams,function(i, team){
                if(team.group == 1){
                    teamAttacksRankingManager.add("#group1-attack",team,1)
                }
                if(team.group == 2){
                    teamAttacksRankingManager.add("#group2-attack",team,2)
                }
                if(team.group == 3){
                    teamAttacksRankingManager.add("#group3-attack",team,3)
                }
                if(team.group == 4){
                    teamAttacksRankingManager.add("#group4-attack",team,4)
                }
                if(team.group == 5){
                    teamAttacksRankingManager.add("#group5-attack",team,5)
                }
                if(team.group == 6){
                    teamAttacksRankingManager.add("#group6-attack",team,6)
                }
                if(team.group == 7){
                    teamAttacksRankingManager.add("#group7-attack",team,7)
                }
                if(team.group == 8){
                    teamAttacksRankingManager.add("#group8-attack",team,8)
                }
            })
        })
        $.getJSON('http://footballtopscorers-pmeweb.rhcloud.com/teams/defense/acvf/4',function(data){
            $.each( data.teams,function(i, team){
                if(team.group == 1){
                    teamDefencesRankingManager.add("#group1-defense",team,1)
                }
                if(team.group == 2){
                    teamDefencesRankingManager.add("#group2-defense",team,2)
                }
                if(team.group == 3){
                    teamDefencesRankingManager.add("#group3-defense",team,3)
                }
                if(team.group == 4){
                    teamDefencesRankingManager.add("#group4-defense",team,4)
                }
                if(team.group == 5){
                    teamDefencesRankingManager.add("#group5-defense",team,5)
                }
                if(team.group == 6){
                    teamDefencesRankingManager.add("#group6-defense",team,6)
                }
                if(team.group == 7){
                    teamDefencesRankingManager.add("#group7-defense",team,7)
                }
                if(team.group == 8){
                    teamDefencesRankingManager.add("#group8-defense",team,8)
                }
            })
        })

        $.getJSON('http://footballtopscorers-pmeweb.rhcloud.com/teams/global/acvf/4',function(data){
            $.each( data.teams,function(i, team){
                $('#global-standard tbody').append('<tr><td>'+globalRanking+'</td><td>'+team.team+'</td><td>'+team.rank+'</td><td>'+team.group+'</td><td>'+team.goalsfor+'</td><td>'+team.goalsagainst+'</td><td>'+team.won+'</td><td>'+team.tied+'</td><td>'+team.lost+'</td><td>('+team.fairplay+')</td><td><strong>'+team.points+'</strong></td></tr>')
                globalRanking++;
            })
        })

        rankingChoice.init(8)
        
    }

})

var teamRankingManager = {
    add: function(groupId,team,dataGroup){
        $(groupId).find('tbody').append('<tr><td>'+team.rank+'</td><td><a class="chart-link" href="#" data-group="'+dataGroup+'">'+team.team+'</a></td><td>'+team.goalsfor+'</td><td>'+team.goalsagainst+'</td><td>'+team.won+'</td><td>'+team.tied+'</td><td>'+team.lost+'</td><td>('+team.fairplay+')</td><td><strong>'+team.points+'</strong></td></tr>')
    }
}

var teamAttacksRankingManager = {
    attackRankingGroup1:1,
    attackRankingGroup2:1,
    attackRankingGroup3:1,
    attackRankingGroup4:1,
    attackRankingGroup5:1,
    attackRankingGroup6:1,
    attackRankingGroup7:1,
    attackRankingGroup8:1,
    attackRankingGroup9:1,
    globalRankingAttack:1,
    add: function(groupId,team,groupNumber){
        var ranking = 0
        if(groupNumber == 1){
            ranking = teamAttacksRankingManager.attackRankingGroup1++
        }
        if(groupNumber == 2){
            ranking = teamAttacksRankingManager.attackRankingGroup2++
        }
        if(groupNumber == 3){
            ranking = teamAttacksRankingManager.attackRankingGroup3++
        }
        if(groupNumber == 4){
            ranking = teamAttacksRankingManager.attackRankingGroup4++
        }
        if(groupNumber == 5){
            ranking = teamAttacksRankingManager.attackRankingGroup5++
        }
        if(groupNumber == 6){
            ranking = teamAttacksRankingManager.attackRankingGroup6++
        }
        if(groupNumber == 7){
            ranking = teamAttacksRankingManager.attackRankingGroup7++
        }
        if(groupNumber == 8){
            ranking = teamAttacksRankingManager.attackRankingGroup8++
        }
        if(groupNumber == 9){
            ranking = teamAttacksRankingManager.attackRankingGroup9++
        }
        $(groupId).find('tbody').append('<tr><td>'+ranking+'</td><td>'+team.team+'</td><td>'+team.rank+'</td><td><strong>'+team.goalsfor+'</strong></td><td>'+team.goalsagainst+'</td><td>'+team.won+'</td><td>'+team.tied+'</td><td>'+team.lost+'</td><td>('+team.fairplay+')</td><td>'+team.points+'</td></tr>')
        $('#global-attack tbody').append('<tr><td>'+teamAttacksRankingManager.globalRankingAttack+'</td><td>'+team.team+'</td><td>'+team.rank+'</td><td>'+team.group+'</td><td><strong>'+team.goalsfor+'</strong></td><td>'+team.goalsagainst+'</td><td>'+team.won+'</td><td>'+team.tied+'</td><td>'+team.lost+'</td><td>('+team.fairplay+')</td><td>'+team.points+'</td></tr>')
                teamAttacksRankingManager.globalRankingAttack++;
    }
}

var teamDefencesRankingManager = {
    defenseRankingGroup1:1,
    defenseRankingGroup2:1,
    defenseRankingGroup3:1,
    defenseRankingGroup4:1,
    defenseRankingGroup5:1,
    defenseRankingGroup6:1,
    defenseRankingGroup7:1,
    defenseRankingGroup8:1,
    defenseRankingGroup9:1,
    globalRankingDefense:1,
    add: function(groupId,team,groupNumber){
        var ranking = 0
        if(groupNumber == 1){
            ranking = teamDefencesRankingManager.defenseRankingGroup1++
        }
        if(groupNumber == 2){
            ranking = teamDefencesRankingManager.defenseRankingGroup2++
        }
        if(groupNumber == 3){
            ranking = teamDefencesRankingManager.defenseRankingGroup3++
        }
        if(groupNumber == 4){
            ranking = teamDefencesRankingManager.defenseRankingGroup4++
        }
        if(groupNumber == 5){
            ranking = teamDefencesRankingManager.defenseRankingGroup5++
        }
        if(groupNumber == 6){
            ranking = teamDefencesRankingManager.defenseRankingGroup6++
        }
        if(groupNumber == 7){
            ranking = teamDefencesRankingManager.defenseRankingGroup7++
        }
        if(groupNumber == 8){
            ranking = teamDefencesRankingManager.defenseRankingGroup8++
        }
        if(groupNumber == 9){
            ranking = teamDefencesRankingManager.defenseRankingGroup9++
        }
        $(groupId).find('tbody').append('<tr><td>'+ranking+'</td><td>'+team.team+'</td><td>'+team.rank+'</td><td>'+team.goalsfor+'</td><td><strong>'+team.goalsagainst+'</strong></td><td>'+team.won+'</td><td>'+team.tied+'</td><td>'+team.lost+'</td><td>('+team.fairplay+')</td><td>'+team.points+'</td></tr>')
        $('#global-defense tbody').append('<tr><td>'+teamDefencesRankingManager.globalRankingDefense+'</td><td>'+team.team+'</td><td>'+team.rank+'</td><td>'+team.group+'</td><td>'+team.goalsfor+'</td><td><strong>'+team.goalsagainst+'</strong></td><td>'+team.won+'</td><td>'+team.tied+'</td><td>'+team.lost+'</td><td>('+team.fairplay+')</td><td>'+team.points+'</td></tr>')
                teamDefencesRankingManager.globalRankingDefense++;
    }
}

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