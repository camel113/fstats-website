var region;$(document).ready(function(){var t='<div class="alert alert-dismissable alert-info"><button type="button" class="close" data-dismiss="alert">×</button>Suivez et reportez les matchs des finales en direct avec&nbsp;<a href="/app" title="App footballtopscorers">notre App</a>.</div>';if(null!==document.getElementById("aff-2")){console.log("test"),$("h3").before(t),region="aff";var o=1,d=1,a=1,e=1;$.getJSON("http://127.0.0.1:8080/scorerRanking/4/acvf",function(t){$(".loader").hide(),$.each(t.scorers[1],function(t,a){a.goals>o&&($("#group1 tbody").append("<tr><td>"+d+"</td><td>"+a.scorer+"</td><td>"+a.team+"</td><td>"+a.goals+"</td></tr>"),d++)}),$.each(t.scorers[2],function(t,d){d.goals>o&&($("#group2 tbody").append("<tr><td>"+a+"</td><td>"+d.scorer+"</td><td>"+d.team+"</td><td>"+d.goals+"</td></tr>"),a++)}),$.each(t.scorers[3],function(t,d){d.goals>o&&($("#group3 tbody").append("<tr><td>"+e+"</td><td>"+d.scorer+"</td><td>"+d.team+"</td><td>"+d.goals+"</td></tr>"),e++)}),$(".lastUpdate").append(t.lastUpdate)})}if(null!==document.getElementById("aff-2-teams")){var n=1,r=1,s=1;$.getJSON("http://127.0.0.1:8080/teams/attack/acvf/4",function(t){$.each(t.teams,function(t,o){$("#global-attack tbody").append("<tr><td>"+s+"</td><td>"+o.team+"</td><td>"+o.rank+"</td><td>"+o.group+"</td><td><strong>"+o.goalsfor+"</strong></td><td>"+o.goalsagainst+"</td><td>"+o.won+"</td><td>"+o.tied+"</td><td>"+o.lost+"</td><td>("+o.fairplay+")</td><td>"+o.points+"</td></tr>"),s++})}),$.getJSON("http://127.0.0.1:8080/teams/defense/acvf/4",function(t){$.each(t.teams,function(t,o){$("#global-defense tbody").append("<tr><td>"+r+"</td><td>"+o.team+"</td><td>"+o.rank+"</td><td>"+o.group+"</td><td>"+o.goalsfor+"</td><td><strong>"+o.goalsagainst+"</strong></td><td>"+o.won+"</td><td>"+o.tied+"</td><td>"+o.lost+"</td><td>("+o.fairplay+")</td><td>"+o.points+"</td></tr>"),r++})}),$.getJSON("http://127.0.0.1:8080/teams/global/acvf/4",function(t){$(".loader").hide(),$.each(t.teams,function(t,o){$("#global-standard tbody").append("<tr><td>"+n+"</td><td>"+o.team+"</td><td>"+o.rank+"</td><td>"+o.group+"</td><td>"+o.goalsfor+"</td><td>"+o.goalsagainst+"</td><td>"+o.won+"</td><td>"+o.tied+"</td><td>"+o.lost+"</td><td>("+o.fairplay+")</td><td><strong>"+o.points+"</strong></td></tr>"),n++})}),console.log("test2"),rankingChoice.init(0)}});var rankingChoice={groupCount:0,init:function(t){console.log("####");rankingChoice.groupCount=t,console.log("####"),rankingChoice.hideRankings(),console.log("####"),$("#global, #global-standard").show(),rankingChoice.groupChoice()},groupChoice:function(){$("#group-choice, #rank-choice").on("change",function(){rankingChoice.hideRankings(),group=$("#group-choice option:selected").val(),rankingType=$("#rank-choice option:selected").val(),void 0==group&&(group="global"),$("#"+group).show(),console.log(group),$("#"+group+"-"+rankingType).show()})},hideRankings:function(){console.log("***");for(var t=1;t<=rankingChoice.groupCount;t++)$("#group"+t).hide();$("#global, .ranking").hide()}};