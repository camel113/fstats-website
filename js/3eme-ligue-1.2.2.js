var region,lineColors=["#F44336","#9C27B0","#3F51B5","#2196F3","#009688","#8BC34A","#FFEB3B","#FF9800","#795548","#E91E63","#673AB7","#00BCD4","#CDDC39"];$(document).ready(function(){var t='<div class="alert alert-dismissable alert-info"><button type="button" class="close" data-dismiss="alert">×</button>Suivez et reportez les matchs des finales en direct avec&nbsp;<a href="/app" title="App footballtopscorers">notre App</a>.</div>';if($(".modal-fullscreen").on("show.bs.modal",function(){setTimeout(function(){$(".modal-backdrop").addClass("modal-backdrop-fullscreen")},0)}),$(".modal-fullscreen").on("hidden.bs.modal",function(){$(".modal-backdrop").addClass("modal-backdrop-fullscreen")}),null!==document.getElementById("aff-3")){$("h3").before(t),region="aff";var a=1,e=1,n=1,o=1;$.getJSON("http://footballtopscorers-pmeweb.rhcloud.com/scorerRanking/3/aff",function(t){$(".loader").hide(),$.each(t.scorers[1],function(t,n){n.goals>a&&($("#group1 tbody").append("<tr><td>"+e+"</td><td>"+n.scorer+"</td><td>"+n.team+"</td><td>"+n.goals+"</td></tr>"),e++)}),$.each(t.scorers[2],function(t,e){e.goals>a&&($("#group2 tbody").append("<tr><td>"+n+"</td><td>"+e.scorer+"</td><td>"+e.team+"</td><td>"+e.goals+"</td></tr>"),n++)}),$.each(t.scorers[3],function(t,e){e.goals>a&&($("#group3 tbody").append("<tr><td>"+o+"</td><td>"+e.scorer+"</td><td>"+e.team+"</td><td>"+e.goals+"</td></tr>"),o++)}),$(".lastUpdate").append(t.lastUpdate)})}if(null!==document.getElementById("aff-3-teams")){var d=1,r=[],g=[],s=[];$("h3").before(t),$.getJSON("http://127.0.0.1:8080/teams/global/aff/3",function(t){$(".loader").hide(),$.each(t.teams,function(t,a){1==a.group&&(console.log(r.length),teamRankingManager.add("#group1-standard",a,31),r.push({label:a.team,data:a.evolution,fill:!1,borderColor:lineColors[r.length],pointBackgroundColor:lineColors[r.length],backgroundColor:lineColors[r.length]})),2==a.group&&(teamRankingManager.add("#group2-standard",a,32),g.push({label:a.team,data:a.evolution,fill:!1})),3==a.group&&(teamRankingManager.add("#group3-standard",a,33),s.push({label:a.team,data:a.evolution,fill:!1}))}),$(".chart-link").on("click",function(){"31"==$(this).data("group")&&makeChart.init(r),"32"==$(this).data("group")&&makeChart.init(g),"33"==$(this).data("group")&&makeChart.init(s)})}),$.getJSON("http://footballtopscorers-pmeweb.rhcloud.com/teams/attack/aff/3",function(t){$.each(t.teams,function(t,a){1==a.group&&teamAttacksRankingManager.add("#group1-attack",a,1),2==a.group&&teamAttacksRankingManager.add("#group2-attack",a,2),3==a.group&&teamAttacksRankingManager.add("#group3-attack",a,3)})}),$.getJSON("http://footballtopscorers-pmeweb.rhcloud.com/teams/defense/aff/3",function(t){$.each(t.teams,function(t,a){1==a.group&&teamDefencesRankingManager.add("#group1-defense",a,1),2==a.group&&teamDefencesRankingManager.add("#group2-defense",a,2),3==a.group&&teamDefencesRankingManager.add("#group3-defense",a,3)})}),$.getJSON("http://footballtopscorers-pmeweb.rhcloud.com/teams/global/aff/3",function(t){$.each(t.teams,function(t,a){$("#global-standard tbody").append("<tr><td>"+d+'</td><td><a href="#" data-toggle="modal" data-target="#myModal">'+a.team+"</a></td><td>"+a.rank+"</td><td>"+a.group+"</td><td>"+a.goalsfor+"</td><td>"+a.goalsagainst+"</td><td>"+a.won+"</td><td>"+a.tied+"</td><td>"+a.lost+"</td><td>("+a.fairplay+")</td><td><strong>"+a.points+"</strong></td></tr>"),d++})}),rankingChoice.init(3)}if(null!==document.getElementById("acvf-3")){$("h3").before(t),region="acvf";var a=1,e=1,n=1,o=1,i=1;$.getJSON("http://footballtopscorers-pmeweb.rhcloud.com/scorerRanking/3/acvf",function(t){$(".loader").hide(),$.each(t.scorers[1],function(t,n){n.goals>a&&($("#group1 tbody").append("<tr><td>"+e+"</td><td>"+n.scorer+"</td><td>"+n.team+"</td><td>"+n.goals+"</td></tr>"),e++)}),$.each(t.scorers[2],function(t,e){e.goals>a&&($("#group2 tbody").append("<tr><td>"+n+"</td><td>"+e.scorer+"</td><td>"+e.team+"</td><td>"+e.goals+"</td></tr>"),n++)}),$.each(t.scorers[3],function(t,e){e.goals>a&&($("#group3 tbody").append("<tr><td>"+o+"</td><td>"+e.scorer+"</td><td>"+e.team+"</td><td>"+e.goals+"</td></tr>"),o++)}),$.each(t.scorers[4],function(t,e){e.goals>a&&($("#group4 tbody").append("<tr><td>"+i+"</td><td>"+e.scorer+"</td><td>"+e.team+"</td><td>"+e.goals+"</td></tr>"),i++)}),$(".lastUpdate").append(t.lastUpdate)})}if(null!==document.getElementById("acvf-3-teams")){var d=1;$.getJSON("http://footballtopscorers-pmeweb.rhcloud.com/teams/global/acvf/3",function(t){$(".loader").hide(),$.each(t.teams,function(t,a){1==a.group&&teamRankingManager.add("#group1-standard",a,31),2==a.group&&teamRankingManager.add("#group2-standard",a,32),3==a.group&&teamRankingManager.add("#group3-standard",a,33),4==a.group&&teamRankingManager.add("#group4-standard",a,34)})}),$.getJSON("http://footballtopscorers-pmeweb.rhcloud.com/teams/attack/acvf/3",function(t){$.each(t.teams,function(t,a){1==a.group&&teamAttacksRankingManager.add("#group1-attack",a,1),2==a.group&&teamAttacksRankingManager.add("#group2-attack",a,2),3==a.group&&teamAttacksRankingManager.add("#group3-attack",a,3),4==a.group&&teamAttacksRankingManager.add("#group4-attack",a,4)})}),$.getJSON("http://footballtopscorers-pmeweb.rhcloud.com/teams/defense/acvf/3",function(t){$.each(t.teams,function(t,a){1==a.group&&teamDefencesRankingManager.add("#group1-defense",a,1),2==a.group&&teamDefencesRankingManager.add("#group2-defense",a,2),3==a.group&&teamDefencesRankingManager.add("#group3-defense",a,3),4==a.group&&teamDefencesRankingManager.add("#group4-defense",a,4)})}),$.getJSON("http://footballtopscorers-pmeweb.rhcloud.com/teams/global/acvf/3",function(t){$.each(t.teams,function(t,a){$("#global-standard tbody").append("<tr><td>"+d+"</td><td>"+a.team+"</td><td>"+a.rank+"</td><td>"+a.group+"</td><td>"+a.goalsfor+"</td><td>"+a.goalsagainst+"</td><td>"+a.won+"</td><td>"+a.tied+"</td><td>"+a.lost+"</td><td>("+a.fairplay+")</td><td><strong>"+a.points+"</strong></td></tr>"),d++})}),rankingChoice.init(4)}if(null!==document.getElementById("aff-3-fem")){$("h3").before(t),region="aff";var a=1,e=1;$.getJSON("http://footballtopscorers-pmeweb.rhcloud.com/scorerRanking/30/aff",function(t){$(".loader").hide(),$.each(t.scorers[1],function(t,n){n.goals>a&&($("#group1 tbody").append("<tr><td>"+e+"</td><td>"+n.scorer+"</td><td>"+n.team+"</td><td>"+n.goals+"</td></tr>"),e++)}),$(".lastUpdate").append(t.lastUpdate)})}if(null!==document.getElementById("acvf-3-fem")){$("h3").after('<div class="alert alert-dismissable alert-warning"><button type="button" class="close" data-dismiss="alert">×</button>Communiquez nous les erreurs des résumés de matchs football.ch par message sur&nbsp;<a href="http://www.facebook.com/footballtopscorers" title="Top scorers sur facebook">facebook.com/footballtopscorers</a></div>'),region="acvf";var a=1,e=1;$.getJSON("http://footballtopscorers-pmeweb.rhcloud.com/scorerRanking/30/acvf",function(t){$(".loader").hide(),$.each(t.scorers[1],function(t,n){n.goals>a&&($("#group1 tbody").append("<tr><td>"+e+"</td><td>"+n.scorer+"</td><td>"+n.team+"</td><td>"+n.goals+"</td></tr>"),e++)}),$(".lastUpdate").append(t.lastUpdate)})}});var teamRankingManager={add:function(t,a,e){$(t).find("tbody").append("<tr><td>"+a.rank+'</td><td><a class="chart-link" href="#" data-group="'+e+'">'+a.team+"</a></td><td>"+a.goalsfor+"</td><td>"+a.goalsagainst+"</td><td>"+a.won+"</td><td>"+a.tied+"</td><td>"+a.lost+"</td><td>("+a.fairplay+")</td><td><strong>"+a.points+"</strong></td></tr>")}},teamAttacksRankingManager={attackRankingGroup1:1,attackRankingGroup2:1,attackRankingGroup3:1,attackRankingGroup4:1,attackRankingGroup5:1,attackRankingGroup6:1,attackRankingGroup7:1,attackRankingGroup8:1,attackRankingGroup9:1,globalRankingAttack:1,add:function(t,a,e){var n=0;1==e&&(n=teamAttacksRankingManager.attackRankingGroup1++),2==e&&(n=teamAttacksRankingManager.attackRankingGroup2++),3==e&&(n=teamAttacksRankingManager.attackRankingGroup3++),4==e&&(n=teamAttacksRankingManager.attackRankingGroup4++),5==e&&(n=teamAttacksRankingManager.attackRankingGroup5++),6==e&&(n=teamAttacksRankingManager.attackRankingGroup6++),7==e&&(n=teamAttacksRankingManager.attackRankingGroup7++),8==e&&(n=teamAttacksRankingManager.attackRankingGroup8++),9==e&&(n=teamAttacksRankingManager.attackRankingGroup9++),$(t).find("tbody").append("<tr><td>"+n+"</td><td>"+a.team+"</td><td>"+a.rank+"</td><td><strong>"+a.goalsfor+"</strong></td><td>"+a.goalsagainst+"</td><td>"+a.won+"</td><td>"+a.tied+"</td><td>"+a.lost+"</td><td>("+a.fairplay+")</td><td>"+a.points+"</td></tr>"),$("#global-attack tbody").append("<tr><td>"+teamAttacksRankingManager.globalRankingAttack+"</td><td>"+a.team+"</td><td>"+a.rank+"</td><td>"+a.group+"</td><td><strong>"+a.goalsfor+"</strong></td><td>"+a.goalsagainst+"</td><td>"+a.won+"</td><td>"+a.tied+"</td><td>"+a.lost+"</td><td>("+a.fairplay+")</td><td>"+a.points+"</td></tr>"),teamAttacksRankingManager.globalRankingAttack++}},teamDefencesRankingManager={defenseRankingGroup1:1,defenseRankingGroup2:1,defenseRankingGroup3:1,defenseRankingGroup4:1,defenseRankingGroup5:1,defenseRankingGroup6:1,defenseRankingGroup7:1,defenseRankingGroup8:1,defenseRankingGroup9:1,globalRankingDefense:1,add:function(t,a,e){var n=0;1==e&&(n=teamDefencesRankingManager.defenseRankingGroup1++),2==e&&(n=teamDefencesRankingManager.defenseRankingGroup2++),3==e&&(n=teamDefencesRankingManager.defenseRankingGroup3++),4==e&&(n=teamDefencesRankingManager.defenseRankingGroup4++),5==e&&(n=teamDefencesRankingManager.defenseRankingGroup5++),6==e&&(n=teamDefencesRankingManager.defenseRankingGroup6++),7==e&&(n=teamDefencesRankingManager.defenseRankingGroup7++),8==e&&(n=teamDefencesRankingManager.defenseRankingGroup8++),9==e&&(n=teamDefencesRankingManager.defenseRankingGroup9++),$(t).find("tbody").append("<tr><td>"+n+"</td><td>"+a.team+"</td><td>"+a.rank+"</td><td>"+a.goalsfor+"</td><td><strong>"+a.goalsagainst+"</strong></td><td>"+a.won+"</td><td>"+a.tied+"</td><td>"+a.lost+"</td><td>("+a.fairplay+")</td><td>"+a.points+"</td></tr>"),$("#global-defense tbody").append("<tr><td>"+teamDefencesRankingManager.globalRankingDefense+"</td><td>"+a.team+"</td><td>"+a.rank+"</td><td>"+a.group+"</td><td>"+a.goalsfor+"</td><td><strong>"+a.goalsagainst+"</strong></td><td>"+a.won+"</td><td>"+a.tied+"</td><td>"+a.lost+"</td><td>("+a.fairplay+")</td><td>"+a.points+"</td></tr>"),teamDefencesRankingManager.globalRankingDefense++}},makeChart={init:function(t){var a=$("#myChart");new Chart(a,{type:"line",data:{labels:[1,2,3,4,5,6,7,8,9,10,11],datasets:t},options:{scales:{yAxes:[{ticks:{beginAtZero:!0}}]}}});makeChart.display()},display:function(){$("#myModal").modal()}},rankingChoice={groupCount:0,init:function(t){rankingChoice.groupCount=t,rankingChoice.hideRankings(),$("#global, #global-standard").show(),rankingChoice.groupChoice()},groupChoice:function(){$("#group-choice, #rank-choice").on("change",function(){rankingChoice.hideRankings(),group=$("#group-choice option:selected").val(),rankingType=$("#rank-choice option:selected").val(),$("#"+group).show(),$("#"+group+"-"+rankingType).show()})},hideRankings:function(){for(var t=1;t<=rankingChoice.groupCount;t++)$("#group"+t).hide();$("#global, .ranking").hide()}};