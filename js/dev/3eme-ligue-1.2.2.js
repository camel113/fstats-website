var region;
$(document).ready(function(){
    var concoursAdvertising = '<div class="alert alert-dismissable alert-info"><button type="button" class="close" data-dismiss="alert">×</button>CONCOURS ! Envoyez-nous les vidéos de vos plus beaux buts et gagnez une paire de Nike Hypervenom.&nbsp;<a href="/topbuts" title="Concours buts en vidéo">Plus d\'infos ici</a>.</div>'
    var errorMessage = '<div class="alert alert-dismissable alert-success"><button type="button" class="close" data-dismiss="alert">×</button>Communiquez nous les erreurs par message sur&nbsp;<a href="http://www.facebook.com/footballtopscorers" title="Top scorers sur facebook">facebook.com/footballtopscorers</a> ou à goal@footballtopscorers.ch</div>'
    var appAdvertising = '<div class="alert alert-dismissable alert-info"><button type="button" class="close" data-dismiss="alert">×</button>Suivez et reportez les matchs des finales en direct avec&nbsp;<a href="/app" title="App footballtopscorers">notre App</a>.</div>'

    $(".modal-fullscreen").on('show.bs.modal', function () {
      setTimeout( function() {
        $(".modal-backdrop").addClass("modal-backdrop-fullscreen");
      }, 0);
    });
    $(".modal-fullscreen").on('hidden.bs.modal', function () {
      $(".modal-backdrop").addClass("modal-backdrop-fullscreen");
    });

    var ctx = $("#myChart");
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: [1,2,3,4],
            datasets: [{
                fill: false,
                lineTension: 0,
                label: 'Scatter Dataset',
                data: [1,2,4]
            },{
                fill: false,
                lineTension: 0,
                label: 'Scatter XXX',
                data: [2,4,8]
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            }
        }
    });

    if(document.getElementById('aff-3') !== null){
        
        $('h3').before(appAdvertising)

        region = 'aff'
        var minGoals = 1;
        var scorerRankingGroup1 = 1;
        var scorerRankingGroup2 = 1;
        var scorerRankingGroup3 = 1;

        $.getJSON( 'http://footballtopscorers-pmeweb.rhcloud.com/scorerRanking/3/aff',function(data){
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
    if(document.getElementById('aff-3-teams') !== null){
        var attackRankingGroup1 = 1;
        var defenseRankingGroup1 = 1;
        var attackRankingGroup2 = 1;
        var defenseRankingGroup2 = 1;
        var attackRankingGroup3 = 1;
        var defenseRankingGroup3 = 1;
        var globalRanking = 1;
        var globalRankingDefense = 1;
        var globalRankingAttack = 1;

        $('h3').before(appAdvertising)

        $.getJSON('http://footballtopscorers-pmeweb.rhcloud.com/teams/global/aff/3',function(data){
            $('.loader').hide()
            $.each( data.teams,function(i, team){
                if(team.group == 1){
                    $('#group1-standard tbody').append('<tr><td>'+team.rank+'</td><td>'+team.team+'</a></td><td>'+team.goalsfor+'</td><td>'+team.goalsagainst+'</td><td>'+team.won+'</td><td>'+team.tied+'</td><td>'+team.lost+'</td><td>('+team.fairplay+')</td><td><strong>'+team.points+'</strong></td></tr>')
                }
                if(team.group == 2){
                    $('#group2-standard tbody').append('<tr><td>'+team.rank+'</td><td>'+team.team+'</td><td>'+team.goalsfor+'</td><td>'+team.goalsagainst+'</td><td>'+team.won+'</td><td>'+team.tied+'</td><td>'+team.lost+'</td><td>('+team.fairplay+')</td><td><strong>'+team.points+'</strong></td></tr>')
                }
                if(team.group == 3){
                    $('#group3-standard tbody').append('<tr><td>'+team.rank+'</td><td>'+team.team+'</td><td>'+team.goalsfor+'</td><td>'+team.goalsagainst+'</td><td>'+team.won+'</td><td>'+team.tied+'</td><td>'+team.lost+'</td><td>('+team.fairplay+')</td><td><strong>'+team.points+'</strong></td></tr>')
                }
            })
        })
        $.getJSON('http://footballtopscorers-pmeweb.rhcloud.com/teams/attack/aff/3',function(data){
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
                $('#global-attack tbody').append('<tr><td>'+globalRankingAttack+'</td><td>'+team.team+'</td><td>'+team.rank+'</td><td>'+team.group+'</td><td><strong>'+team.goalsfor+'</strong></td><td>'+team.goalsagainst+'</td><td>'+team.won+'</td><td>'+team.tied+'</td><td>'+team.lost+'</td><td>('+team.fairplay+')</td><td>'+team.points+'</td></tr>')
                globalRankingAttack++;
            })
        })
        $.getJSON('http://footballtopscorers-pmeweb.rhcloud.com/teams/defense/aff/3',function(data){
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
                $('#global-defense tbody').append('<tr><td>'+globalRankingDefense+'</td><td>'+team.team+'</td><td>'+team.rank+'</td><td>'+team.group+'</td><td>'+team.goalsfor+'</td><td><strong>'+team.goalsagainst+'</strong></td><td>'+team.won+'</td><td>'+team.tied+'</td><td>'+team.lost+'</td><td>('+team.fairplay+')</td><td>'+team.points+'</td></tr>')
                globalRankingDefense++;
            })
        })

        $.getJSON('http://footballtopscorers-pmeweb.rhcloud.com/teams/global/aff/3',function(data){
            $.each( data.teams,function(i, team){
                $('#global-standard tbody').append('<tr><td>'+globalRanking+'</td><td><a href="#" data-toggle="modal" data-target="#myModal">'+team.team+'</a></td><td>'+team.rank+'</td><td>'+team.group+'</td><td>'+team.goalsfor+'</td><td>'+team.goalsagainst+'</td><td>'+team.won+'</td><td>'+team.tied+'</td><td>'+team.lost+'</td><td>('+team.fairplay+')</td><td><strong>'+team.points+'</strong></td></tr>')
                globalRanking++;
            })
        })

        rankingChoice.init(3)
    }
    if(document.getElementById('acvf-3') !== null){
        
        $('h3').before(appAdvertising)

        region = 'acvf'
        var minGoals = 1;
        var scorerRankingGroup1 = 1;
        var scorerRankingGroup2 = 1;
        var scorerRankingGroup3 = 1;
        var scorerRankingGroup4 = 1;

        $.getJSON( 'http://footballtopscorers-pmeweb.rhcloud.com/scorerRanking/3/acvf',function(data){
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
            $('.lastUpdate').append(data.lastUpdate)
        })
    }
    if(document.getElementById('acvf-3-teams') !== null){
        var attackRankingGroup1 = 1;
        var defenseRankingGroup1 = 1;
        var attackRankingGroup2 = 1;
        var defenseRankingGroup2 = 1;
        var attackRankingGroup3 = 1;
        var defenseRankingGroup3 = 1;
        var attackRankingGroup4 = 1;
        var defenseRankingGroup4 = 1;
        var globalRanking = 1;
        var globalRankingDefense = 1;
        var globalRankingAttack = 1;

        $.getJSON('http://footballtopscorers-pmeweb.rhcloud.com/teams/global/acvf/3',function(data){
            $('.loader').hide()
            $.each(data.teams,function(i, team){
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
            })
        })
        $.getJSON('http://footballtopscorers-pmeweb.rhcloud.com/teams/attack/acvf/3',function(data){
            $.each(data.teams,function(i, team){
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
                $('#global-attack tbody').append('<tr><td>'+globalRankingAttack+'</td><td>'+team.team+'</td><td>'+team.rank+'</td><td>'+team.group+'</td><td><strong>'+team.goalsfor+'</strong></td><td>'+team.goalsagainst+'</td><td>'+team.won+'</td><td>'+team.tied+'</td><td>'+team.lost+'</td><td>('+team.fairplay+')</td><td>'+team.points+'</td></tr>')
                globalRankingAttack++;
            })
        })
        $.getJSON('http://footballtopscorers-pmeweb.rhcloud.com/teams/defense/acvf/3',function(data){
            $.each(data.teams,function(i, team){
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
                $('#global-defense tbody').append('<tr><td>'+globalRankingDefense+'</td><td>'+team.team+'</td><td>'+team.rank+'</td><td>'+team.group+'</td><td>'+team.goalsfor+'</td><td><strong>'+team.goalsagainst+'</strong></td><td>'+team.won+'</td><td>'+team.tied+'</td><td>'+team.lost+'</td><td>('+team.fairplay+')</td><td>'+team.points+'</td></tr>')
                globalRankingDefense++;
            })
        })

        $.getJSON('http://footballtopscorers-pmeweb.rhcloud.com/teams/global/acvf/3',function(data){
            $.each( data.teams,function(i, team){
                $('#global-standard tbody').append('<tr><td>'+globalRanking+'</td><td>'+team.team+'</td><td>'+team.rank+'</td><td>'+team.group+'</td><td>'+team.goalsfor+'</td><td>'+team.goalsagainst+'</td><td>'+team.won+'</td><td>'+team.tied+'</td><td>'+team.lost+'</td><td>('+team.fairplay+')</td><td><strong>'+team.points+'</strong></td></tr>')
                globalRanking++;
            })
        })

        rankingChoice.init(4)
        
    }
    if(document.getElementById('aff-3-fem') !== null){
        
        $('h3').before(appAdvertising)

        region = 'aff'
        var minGoals = 1;
        var scorerRankingGroup1 = 1;

        $.getJSON( 'http://footballtopscorers-pmeweb.rhcloud.com/scorerRanking/30/aff',function(data){
            $('.loader').hide()
            $.each( data.scorers["1"], function( i, scorer ) {
                if(scorer.goals > minGoals){
                    $('#group1 tbody').append('<tr><td>'+scorerRankingGroup1+'</td><td>'+scorer.scorer+'</td><td>'+scorer.team+'</td><td>'+scorer.goals+'</td></tr>')
                    scorerRankingGroup1++
                }
            });
            $('.lastUpdate').append(data.lastUpdate)
        })
    }
    if(document.getElementById('acvf-3-fem') !== null){
        
        $('h3').after('<div class="alert alert-dismissable alert-warning"><button type="button" class="close" data-dismiss="alert">×</button>Communiquez nous les erreurs des résumés de matchs football.ch par message sur&nbsp;<a href="http://www.facebook.com/footballtopscorers" title="Top scorers sur facebook">facebook.com/footballtopscorers</a></div>')

        region = 'acvf'
        var minGoals = 1;
        var scorerRankingGroup1 = 1;

        $.getJSON( 'http://footballtopscorers-pmeweb.rhcloud.com/scorerRanking/30/acvf',function(data){
            $('.loader').hide()
            $.each( data.scorers["1"], function( i, scorer ) {
                if(scorer.goals > minGoals){
                    $('#group1 tbody').append('<tr><td>'+scorerRankingGroup1+'</td><td>'+scorer.scorer+'</td><td>'+scorer.team+'</td><td>'+scorer.goals+'</td></tr>')
                    scorerRankingGroup1++
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