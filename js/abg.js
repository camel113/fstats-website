define(["jquery","bootstrap","jquery_magnific_popup","jquery_easing","jquery_flexslider","jquery_scrollTo","owl","wow","chart"],function(e){var o=["#F44336","#9C27B0","#3F51B5","#2196F3","#009688","#8BC34A","#C6FF00","#FFEB3B","#FF9800","#795548","#E91E63","#00BCD4","#CDDC39","#FFC107","#673AB7"];e(document).ready(function(){e(".post-small-image-link").magnificPopup({type:"image"});var a=[],i=0;e(".team-standard").each(function(){var t=e(this).attr("id");a[t]=[],e(this).find("table tbody tr").each(function(){var n=e(this).find(".team-short-name").text(),l=e(this).data("evolution");i=l.length,console.log(i),a[t].push({label:n,data:l,fill:!1,lineTension:0,borderColor:o[a[t].length],pointBackgroundColor:o[a[t].length],backgroundColor:o[a[t].length]})}),e(this).find(".table tbody tr a").each(function(){e(this).on("click",function(o){event.preventDefault(),console.log(e(this)),n.init(a[t])})})}),t.init(Object.keys(a).length),e(function(){e('.scroll-to a[href*="#"]:not([href="#"])').on("click",function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var o=e(this.hash);if(o=o.length?o:e("[name="+this.hash.slice(1)+"]"),o.length)return e("html,body").animate({scrollTop:o.offset().top},1e3),!1}})}),e(".flexslider").flexslider({animation:"fade",touch:!0,directionNav:!1}),e("#owl-screenshots").owlCarousel({autoPlay:3e3,pagination:!1,navigation:!0,items:4,itemsDesktop:[1199,3],itemsDesktopSmall:[979,3],navigationText:["<i class='fa fa-angle-left'>","<i class='fa fa-angle-right'>"]});var l=new WOW({boxClass:"wow",animateClass:"animated",offset:100,mobile:!1});l.init()});var n={init:function(o){console.log("###");var t=["08.09","15.09","22.09","29.09","06.10","13.10","20.10","27.10","03.11","10.11"],a=t.length-o[0].data.length;if(a>0)for(i=0;i<a;i++)t.shift();console.log(o[0].data.length),console.log(o.length),console.log(o[0].data.length),console.log("###");var l=e("#myChart");new Chart(l,{type:"line",data:{labels:t,datasets:o,lineTension:0},options:{lineTension:0,tooltips:{enabled:!0,mode:"single"},scales:{yAxes:[{ticks:{beginAtZero:!0,min:1,max:o.length,reverse:!0,autoSkip:!1,stepSize:1,maxTicksLimit:o.length}}]}}});n.display()},display:function(){e("#myModal").modal()}},t={groupCount:0,init:function(o){t.groupCount=o,t.hideRankings(),e("#global, #global-standard").length>0?e("#global, #global-standard").show():e("#group1-standard").show(),t.groupChoice()},groupChoice:function(){e("#group-choice, #rank-choice").on("change",function(){t.hideRankings(),group=e("#group-choice option:selected").val(),rankingType=e("#rank-choice option:selected").val(),e("#"+group).show(),e("#"+group+"-"+rankingType).show()})},hideRankings:function(){for(var o=1;o<=t.groupCount;o++)e("#group"+o).hide();e("#global, .ranking").hide()}};console.log(e("#product-single")),e("#product-single").owlCarousel({navigation:!0,slideSpeed:300,pagination:!1,singleItem:!0,navigationText:["<i class='pe-7s-angle-left'>","<i class='pe-7s-angle-right'>"]})});