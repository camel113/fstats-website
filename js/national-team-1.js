var stars=0;$(document).ready(function(){console.log("STARS"),$(".joueur").on("click",function(){$(this).hasClass("selected")?($(this).removeClass("selected"),stars--):stars<3&&($(this).addClass("selected"),stars++)})});