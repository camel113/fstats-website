var region;$(document).ready(function(){if(null!==document.getElementById("aff-3")){region="aff";var t=1,d=1,o=1,a=1;$.getJSON("http://footballtopscorers-pmeweb.rhcloud.com/scorerRanking/3/aff",function(r){$(".loader").hide(),$.each(r.scorers[1],function(o,a){a.goals>t&&($("#group1 tbody").append("<tr><td>"+d+"</td><td>"+a.scorer+"</td><td>"+a.team+"</td><td>"+a.goals+"</td></tr>"),d++)}),$.each(r.scorers[2],function(d,a){a.goals>t&&($("#group2 tbody").append("<tr><td>"+o+"</td><td>"+a.scorer+"</td><td>"+a.team+"</td><td>"+a.goals+"</td></tr>"),o++)}),$.each(r.scorers[3],function(d,o){o.goals>t&&($("#group3 tbody").append("<tr><td>"+a+"</td><td>"+o.scorer+"</td><td>"+o.team+"</td><td>"+o.goals+"</td></tr>"),a++)}),$(".lastUpdate").append(r.lastUpdate)})}if(null!==document.getElementById("aff-3-teams")){var r=1,n=1,s=1,e=1,g=1,p=1,l=1,i=1,c=1;$.getJSON("http://footballtopscorers-pmeweb.rhcloud.com/teams/global/aff/3",function(t){$(".loader").hide(),$.each(t.teams,function(t,d){1==d.group&&$("#group1-standard tbody").append("<tr><td>"+d.rank+"</td><td>"+d.team+"</td><td>"+d.goalsfor+"</td><td>"+d.goalsagainst+"</td><td>"+d.won+"</td><td>"+d.tied+"</td><td>"+d.lost+"</td><td>("+d.fairplay+")</td><td><strong>"+d.points+"</strong></td></tr>"),2==d.group&&$("#group2-standard tbody").append("<tr><td>"+d.rank+"</td><td>"+d.team+"</td><td>"+d.goalsfor+"</td><td>"+d.goalsagainst+"</td><td>"+d.won+"</td><td>"+d.tied+"</td><td>"+d.lost+"</td><td>("+d.fairplay+")</td><td><strong>"+d.points+"</strong></td></tr>"),3==d.group&&$("#group3-standard tbody").append("<tr><td>"+d.rank+"</td><td>"+d.team+"</td><td>"+d.goalsfor+"</td><td>"+d.goalsagainst+"</td><td>"+d.won+"</td><td>"+d.tied+"</td><td>"+d.lost+"</td><td>("+d.fairplay+")</td><td><strong>"+d.points+"</strong></td></tr>")})}),$.getJSON("http://footballtopscorers-pmeweb.rhcloud.com/teams/attack/aff/3",function(t){$.each(t.teams,function(t,d){1==d.group&&($("#group1-attack tbody").append("<tr><td>"+r+"</td><td>"+d.team+"</td><td>"+d.rank+"</td><td><strong>"+d.goalsfor+"</strong></td><td>"+d.goalsagainst+"</td><td>"+d.won+"</td><td>"+d.tied+"</td><td>"+d.lost+"</td><td>("+d.fairplay+")</td><td>"+d.points+"</td></tr>"),r++),2==d.group&&($("#group2-attack tbody").append("<tr><td>"+s+"</td><td>"+d.team+"</td><td>"+d.rank+"</td><td><strong>"+d.goalsfor+"</strong></td><td>"+d.goalsagainst+"</td><td>"+d.won+"</td><td>"+d.tied+"</td><td>"+d.lost+"</td><td>("+d.fairplay+")</td><td>"+d.points+"</td></tr>"),s++),3==d.group&&($("#group3-attack tbody").append("<tr><td>"+g+"</td><td>"+d.team+"</td><td>"+d.rank+"</td><td><strong>"+d.goalsfor+"</strong></td><td>"+d.goalsagainst+"</td><td>"+d.won+"</td><td>"+d.tied+"</td><td>"+d.lost+"</td><td>("+d.fairplay+")</td><td>"+d.points+"</td></tr>"),g++),$("#global-attack tbody").append("<tr><td>"+c+"</td><td>"+d.team+"</td><td>"+d.rank+"</td><td>"+d.group+"</td><td><strong>"+d.goalsfor+"</strong></td><td>"+d.goalsagainst+"</td><td>"+d.won+"</td><td>"+d.tied+"</td><td>"+d.lost+"</td><td>("+d.fairplay+")</td><td>"+d.points+"</td></tr>"),c++})}),$.getJSON("http://footballtopscorers-pmeweb.rhcloud.com/teams/defense/aff/3",function(t){$.each(t.teams,function(t,d){1==d.group&&($("#group1-defense tbody").append("<tr><td>"+n+"</td><td>"+d.team+"</td><td>"+d.rank+"</td><td>"+d.goalsfor+"</td><td><strong>"+d.goalsagainst+"</strong></td><td>"+d.won+"</td><td>"+d.tied+"</td><td>"+d.lost+"</td><td>("+d.fairplay+")</td><td>"+d.points+"</td></tr>"),n++),2==d.group&&($("#group2-defense tbody").append("<tr><td>"+e+"</td><td>"+d.team+"</td><td>"+d.rank+"</td><td>"+d.goalsfor+"</td><td><strong>"+d.goalsagainst+"</strong></td><td>"+d.won+"</td><td>"+d.tied+"</td><td>"+d.lost+"</td><td>("+d.fairplay+")</td><td>"+d.points+"</td></tr>"),e++),3==d.group&&($("#group3-defense tbody").append("<tr><td>"+p+"</td><td>"+d.team+"</td><td>"+d.rank+"</td><td>"+d.goalsfor+"</td><td><strong>"+d.goalsagainst+"</strong></td><td>"+d.won+"</td><td>"+d.tied+"</td><td>"+d.lost+"</td><td>("+d.fairplay+")</td><td>"+d.points+"</td></tr>"),p++),$("#global-defense tbody").append("<tr><td>"+i+"</td><td>"+d.team+"</td><td>"+d.rank+"</td><td>"+d.group+"</td><td>"+d.goalsfor+"</td><td><strong>"+d.goalsagainst+"</strong></td><td>"+d.won+"</td><td>"+d.tied+"</td><td>"+d.lost+"</td><td>("+d.fairplay+")</td><td>"+d.points+"</td></tr>"),i++})}),$.getJSON("http://footballtopscorers-pmeweb.rhcloud.com/teams/global/aff/3",function(t){$.each(t.teams,function(t,d){$("#global-standard tbody").append("<tr><td>"+l+"</td><td>"+d.team+"</td><td>"+d.rank+"</td><td>"+d.group+"</td><td>"+d.goalsfor+"</td><td>"+d.goalsagainst+"</td><td>"+d.won+"</td><td>"+d.tied+"</td><td>"+d.lost+"</td><td>("+d.fairplay+")</td><td><strong>"+d.points+"</strong></td></tr>"),l++})}),rankingChoice.init(3)}if(null!==document.getElementById("acvf-3")){region="acvf";var t=1,d=1,o=1,a=1,f=1;$.getJSON("http://footballtopscorers-pmeweb.rhcloud.com/scorerRanking/3/acvf",function(r){$(".loader").hide(),$.each(r.scorers[1],function(o,a){a.goals>t&&($("#group1 tbody").append("<tr><td>"+d+"</td><td>"+a.scorer+"</td><td>"+a.team+"</td><td>"+a.goals+"</td></tr>"),d++)}),$.each(r.scorers[2],function(d,a){a.goals>t&&($("#group2 tbody").append("<tr><td>"+o+"</td><td>"+a.scorer+"</td><td>"+a.team+"</td><td>"+a.goals+"</td></tr>"),o++)}),$.each(r.scorers[3],function(d,o){o.goals>t&&($("#group3 tbody").append("<tr><td>"+a+"</td><td>"+o.scorer+"</td><td>"+o.team+"</td><td>"+o.goals+"</td></tr>"),a++)}),$.each(r.scorers[4],function(d,o){o.goals>t&&($("#group4 tbody").append("<tr><td>"+f+"</td><td>"+o.scorer+"</td><td>"+o.team+"</td><td>"+o.goals+"</td></tr>"),f++)}),$(".lastUpdate").append(r.lastUpdate)})}if(null!==document.getElementById("acvf-3-teams")){var r=1,n=1,s=1,e=1,g=1,p=1,u=1,m=1,l=1,i=1,c=1;$.getJSON("http://footballtopscorers-pmeweb.rhcloud.com/teams/global/acvf/3",function(t){$(".loader").hide(),$.each(t.teams,function(t,d){1==d.group&&$("#group1-standard tbody").append("<tr><td>"+d.rank+"</td><td>"+d.team+"</td><td>"+d.goalsfor+"</td><td>"+d.goalsagainst+"</td><td>"+d.won+"</td><td>"+d.tied+"</td><td>"+d.lost+"</td><td>("+d.fairplay+")</td><td><strong>"+d.points+"</strong></td></tr>"),2==d.group&&$("#group2-standard tbody").append("<tr><td>"+d.rank+"</td><td>"+d.team+"</td><td>"+d.goalsfor+"</td><td>"+d.goalsagainst+"</td><td>"+d.won+"</td><td>"+d.tied+"</td><td>"+d.lost+"</td><td>("+d.fairplay+")</td><td><strong>"+d.points+"</strong></td></tr>"),3==d.group&&$("#group3-standard tbody").append("<tr><td>"+d.rank+"</td><td>"+d.team+"</td><td>"+d.goalsfor+"</td><td>"+d.goalsagainst+"</td><td>"+d.won+"</td><td>"+d.tied+"</td><td>"+d.lost+"</td><td>("+d.fairplay+")</td><td><strong>"+d.points+"</strong></td></tr>"),4==d.group&&$("#group4-standard tbody").append("<tr><td>"+d.rank+"</td><td>"+d.team+"</td><td>"+d.goalsfor+"</td><td>"+d.goalsagainst+"</td><td>"+d.won+"</td><td>"+d.tied+"</td><td>"+d.lost+"</td><td>("+d.fairplay+")</td><td><strong>"+d.points+"</strong></td></tr>")})}),$.getJSON("http://footballtopscorers-pmeweb.rhcloud.com/teams/attack/acvf/3",function(t){$.each(t.teams,function(t,d){1==d.group&&($("#group1-attack tbody").append("<tr><td>"+r+"</td><td>"+d.team+"</td><td>"+d.rank+"</td><td><strong>"+d.goalsfor+"</strong></td><td>"+d.goalsagainst+"</td><td>"+d.won+"</td><td>"+d.tied+"</td><td>"+d.lost+"</td><td>("+d.fairplay+")</td><td>"+d.points+"</td></tr>"),r++),2==d.group&&($("#group2-attack tbody").append("<tr><td>"+s+"</td><td>"+d.team+"</td><td>"+d.rank+"</td><td><strong>"+d.goalsfor+"</strong></td><td>"+d.goalsagainst+"</td><td>"+d.won+"</td><td>"+d.tied+"</td><td>"+d.lost+"</td><td>("+d.fairplay+")</td><td>"+d.points+"</td></tr>"),s++),3==d.group&&($("#group3-attack tbody").append("<tr><td>"+g+"</td><td>"+d.team+"</td><td>"+d.rank+"</td><td><strong>"+d.goalsfor+"</strong></td><td>"+d.goalsagainst+"</td><td>"+d.won+"</td><td>"+d.tied+"</td><td>"+d.lost+"</td><td>("+d.fairplay+")</td><td>"+d.points+"</td></tr>"),g++),4==d.group&&($("#group4-attack tbody").append("<tr><td>"+u+"</td><td>"+d.team+"</td><td>"+d.rank+"</td><td><strong>"+d.goalsfor+"</strong></td><td>"+d.goalsagainst+"</td><td>"+d.won+"</td><td>"+d.tied+"</td><td>"+d.lost+"</td><td>("+d.fairplay+")</td><td>"+d.points+"</td></tr>"),u++),$("#global-attack tbody").append("<tr><td>"+c+"</td><td>"+d.team+"</td><td>"+d.rank+"</td><td>"+d.group+"</td><td><strong>"+d.goalsfor+"</strong></td><td>"+d.goalsagainst+"</td><td>"+d.won+"</td><td>"+d.tied+"</td><td>"+d.lost+"</td><td>("+d.fairplay+")</td><td>"+d.points+"</td></tr>"),c++})}),$.getJSON("http://footballtopscorers-pmeweb.rhcloud.com/teams/defense/acvf/3",function(t){$.each(t.teams,function(t,d){1==d.group&&($("#group1-defense tbody").append("<tr><td>"+n+"</td><td>"+d.team+"</td><td>"+d.rank+"</td><td>"+d.goalsfor+"</td><td><strong>"+d.goalsagainst+"</strong></td><td>"+d.won+"</td><td>"+d.tied+"</td><td>"+d.lost+"</td><td>("+d.fairplay+")</td><td>"+d.points+"</td></tr>"),n++),2==d.group&&($("#group2-defense tbody").append("<tr><td>"+e+"</td><td>"+d.team+"</td><td>"+d.rank+"</td><td>"+d.goalsfor+"</td><td><strong>"+d.goalsagainst+"</strong></td><td>"+d.won+"</td><td>"+d.tied+"</td><td>"+d.lost+"</td><td>("+d.fairplay+")</td><td>"+d.points+"</td></tr>"),e++),3==d.group&&($("#group3-defense tbody").append("<tr><td>"+p+"</td><td>"+d.team+"</td><td>"+d.rank+"</td><td>"+d.goalsfor+"</td><td><strong>"+d.goalsagainst+"</strong></td><td>"+d.won+"</td><td>"+d.tied+"</td><td>"+d.lost+"</td><td>("+d.fairplay+")</td><td>"+d.points+"</td></tr>"),p++),4==d.group&&($("#group4-defense tbody").append("<tr><td>"+m+"</td><td>"+d.team+"</td><td>"+d.rank+"</td><td>"+d.goalsfor+"</td><td><strong>"+d.goalsagainst+"</strong></td><td>"+d.won+"</td><td>"+d.tied+"</td><td>"+d.lost+"</td><td>("+d.fairplay+")</td><td>"+d.points+"</td></tr>"),m++),$("#global-defense tbody").append("<tr><td>"+i+"</td><td>"+d.team+"</td><td>"+d.rank+"</td><td>"+d.group+"</td><td>"+d.goalsfor+"</td><td><strong>"+d.goalsagainst+"</strong></td><td>"+d.won+"</td><td>"+d.tied+"</td><td>"+d.lost+"</td><td>("+d.fairplay+")</td><td>"+d.points+"</td></tr>"),i++})}),$.getJSON("http://footballtopscorers-pmeweb.rhcloud.com/teams/global/acvf/3",function(t){$.each(t.teams,function(t,d){$("#global-standard tbody").append("<tr><td>"+l+"</td><td>"+d.team+"</td><td>"+d.rank+"</td><td>"+d.group+"</td><td>"+d.goalsfor+"</td><td>"+d.goalsagainst+"</td><td>"+d.won+"</td><td>"+d.tied+"</td><td>"+d.lost+"</td><td>("+d.fairplay+")</td><td><strong>"+d.points+"</strong></td></tr>"),l++})}),rankingChoice.init(4)}});var rankingChoice={groupCount:0,init:function(t){rankingChoice.groupCount=t,rankingChoice.hideRankings(),$("#global, #global-standard").show(),rankingChoice.groupChoice()},groupChoice:function(){$("#group-choice, #rank-choice").on("change",function(){rankingChoice.hideRankings(),group=$("#group-choice option:selected").val(),rankingType=$("#rank-choice option:selected").val(),$("#"+group).show(),$("#"+group+"-"+rankingType).show()})},hideRankings:function(){for(var t=1;t<=rankingChoice.groupCount;t++)$("#group"+t).hide();$("#global, .ranking").hide()}};