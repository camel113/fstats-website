var region;$(document).ready(function(){var t='<div class="alert alert-dismissable alert-info"><button type="button" class="close" data-dismiss="alert">×</button>Suivez et reportez les matchs des finales en direct avec&nbsp;<a href="/app" title="App footballtopscorers">notre App</a>.</div>';if(null!==document.getElementById("aff-4")){$("h3").before(t),region="aff";var d=1,o=1,a=1,r=1,n=1,s=1;$.getJSON("http://footballtopscorers-pmeweb.rhcloud.com/scorerRanking/4/aff",function(t){$(".loader").hide(),$.each(t.scorers[1],function(t,a){a.goals>d&&($("#group1 tbody").append("<tr><td>"+o+"</td><td>"+a.scorer+"</td><td>"+a.team+"</td><td>"+a.goals+"</td></tr>"),o++)}),$.each(t.scorers[2],function(t,o){o.goals>d&&($("#group2 tbody").append("<tr><td>"+a+"</td><td>"+o.scorer+"</td><td>"+o.team+"</td><td>"+o.goals+"</td></tr>"),a++)}),$.each(t.scorers[3],function(t,o){o.goals>d&&($("#group3 tbody").append("<tr><td>"+r+"</td><td>"+o.scorer+"</td><td>"+o.team+"</td><td>"+o.goals+"</td></tr>"),r++)}),$.each(t.scorers[4],function(t,o){o.goals>d&&($("#group4 tbody").append("<tr><td>"+n+"</td><td>"+o.scorer+"</td><td>"+o.team+"</td><td>"+o.goals+"</td></tr>"),n++)}),$.each(t.scorers[5],function(t,o){o.goals>d&&($("#group5 tbody").append("<tr><td>"+s+"</td><td>"+o.scorer+"</td><td>"+o.team+"</td><td>"+o.goals+"</td></tr>"),s++)}),$(".lastUpdate").append(t.lastUpdate)})}if(null!==document.getElementById("aff-4-teams")){var e=1,g=1,p=1,l=1,i=1,f=1,c=1,u=1,y=1,m=1,b=1,k=1,h=1;$.getJSON("http://footballtopscorers-pmeweb.rhcloud.com/teams/global/aff/4",function(t){$(".loader").hide(),$.each(t.teams,function(t,d){1==d.group&&$("#group1-standard tbody").append("<tr><td>"+d.rank+"</td><td>"+d.team+"</td><td>"+d.goalsfor+"</td><td>"+d.goalsagainst+"</td><td>"+d.won+"</td><td>"+d.tied+"</td><td>"+d.lost+"</td><td>("+d.fairplay+")</td><td><strong>"+d.points+"</strong></td></tr>"),2==d.group&&$("#group2-standard tbody").append("<tr><td>"+d.rank+"</td><td>"+d.team+"</td><td>"+d.goalsfor+"</td><td>"+d.goalsagainst+"</td><td>"+d.won+"</td><td>"+d.tied+"</td><td>"+d.lost+"</td><td>("+d.fairplay+")</td><td><strong>"+d.points+"</strong></td></tr>"),3==d.group&&$("#group3-standard tbody").append("<tr><td>"+d.rank+"</td><td>"+d.team+"</td><td>"+d.goalsfor+"</td><td>"+d.goalsagainst+"</td><td>"+d.won+"</td><td>"+d.tied+"</td><td>"+d.lost+"</td><td>("+d.fairplay+")</td><td><strong>"+d.points+"</strong></td></tr>"),4==d.group&&$("#group4-standard tbody").append("<tr><td>"+d.rank+"</td><td>"+d.team+"</td><td>"+d.goalsfor+"</td><td>"+d.goalsagainst+"</td><td>"+d.won+"</td><td>"+d.tied+"</td><td>"+d.lost+"</td><td>("+d.fairplay+")</td><td><strong>"+d.points+"</strong></td></tr>"),5==d.group&&$("#group5-standard tbody").append("<tr><td>"+d.rank+"</td><td>"+d.team+"</td><td>"+d.goalsfor+"</td><td>"+d.goalsagainst+"</td><td>"+d.won+"</td><td>"+d.tied+"</td><td>"+d.lost+"</td><td>("+d.fairplay+")</td><td><strong>"+d.points+"</strong></td></tr>")})}),$.getJSON("http://footballtopscorers-pmeweb.rhcloud.com/teams/attack/aff/4",function(t){$.each(t.teams,function(t,d){1==d.group&&($("#group1-attack tbody").append("<tr><td>"+e+"</td><td>"+d.team+"</td><td>"+d.rank+"</td><td><strong>"+d.goalsfor+"</strong></td><td>"+d.goalsagainst+"</td><td>"+d.won+"</td><td>"+d.tied+"</td><td>"+d.lost+"</td><td>("+d.fairplay+")</td><td>"+d.points+"</td></tr>"),e++),2==d.group&&($("#group2-attack tbody").append("<tr><td>"+p+"</td><td>"+d.team+"</td><td>"+d.rank+"</td><td><strong>"+d.goalsfor+"</strong></td><td>"+d.goalsagainst+"</td><td>"+d.won+"</td><td>"+d.tied+"</td><td>"+d.lost+"</td><td>("+d.fairplay+")</td><td>"+d.points+"</td></tr>"),p++),3==d.group&&($("#group3-attack tbody").append("<tr><td>"+i+"</td><td>"+d.team+"</td><td>"+d.rank+"</td><td><strong>"+d.goalsfor+"</strong></td><td>"+d.goalsagainst+"</td><td>"+d.won+"</td><td>"+d.tied+"</td><td>"+d.lost+"</td><td>("+d.fairplay+")</td><td>"+d.points+"</td></tr>"),i++),4==d.group&&($("#group4-attack tbody").append("<tr><td>"+c+"</td><td>"+d.team+"</td><td>"+d.rank+"</td><td><strong>"+d.goalsfor+"</strong></td><td>"+d.goalsagainst+"</td><td>"+d.won+"</td><td>"+d.tied+"</td><td>"+d.lost+"</td><td>("+d.fairplay+")</td><td>"+d.points+"</td></tr>"),c++),5==d.group&&($("#group5-attack tbody").append("<tr><td>"+y+"</td><td>"+d.team+"</td><td>"+d.rank+"</td><td><strong>"+d.goalsfor+"</strong></td><td>"+d.goalsagainst+"</td><td>"+d.won+"</td><td>"+d.tied+"</td><td>"+d.lost+"</td><td>("+d.fairplay+")</td><td>"+d.points+"</td></tr>"),y++),$("#global-attack tbody").append("<tr><td>"+h+"</td><td>"+d.team+"</td><td>"+d.rank+"</td><td>"+d.group+"</td><td><strong>"+d.goalsfor+"</strong></td><td>"+d.goalsagainst+"</td><td>"+d.won+"</td><td>"+d.tied+"</td><td>"+d.lost+"</td><td>("+d.fairplay+")</td><td>"+d.points+"</td></tr>"),h++})}),$.getJSON("http://footballtopscorers-pmeweb.rhcloud.com/teams/defense/aff/4",function(t){$.each(t.teams,function(t,d){1==d.group&&($("#group1-defense tbody").append("<tr><td>"+g+"</td><td>"+d.team+"</td><td>"+d.rank+"</td><td>"+d.goalsfor+"</td><td><strong>"+d.goalsagainst+"</strong></td><td>"+d.won+"</td><td>"+d.tied+"</td><td>"+d.lost+"</td><td>("+d.fairplay+")</td><td>"+d.points+"</td></tr>"),g++),2==d.group&&($("#group2-defense tbody").append("<tr><td>"+l+"</td><td>"+d.team+"</td><td>"+d.rank+"</td><td>"+d.goalsfor+"</td><td><strong>"+d.goalsagainst+"</strong></td><td>"+d.won+"</td><td>"+d.tied+"</td><td>"+d.lost+"</td><td>("+d.fairplay+")</td><td>"+d.points+"</td></tr>"),l++),3==d.group&&($("#group3-defense tbody").append("<tr><td>"+f+"</td><td>"+d.team+"</td><td>"+d.rank+"</td><td>"+d.goalsfor+"</td><td><strong>"+d.goalsagainst+"</strong></td><td>"+d.won+"</td><td>"+d.tied+"</td><td>"+d.lost+"</td><td>("+d.fairplay+")</td><td>"+d.points+"</td></tr>"),f++),4==d.group&&($("#group4-defense tbody").append("<tr><td>"+u+"</td><td>"+d.team+"</td><td>"+d.rank+"</td><td>"+d.goalsfor+"</td><td><strong>"+d.goalsagainst+"</strong></td><td>"+d.won+"</td><td>"+d.tied+"</td><td>"+d.lost+"</td><td>("+d.fairplay+")</td><td>"+d.points+"</td></tr>"),u++),5==d.group&&($("#group5-defense tbody").append("<tr><td>"+m+"</td><td>"+d.team+"</td><td>"+d.rank+"</td><td>"+d.goalsfor+"</td><td><strong>"+d.goalsagainst+"</strong></td><td>"+d.won+"</td><td>"+d.tied+"</td><td>"+d.lost+"</td><td>("+d.fairplay+")</td><td>"+d.points+"</td></tr>"),m++),$("#global-defense tbody").append("<tr><td>"+k+"</td><td>"+d.team+"</td><td>"+d.rank+"</td><td>"+d.group+"</td><td>"+d.goalsfor+"</td><td><strong>"+d.goalsagainst+"</strong></td><td>"+d.won+"</td><td>"+d.tied+"</td><td>"+d.lost+"</td><td>("+d.fairplay+")</td><td>"+d.points+"</td></tr>"),k++})}),$.getJSON("http://footballtopscorers-pmeweb.rhcloud.com/teams/global/aff/4",function(t){$.each(t.teams,function(t,d){$("#global-standard tbody").append("<tr><td>"+b+"</td><td>"+d.team+"</td><td>"+d.rank+"</td><td>"+d.group+"</td><td>"+d.goalsfor+"</td><td>"+d.goalsagainst+"</td><td>"+d.won+"</td><td>"+d.tied+"</td><td>"+d.lost+"</td><td>("+d.fairplay+")</td><td><strong>"+d.points+"</strong></td></tr>"),b++})}),rankingChoice.init(5)}if(null!==document.getElementById("acvf-4")){$("h3").before(t),region="acvf";var d=1,o=1,a=1,r=1,n=1,s=1,w=1,v=1,C=1;$.getJSON("http://footballtopscorers-pmeweb.rhcloud.com/scorerRanking/4/acvf",function(t){$(".loader").hide(),$.each(t.scorers[1],function(t,a){a.goals>d&&($("#group1 tbody").append("<tr><td>"+o+"</td><td>"+a.scorer+"</td><td>"+a.team+"</td><td>"+a.goals+"</td></tr>"),o++)}),$.each(t.scorers[2],function(t,o){o.goals>d&&($("#group2 tbody").append("<tr><td>"+a+"</td><td>"+o.scorer+"</td><td>"+o.team+"</td><td>"+o.goals+"</td></tr>"),a++)}),$.each(t.scorers[3],function(t,o){o.goals>d&&($("#group3 tbody").append("<tr><td>"+r+"</td><td>"+o.scorer+"</td><td>"+o.team+"</td><td>"+o.goals+"</td></tr>"),r++)}),$.each(t.scorers[4],function(t,o){o.goals>d&&($("#group4 tbody").append("<tr><td>"+n+"</td><td>"+o.scorer+"</td><td>"+o.team+"</td><td>"+o.goals+"</td></tr>"),n++)}),$.each(t.scorers[5],function(t,o){o.goals>d&&($("#group5 tbody").append("<tr><td>"+s+"</td><td>"+o.scorer+"</td><td>"+o.team+"</td><td>"+o.goals+"</td></tr>"),s++)}),$.each(t.scorers[6],function(t,o){o.goals>d&&($("#group6 tbody").append("<tr><td>"+w+"</td><td>"+o.scorer+"</td><td>"+o.team+"</td><td>"+o.goals+"</td></tr>"),w++)}),$.each(t.scorers[7],function(t,o){o.goals>d&&($("#group7 tbody").append("<tr><td>"+v+"</td><td>"+o.scorer+"</td><td>"+o.team+"</td><td>"+o.goals+"</td></tr>"),v++)}),$.each(t.scorers[8],function(t,o){o.goals>d&&($("#group8 tbody").append("<tr><td>"+C+"</td><td>"+o.scorer+"</td><td>"+o.team+"</td><td>"+o.goals+"</td></tr>"),C++)}),$(".lastUpdate").append(t.lastUpdate)})}if(null!==document.getElementById("acvf-4-teams")){var e=1,g=1,p=1,l=1,i=1,f=1,c=1,u=1,y=1,m=1,S=1,J=1,N=1,O=1,R=1,B=1,b=1,k=1,h=1;$.getJSON("http://footballtopscorers-pmeweb.rhcloud.com/teams/global/acvf/4",function(t){$(".loader").hide(),$.each(t.teams,function(t,d){1==d.group&&$("#group1-standard tbody").append("<tr><td>"+d.rank+"</td><td>"+d.team+"</td><td>"+d.goalsfor+"</td><td>"+d.goalsagainst+"</td><td>"+d.won+"</td><td>"+d.tied+"</td><td>"+d.lost+"</td><td>("+d.fairplay+")</td><td><strong>"+d.points+"</strong></td></tr>"),2==d.group&&$("#group2-standard tbody").append("<tr><td>"+d.rank+"</td><td>"+d.team+"</td><td>"+d.goalsfor+"</td><td>"+d.goalsagainst+"</td><td>"+d.won+"</td><td>"+d.tied+"</td><td>"+d.lost+"</td><td>("+d.fairplay+")</td><td><strong>"+d.points+"</strong></td></tr>"),3==d.group&&$("#group3-standard tbody").append("<tr><td>"+d.rank+"</td><td>"+d.team+"</td><td>"+d.goalsfor+"</td><td>"+d.goalsagainst+"</td><td>"+d.won+"</td><td>"+d.tied+"</td><td>"+d.lost+"</td><td>("+d.fairplay+")</td><td><strong>"+d.points+"</strong></td></tr>"),4==d.group&&$("#group4-standard tbody").append("<tr><td>"+d.rank+"</td><td>"+d.team+"</td><td>"+d.goalsfor+"</td><td>"+d.goalsagainst+"</td><td>"+d.won+"</td><td>"+d.tied+"</td><td>"+d.lost+"</td><td>("+d.fairplay+")</td><td><strong>"+d.points+"</strong></td></tr>"),5==d.group&&$("#group5-standard tbody").append("<tr><td>"+d.rank+"</td><td>"+d.team+"</td><td>"+d.goalsfor+"</td><td>"+d.goalsagainst+"</td><td>"+d.won+"</td><td>"+d.tied+"</td><td>"+d.lost+"</td><td>("+d.fairplay+")</td><td><strong>"+d.points+"</strong></td></tr>"),6==d.group&&$("#group6-standard tbody").append("<tr><td>"+d.rank+"</td><td>"+d.team+"</td><td>"+d.goalsfor+"</td><td>"+d.goalsagainst+"</td><td>"+d.won+"</td><td>"+d.tied+"</td><td>"+d.lost+"</td><td>("+d.fairplay+")</td><td><strong>"+d.points+"</strong></td></tr>"),7==d.group&&$("#group7-standard tbody").append("<tr><td>"+d.rank+"</td><td>"+d.team+"</td><td>"+d.goalsfor+"</td><td>"+d.goalsagainst+"</td><td>"+d.won+"</td><td>"+d.tied+"</td><td>"+d.lost+"</td><td>("+d.fairplay+")</td><td><strong>"+d.points+"</strong></td></tr>"),8==d.group&&$("#group8-standard tbody").append("<tr><td>"+d.rank+"</td><td>"+d.team+"</td><td>"+d.goalsfor+"</td><td>"+d.goalsagainst+"</td><td>"+d.won+"</td><td>"+d.tied+"</td><td>"+d.lost+"</td><td>("+d.fairplay+")</td><td><strong>"+d.points+"</strong></td></tr>")})}),$.getJSON("http://footballtopscorers-pmeweb.rhcloud.com/teams/attack/acvf/4",function(t){$.each(t.teams,function(t,d){1==d.group&&($("#group1-attack tbody").append("<tr><td>"+e+"</td><td>"+d.team+"</td><td>"+d.rank+"</td><td><strong>"+d.goalsfor+"</strong></td><td>"+d.goalsagainst+"</td><td>"+d.won+"</td><td>"+d.tied+"</td><td>"+d.lost+"</td><td>("+d.fairplay+")</td><td>"+d.points+"</td></tr>"),e++),2==d.group&&($("#group2-attack tbody").append("<tr><td>"+p+"</td><td>"+d.team+"</td><td>"+d.rank+"</td><td><strong>"+d.goalsfor+"</strong></td><td>"+d.goalsagainst+"</td><td>"+d.won+"</td><td>"+d.tied+"</td><td>"+d.lost+"</td><td>("+d.fairplay+")</td><td>"+d.points+"</td></tr>"),p++),3==d.group&&($("#group3-attack tbody").append("<tr><td>"+i+"</td><td>"+d.team+"</td><td>"+d.rank+"</td><td><strong>"+d.goalsfor+"</strong></td><td>"+d.goalsagainst+"</td><td>"+d.won+"</td><td>"+d.tied+"</td><td>"+d.lost+"</td><td>("+d.fairplay+")</td><td>"+d.points+"</td></tr>"),i++),4==d.group&&($("#group4-attack tbody").append("<tr><td>"+c+"</td><td>"+d.team+"</td><td>"+d.rank+"</td><td><strong>"+d.goalsfor+"</strong></td><td>"+d.goalsagainst+"</td><td>"+d.won+"</td><td>"+d.tied+"</td><td>"+d.lost+"</td><td>("+d.fairplay+")</td><td>"+d.points+"</td></tr>"),c++),5==d.group&&($("#group5-attack tbody").append("<tr><td>"+y+"</td><td>"+d.team+"</td><td>"+d.rank+"</td><td><strong>"+d.goalsfor+"</strong></td><td>"+d.goalsagainst+"</td><td>"+d.won+"</td><td>"+d.tied+"</td><td>"+d.lost+"</td><td>("+d.fairplay+")</td><td>"+d.points+"</td></tr>"),y++),6==d.group&&($("#group6-attack tbody").append("<tr><td>"+S+"</td><td>"+d.team+"</td><td>"+d.rank+"</td><td><strong>"+d.goalsfor+"</strong></td><td>"+d.goalsagainst+"</td><td>"+d.won+"</td><td>"+d.tied+"</td><td>"+d.lost+"</td><td>("+d.fairplay+")</td><td>"+d.points+"</td></tr>"),S++),7==d.group&&($("#group7-attack tbody").append("<tr><td>"+N+"</td><td>"+d.team+"</td><td>"+d.rank+"</td><td><strong>"+d.goalsfor+"</strong></td><td>"+d.goalsagainst+"</td><td>"+d.won+"</td><td>"+d.tied+"</td><td>"+d.lost+"</td><td>("+d.fairplay+")</td><td>"+d.points+"</td></tr>"),N++),8==d.group&&($("#group8-attack tbody").append("<tr><td>"+R+"</td><td>"+d.team+"</td><td>"+d.rank+"</td><td><strong>"+d.goalsfor+"</strong></td><td>"+d.goalsagainst+"</td><td>"+d.won+"</td><td>"+d.tied+"</td><td>"+d.lost+"</td><td>("+d.fairplay+")</td><td>"+d.points+"</td></tr>"),R++),$("#global-attack tbody").append("<tr><td>"+h+"</td><td>"+d.team+"</td><td>"+d.rank+"</td><td>"+d.group+"</td><td><strong>"+d.goalsfor+"</strong></td><td>"+d.goalsagainst+"</td><td>"+d.won+"</td><td>"+d.tied+"</td><td>"+d.lost+"</td><td>("+d.fairplay+")</td><td>"+d.points+"</td></tr>"),h++})}),$.getJSON("http://footballtopscorers-pmeweb.rhcloud.com/teams/defense/acvf/4",function(t){$.each(t.teams,function(t,d){1==d.group&&($("#group1-defense tbody").append("<tr><td>"+g+"</td><td>"+d.team+"</td><td>"+d.rank+"</td><td>"+d.goalsfor+"</td><td><strong>"+d.goalsagainst+"</strong></td><td>"+d.won+"</td><td>"+d.tied+"</td><td>"+d.lost+"</td><td>("+d.fairplay+")</td><td>"+d.points+"</td></tr>"),g++),2==d.group&&($("#group2-defense tbody").append("<tr><td>"+l+"</td><td>"+d.team+"</td><td>"+d.rank+"</td><td>"+d.goalsfor+"</td><td><strong>"+d.goalsagainst+"</strong></td><td>"+d.won+"</td><td>"+d.tied+"</td><td>"+d.lost+"</td><td>("+d.fairplay+")</td><td>"+d.points+"</td></tr>"),l++),3==d.group&&($("#group3-defense tbody").append("<tr><td>"+f+"</td><td>"+d.team+"</td><td>"+d.rank+"</td><td>"+d.goalsfor+"</td><td><strong>"+d.goalsagainst+"</strong></td><td>"+d.won+"</td><td>"+d.tied+"</td><td>"+d.lost+"</td><td>("+d.fairplay+")</td><td>"+d.points+"</td></tr>"),f++),4==d.group&&($("#group4-defense tbody").append("<tr><td>"+u+"</td><td>"+d.team+"</td><td>"+d.rank+"</td><td>"+d.goalsfor+"</td><td><strong>"+d.goalsagainst+"</strong></td><td>"+d.won+"</td><td>"+d.tied+"</td><td>"+d.lost+"</td><td>("+d.fairplay+")</td><td>"+d.points+"</td></tr>"),u++),5==d.group&&($("#group5-defense tbody").append("<tr><td>"+m+"</td><td>"+d.team+"</td><td>"+d.rank+"</td><td>"+d.goalsfor+"</td><td><strong>"+d.goalsagainst+"</strong></td><td>"+d.won+"</td><td>"+d.tied+"</td><td>"+d.lost+"</td><td>("+d.fairplay+")</td><td>"+d.points+"</td></tr>"),m++),6==d.group&&($("#group6-defense tbody").append("<tr><td>"+J+"</td><td>"+d.team+"</td><td>"+d.rank+"</td><td>"+d.goalsfor+"</td><td><strong>"+d.goalsagainst+"</strong></td><td>"+d.won+"</td><td>"+d.tied+"</td><td>"+d.lost+"</td><td>("+d.fairplay+")</td><td>"+d.points+"</td></tr>"),J++),7==d.group&&($("#group7-defense tbody").append("<tr><td>"+O+"</td><td>"+d.team+"</td><td>"+d.rank+"</td><td>"+d.goalsfor+"</td><td><strong>"+d.goalsagainst+"</strong></td><td>"+d.won+"</td><td>"+d.tied+"</td><td>"+d.lost+"</td><td>("+d.fairplay+")</td><td>"+d.points+"</td></tr>"),O++),8==d.group&&($("#group8-defense tbody").append("<tr><td>"+B+"</td><td>"+d.team+"</td><td>"+d.rank+"</td><td>"+d.goalsfor+"</td><td><strong>"+d.goalsagainst+"</strong></td><td>"+d.won+"</td><td>"+d.tied+"</td><td>"+d.lost+"</td><td>("+d.fairplay+")</td><td>"+d.points+"</td></tr>"),B++),$("#global-defense tbody").append("<tr><td>"+k+"</td><td>"+d.team+"</td><td>"+d.rank+"</td><td>"+d.group+"</td><td>"+d.goalsfor+"</td><td><strong>"+d.goalsagainst+"</strong></td><td>"+d.won+"</td><td>"+d.tied+"</td><td>"+d.lost+"</td><td>("+d.fairplay+")</td><td>"+d.points+"</td></tr>"),k++})}),$.getJSON("http://footballtopscorers-pmeweb.rhcloud.com/teams/global/acvf/4",function(t){$.each(t.teams,function(t,d){$("#global-standard tbody").append("<tr><td>"+b+"</td><td>"+d.team+"</td><td>"+d.rank+"</td><td>"+d.group+"</td><td>"+d.goalsfor+"</td><td>"+d.goalsagainst+"</td><td>"+d.won+"</td><td>"+d.tied+"</td><td>"+d.lost+"</td><td>("+d.fairplay+")</td><td><strong>"+d.points+"</strong></td></tr>"),b++})}),rankingChoice.init(8)}});var rankingChoice={groupCount:0,init:function(t){rankingChoice.groupCount=t,rankingChoice.hideRankings(),$("#global, #global-standard").show(),rankingChoice.groupChoice()},groupChoice:function(){$("#group-choice, #rank-choice").on("change",function(){rankingChoice.hideRankings(),group=$("#group-choice option:selected").val(),rankingType=$("#rank-choice option:selected").val(),$("#"+group).show(),$("#"+group+"-"+rankingType).show()})},hideRankings:function(){for(var t=1;t<=rankingChoice.groupCount;t++)$("#group"+t).hide();$("#global, .ranking").hide()}};