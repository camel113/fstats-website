define(["jquery","bootstrap","jquery_magnific_popup","jquery_easing","jquery_flexslider","jquery_scrollTo","owl","wow","chart"],function(o){var e=["#F44336","#9C27B0","#3F51B5","#2196F3","#009688","#8BC34A","#C6FF00","#FFEB3B","#FF9800","#795548","#E91E63","#00BCD4","#CDDC39","#FFC107","#673AB7"];o(document).ready(function(){o(".post-small-image-link").magnificPopup({type:"image"});var a=[],i=0;o(".team-standard").each(function(){var t=o(this).attr("id");a[t]=[],o(this).find("table tbody tr").each(function(){var n=o(this).find(".team-short-name").text(),l=o(this).data("evolution");i=l.length,console.log(i),a[t].push({label:n,data:l,fill:!1,lineTension:0,borderColor:e[a[t].length],pointBackgroundColor:e[a[t].length],backgroundColor:e[a[t].length]})}),o(this).find(".table tbody tr a").each(function(){o(this).on("click",function(e){event.preventDefault(),console.log(o(this)),n.init(a[t])})})}),t.init(Object.keys(a).length),o(function(){o('.scroll-to a[href*="#"]:not([href="#"])').on("click",function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var e=o(this.hash);if(e=e.length?e:o("[name="+this.hash.slice(1)+"]"),e.length)return o("html,body").animate({scrollTop:e.offset().top},1e3),!1}})}),o(".flexslider").flexslider({animation:"fade",touch:!0,directionNav:!1}),o("#owl-screenshots").owlCarousel({autoPlay:3e3,pagination:!1,navigation:!0,items:4,itemsDesktop:[1199,3],itemsDesktopSmall:[979,3],navigationText:["<i class='fa fa-angle-left'>","<i class='fa fa-angle-right'>"]});var l=new WOW({boxClass:"wow",animateClass:"animated",offset:100,mobile:!1});l.init()});var n={init:function(e){console.log("###");var t=["08.09","15.09","22.09","29.09","06.10","13.10"],a=t.length-e[0].data.length;if(a>0)for(i=0;i<a;i++)t.shift();console.log(e[0].data.length),console.log(e.length),console.log(e[0].data.length),console.log("###");var l=o("#myChart");new Chart(l,{type:"line",data:{labels:t,datasets:e,lineTension:0},options:{lineTension:0,tooltips:{enabled:!0,mode:"single"},scales:{yAxes:[{ticks:{beginAtZero:!0,min:1,max:e.length,reverse:!0,autoSkip:!1,stepSize:1,maxTicksLimit:e.length}}]}}});n.display()},display:function(){o("#myModal").modal()}},t={groupCount:0,init:function(e){t.groupCount=e,t.hideRankings(),o("#global, #global-standard").length>0?o("#global, #global-standard").show():o("#group1-standard").show(),t.groupChoice()},groupChoice:function(){o("#group-choice, #rank-choice").on("change",function(){t.hideRankings(),group=o("#group-choice option:selected").val(),rankingType=o("#rank-choice option:selected").val(),o("#"+group).show(),o("#"+group+"-"+rankingType).show()})},hideRankings:function(){for(var e=1;e<=t.groupCount;e++)o("#group"+e).hide();o("#global, .ranking").hide()}}});