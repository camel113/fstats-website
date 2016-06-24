var region,lineColors=["#F44336","#9C27B0","#3F51B5","#2196F3","#009688","#8BC34A","#FFEB3B","#FF9800","#795548","#E91E63","#673AB7","#00BCD4","#CDDC39"];$(document).ready(function(){var t='<div class="alert alert-dismissable alert-info"><button type="button" class="close" data-dismiss="alert">×</button>Suivez et reportez les matchs des finales en direct avec&nbsp;<a href="/app" title="App footballtopscorers">notre App</a>.</div>';if($(".modal-fullscreen").on("show.bs.modal",function(){setTimeout(function(){$(".modal-backdrop").addClass("modal-backdrop-fullscreen")},0)}),$(".modal-fullscreen").on("hidden.bs.modal",function(){$(".modal-backdrop").addClass("modal-backdrop-fullscreen")}),null!==document.getElementById("aff-3")){$("h3").before(t),region="aff";var d=1,o=1,a=1,r=1;$.getJSON("http://footballtopscorers-pmeweb.rhcloud.com/scorerRanking/3/aff",function(t){$(".loader").hide(),$.each(t.scorers[1],function(t,a){a.goals>d&&($("#group1 tbody").append("<tr><td>"+o+"</td><td>"+a.scorer+"</td><td>"+a.team+"</td><td>"+a.goals+"</td></tr>"),o++)}),$.each(t.scorers[2],function(t,o){o.goals>d&&($("#group2 tbody").append("<tr><td>"+a+"</td><td>"+o.scorer+"</td><td>"+o.team+"</td><td>"+o.goals+"</td></tr>"),a++)}),$.each(t.scorers[3],function(t,o){o.goals>d&&($("#group3 tbody").append("<tr><td>"+r+"</td><td>"+o.scorer+"</td><td>"+o.team+"</td><td>"+o.goals+"</td></tr>"),r++)}),$(".lastUpdate").append(t.lastUpdate)})}if(null!==document.getElementById("aff-3-teams")){var n=1,e=1,s=1,l=1,g=1,p=1,i=1,c=1,f=1,u=[],m=[],b=[];$("h3").before(t),$.getJSON("http://127.0.0.1:8080/teams/global/aff/3",function(t){$(".loader").hide(),$.each(t.teams,function(t,d){1==d.group&&(console.log(u.length),teamRankingManager.add("#group1-standard",d,31),u.push({label:d.team,data:d.evolution,fill:!1,borderColor:lineColors[u.length],pointBackgroundColor:lineColors[u.length],backgroundColor:lineColors[u.length]})),2==d.group&&(teamRankingManager.add("#group2-standard",d,32),m.push({label:d.team,data:d.evolution,fill:!1})),3==d.group&&(teamRankingManager.add("#group3-standard",d,33),b.push({label:d.team,data:d.evolution,fill:!1}))}),$(".chart-link").on("click",function(){"31"==$(this).data("group")&&makeChart.init(u),"32"==$(this).data("group")&&makeChart.init(m),"33"==$(this).data("group")&&makeChart.init(b)})}),$.getJSON("http://footballtopscorers-pmeweb.rhcloud.com/teams/attack/aff/3",function(t){$.each(t.teams,function(t,d){1==d.group&&($("#group1-attack tbody").append("<tr><td>"+n+"</td><td>"+d.team+"</td><td>"+d.rank+"</td><td><strong>"+d.goalsfor+"</strong></td><td>"+d.goalsagainst+"</td><td>"+d.won+"</td><td>"+d.tied+"</td><td>"+d.lost+"</td><td>("+d.fairplay+")</td><td>"+d.points+"</td></tr>"),n++),2==d.group&&($("#group2-attack tbody").append("<tr><td>"+s+"</td><td>"+d.team+"</td><td>"+d.rank+"</td><td><strong>"+d.goalsfor+"</strong></td><td>"+d.goalsagainst+"</td><td>"+d.won+"</td><td>"+d.tied+"</td><td>"+d.lost+"</td><td>("+d.fairplay+")</td><td>"+d.points+"</td></tr>"),s++),3==d.group&&($("#group3-attack tbody").append("<tr><td>"+g+"</td><td>"+d.team+"</td><td>"+d.rank+"</td><td><strong>"+d.goalsfor+"</strong></td><td>"+d.goalsagainst+"</td><td>"+d.won+"</td><td>"+d.tied+"</td><td>"+d.lost+"</td><td>("+d.fairplay+")</td><td>"+d.points+"</td></tr>"),g++),$("#global-attack tbody").append("<tr><td>"+f+"</td><td>"+d.team+"</td><td>"+d.rank+"</td><td>"+d.group+"</td><td><strong>"+d.goalsfor+"</strong></td><td>"+d.goalsagainst+"</td><td>"+d.won+"</td><td>"+d.tied+"</td><td>"+d.lost+"</td><td>("+d.fairplay+")</td><td>"+d.points+"</td></tr>"),f++})}),$.getJSON("http://footballtopscorers-pmeweb.rhcloud.com/teams/defense/aff/3",function(t){$.each(t.teams,function(t,d){1==d.group&&($("#group1-defense tbody").append("<tr><td>"+e+"</td><td>"+d.team+"</td><td>"+d.rank+"</td><td>"+d.goalsfor+"</td><td><strong>"+d.goalsagainst+"</strong></td><td>"+d.won+"</td><td>"+d.tied+"</td><td>"+d.lost+"</td><td>("+d.fairplay+")</td><td>"+d.points+"</td></tr>"),e++),2==d.group&&($("#group2-defense tbody").append("<tr><td>"+l+"</td><td>"+d.team+"</td><td>"+d.rank+"</td><td>"+d.goalsfor+"</td><td><strong>"+d.goalsagainst+"</strong></td><td>"+d.won+"</td><td>"+d.tied+"</td><td>"+d.lost+"</td><td>("+d.fairplay+")</td><td>"+d.points+"</td></tr>"),l++),3==d.group&&($("#group3-defense tbody").append("<tr><td>"+p+"</td><td>"+d.team+"</td><td>"+d.rank+"</td><td>"+d.goalsfor+"</td><td><strong>"+d.goalsagainst+"</strong></td><td>"+d.won+"</td><td>"+d.tied+"</td><td>"+d.lost+"</td><td>("+d.fairplay+")</td><td>"+d.points+"</td></tr>"),p++),$("#global-defense tbody").append("<tr><td>"+c+"</td><td>"+d.team+"</td><td>"+d.rank+"</td><td>"+d.group+"</td><td>"+d.goalsfor+"</td><td><strong>"+d.goalsagainst+"</strong></td><td>"+d.won+"</td><td>"+d.tied+"</td><td>"+d.lost+"</td><td>("+d.fairplay+")</td><td>"+d.points+"</td></tr>"),c++})}),$.getJSON("http://footballtopscorers-pmeweb.rhcloud.com/teams/global/aff/3",function(t){$.each(t.teams,function(t,d){$("#global-standard tbody").append("<tr><td>"+i+'</td><td><a href="#" data-toggle="modal" data-target="#myModal">'+d.team+"</a></td><td>"+d.rank+"</td><td>"+d.group+"</td><td>"+d.goalsfor+"</td><td>"+d.goalsagainst+"</td><td>"+d.won+"</td><td>"+d.tied+"</td><td>"+d.lost+"</td><td>("+d.fairplay+")</td><td><strong>"+d.points+"</strong></td></tr>"),i++})}),rankingChoice.init(3)}if(null!==document.getElementById("acvf-3")){$("h3").before(t),region="acvf";var d=1,o=1,a=1,r=1,h=1;$.getJSON("http://footballtopscorers-pmeweb.rhcloud.com/scorerRanking/3/acvf",function(t){$(".loader").hide(),$.each(t.scorers[1],function(t,a){a.goals>d&&($("#group1 tbody").append("<tr><td>"+o+"</td><td>"+a.scorer+"</td><td>"+a.team+"</td><td>"+a.goals+"</td></tr>"),o++)}),$.each(t.scorers[2],function(t,o){o.goals>d&&($("#group2 tbody").append("<tr><td>"+a+"</td><td>"+o.scorer+"</td><td>"+o.team+"</td><td>"+o.goals+"</td></tr>"),a++)}),$.each(t.scorers[3],function(t,o){o.goals>d&&($("#group3 tbody").append("<tr><td>"+r+"</td><td>"+o.scorer+"</td><td>"+o.team+"</td><td>"+o.goals+"</td></tr>"),r++)}),$.each(t.scorers[4],function(t,o){o.goals>d&&($("#group4 tbody").append("<tr><td>"+h+"</td><td>"+o.scorer+"</td><td>"+o.team+"</td><td>"+o.goals+"</td></tr>"),h++)}),$(".lastUpdate").append(t.lastUpdate)})}if(null!==document.getElementById("acvf-3-teams")){var n=1,e=1,s=1,l=1,g=1,p=1,k=1,y=1,i=1,c=1,f=1;$.getJSON("http://footballtopscorers-pmeweb.rhcloud.com/teams/global/acvf/3",function(t){$(".loader").hide(),$.each(t.teams,function(t,d){1==d.group&&$("#group1-standard tbody").append("<tr><td>"+d.rank+"</td><td>"+d.team+"</td><td>"+d.goalsfor+"</td><td>"+d.goalsagainst+"</td><td>"+d.won+"</td><td>"+d.tied+"</td><td>"+d.lost+"</td><td>("+d.fairplay+")</td><td><strong>"+d.points+"</strong></td></tr>"),2==d.group&&$("#group2-standard tbody").append("<tr><td>"+d.rank+"</td><td>"+d.team+"</td><td>"+d.goalsfor+"</td><td>"+d.goalsagainst+"</td><td>"+d.won+"</td><td>"+d.tied+"</td><td>"+d.lost+"</td><td>("+d.fairplay+")</td><td><strong>"+d.points+"</strong></td></tr>"),3==d.group&&$("#group3-standard tbody").append("<tr><td>"+d.rank+"</td><td>"+d.team+"</td><td>"+d.goalsfor+"</td><td>"+d.goalsagainst+"</td><td>"+d.won+"</td><td>"+d.tied+"</td><td>"+d.lost+"</td><td>("+d.fairplay+")</td><td><strong>"+d.points+"</strong></td></tr>"),4==d.group&&$("#group4-standard tbody").append("<tr><td>"+d.rank+"</td><td>"+d.team+"</td><td>"+d.goalsfor+"</td><td>"+d.goalsagainst+"</td><td>"+d.won+"</td><td>"+d.tied+"</td><td>"+d.lost+"</td><td>("+d.fairplay+")</td><td><strong>"+d.points+"</strong></td></tr>")})}),$.getJSON("http://footballtopscorers-pmeweb.rhcloud.com/teams/attack/acvf/3",function(t){$.each(t.teams,function(t,d){1==d.group&&($("#group1-attack tbody").append("<tr><td>"+n+"</td><td>"+d.team+"</td><td>"+d.rank+"</td><td><strong>"+d.goalsfor+"</strong></td><td>"+d.goalsagainst+"</td><td>"+d.won+"</td><td>"+d.tied+"</td><td>"+d.lost+"</td><td>("+d.fairplay+")</td><td>"+d.points+"</td></tr>"),n++),2==d.group&&($("#group2-attack tbody").append("<tr><td>"+s+"</td><td>"+d.team+"</td><td>"+d.rank+"</td><td><strong>"+d.goalsfor+"</strong></td><td>"+d.goalsagainst+"</td><td>"+d.won+"</td><td>"+d.tied+"</td><td>"+d.lost+"</td><td>("+d.fairplay+")</td><td>"+d.points+"</td></tr>"),s++),3==d.group&&($("#group3-attack tbody").append("<tr><td>"+g+"</td><td>"+d.team+"</td><td>"+d.rank+"</td><td><strong>"+d.goalsfor+"</strong></td><td>"+d.goalsagainst+"</td><td>"+d.won+"</td><td>"+d.tied+"</td><td>"+d.lost+"</td><td>("+d.fairplay+")</td><td>"+d.points+"</td></tr>"),g++),4==d.group&&($("#group4-attack tbody").append("<tr><td>"+k+"</td><td>"+d.team+"</td><td>"+d.rank+"</td><td><strong>"+d.goalsfor+"</strong></td><td>"+d.goalsagainst+"</td><td>"+d.won+"</td><td>"+d.tied+"</td><td>"+d.lost+"</td><td>("+d.fairplay+")</td><td>"+d.points+"</td></tr>"),k++),$("#global-attack tbody").append("<tr><td>"+f+"</td><td>"+d.team+"</td><td>"+d.rank+"</td><td>"+d.group+"</td><td><strong>"+d.goalsfor+"</strong></td><td>"+d.goalsagainst+"</td><td>"+d.won+"</td><td>"+d.tied+"</td><td>"+d.lost+"</td><td>("+d.fairplay+")</td><td>"+d.points+"</td></tr>"),f++})}),$.getJSON("http://footballtopscorers-pmeweb.rhcloud.com/teams/defense/acvf/3",function(t){$.each(t.teams,function(t,d){1==d.group&&($("#group1-defense tbody").append("<tr><td>"+e+"</td><td>"+d.team+"</td><td>"+d.rank+"</td><td>"+d.goalsfor+"</td><td><strong>"+d.goalsagainst+"</strong></td><td>"+d.won+"</td><td>"+d.tied+"</td><td>"+d.lost+"</td><td>("+d.fairplay+")</td><td>"+d.points+"</td></tr>"),e++),2==d.group&&($("#group2-defense tbody").append("<tr><td>"+l+"</td><td>"+d.team+"</td><td>"+d.rank+"</td><td>"+d.goalsfor+"</td><td><strong>"+d.goalsagainst+"</strong></td><td>"+d.won+"</td><td>"+d.tied+"</td><td>"+d.lost+"</td><td>("+d.fairplay+")</td><td>"+d.points+"</td></tr>"),l++),3==d.group&&($("#group3-defense tbody").append("<tr><td>"+p+"</td><td>"+d.team+"</td><td>"+d.rank+"</td><td>"+d.goalsfor+"</td><td><strong>"+d.goalsagainst+"</strong></td><td>"+d.won+"</td><td>"+d.tied+"</td><td>"+d.lost+"</td><td>("+d.fairplay+")</td><td>"+d.points+"</td></tr>"),p++),4==d.group&&($("#group4-defense tbody").append("<tr><td>"+y+"</td><td>"+d.team+"</td><td>"+d.rank+"</td><td>"+d.goalsfor+"</td><td><strong>"+d.goalsagainst+"</strong></td><td>"+d.won+"</td><td>"+d.tied+"</td><td>"+d.lost+"</td><td>("+d.fairplay+")</td><td>"+d.points+"</td></tr>"),y++),$("#global-defense tbody").append("<tr><td>"+c+"</td><td>"+d.team+"</td><td>"+d.rank+"</td><td>"+d.group+"</td><td>"+d.goalsfor+"</td><td><strong>"+d.goalsagainst+"</strong></td><td>"+d.won+"</td><td>"+d.tied+"</td><td>"+d.lost+"</td><td>("+d.fairplay+")</td><td>"+d.points+"</td></tr>"),c++})}),$.getJSON("http://footballtopscorers-pmeweb.rhcloud.com/teams/global/acvf/3",function(t){$.each(t.teams,function(t,d){$("#global-standard tbody").append("<tr><td>"+i+"</td><td>"+d.team+"</td><td>"+d.rank+"</td><td>"+d.group+"</td><td>"+d.goalsfor+"</td><td>"+d.goalsagainst+"</td><td>"+d.won+"</td><td>"+d.tied+"</td><td>"+d.lost+"</td><td>("+d.fairplay+")</td><td><strong>"+d.points+"</strong></td></tr>"),i++})}),rankingChoice.init(4)}if(null!==document.getElementById("aff-3-fem")){$("h3").before(t),region="aff";var d=1,o=1;$.getJSON("http://footballtopscorers-pmeweb.rhcloud.com/scorerRanking/30/aff",function(t){$(".loader").hide(),$.each(t.scorers[1],function(t,a){a.goals>d&&($("#group1 tbody").append("<tr><td>"+o+"</td><td>"+a.scorer+"</td><td>"+a.team+"</td><td>"+a.goals+"</td></tr>"),o++)}),$(".lastUpdate").append(t.lastUpdate)})}if(null!==document.getElementById("acvf-3-fem")){$("h3").after('<div class="alert alert-dismissable alert-warning"><button type="button" class="close" data-dismiss="alert">×</button>Communiquez nous les erreurs des résumés de matchs football.ch par message sur&nbsp;<a href="http://www.facebook.com/footballtopscorers" title="Top scorers sur facebook">facebook.com/footballtopscorers</a></div>'),region="acvf";var d=1,o=1;$.getJSON("http://footballtopscorers-pmeweb.rhcloud.com/scorerRanking/30/acvf",function(t){$(".loader").hide(),$.each(t.scorers[1],function(t,a){a.goals>d&&($("#group1 tbody").append("<tr><td>"+o+"</td><td>"+a.scorer+"</td><td>"+a.team+"</td><td>"+a.goals+"</td></tr>"),o++)}),$(".lastUpdate").append(t.lastUpdate)})}});var teamRankingManager={add:function(t,d,o){console.log(t),$(t).find("tbody").append("<tr><td>"+d.rank+'</td><td><a class="chart-link" href="#" data-group="'+o+'">'+d.team+"</a></td><td>"+d.goalsfor+"</td><td>"+d.goalsagainst+"</td><td>"+d.won+"</td><td>"+d.tied+"</td><td>"+d.lost+"</td><td>("+d.fairplay+")</td><td><strong>"+d.points+"</strong></td></tr>")}},makeChart={init:function(t){var d=$("#myChart");new Chart(d,{type:"line",data:{labels:[1,2,3,4,5,6,7,8,9,10,11],datasets:t},options:{scales:{yAxes:[{ticks:{beginAtZero:!0}}]}}});makeChart.display()},display:function(){$("#myModal").modal()}},rankingChoice={groupCount:0,init:function(t){rankingChoice.groupCount=t,rankingChoice.hideRankings(),$("#global, #global-standard").show(),rankingChoice.groupChoice()},groupChoice:function(){$("#group-choice, #rank-choice").on("change",function(){rankingChoice.hideRankings(),group=$("#group-choice option:selected").val(),rankingType=$("#rank-choice option:selected").val(),$("#"+group).show(),$("#"+group+"-"+rankingType).show()})},hideRankings:function(){for(var t=1;t<=rankingChoice.groupCount;t++)$("#group"+t).hide();$("#global, .ranking").hide()}};