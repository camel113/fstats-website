!function(n){n(function(){n(".shop-product-gallery").slick({arrows:!1,dots:!0}),"serviceWorker"in navigator&&navigator.serviceWorker.register("/service-worker.js",{scope:"/"}),snipcartConfig.init(),analyticsConfig.init(),navManager.init(),n(".ligue-teams").length>0&&rankingChoice.init(),infiniteScroll.init(),backToTop.init(),errorReportForm.init();var i={prefetch:!0,cacheLength:2,onStart:{duration:250,render:function(n){n.addClass("is-exiting"),o.restartCSSAnimations()}},onReady:{duration:0,render:function(n,i){n.removeClass("is-exiting"),n.html(i)}},onAfter:function(i,o){n(".ligue-teams").length>0&&(rankingChoice.init(),backToTop.init())}},o=n("#league-stats").smoothState(i).data("smoothState")})}(jQuery);var infiniteScroll={init:function(){$(window).scroll(function(){$(window).scrollTop()+$(window).height()>=$(document).height()-300&&infiniteScroll.loadMoreContent()})},loadMoreContent:function(){console.log("LOADMORE");var n=$("a.next").first();n.each(function(i,o){var e=$(o).attr("href");n.remove();var t=$("<div></div>");t.load(e+" div.scroll-content",function(n,i,o){if("error"!=i){var e=$("div.scroll-content");t.children("div.scroll-content").children().each(function(n,i){e.append(i)})}})})}},backToTop={init:function(){var n=300,i=1200,o=700,e=$(".cd-top");$(window).scroll(function(){$(this).scrollTop()>n?e.addClass("cd-is-visible"):e.removeClass("cd-is-visible cd-fade-out"),$(this).scrollTop()>i&&e.addClass("cd-fade-out")}),e.on("click",function(n){n.preventDefault(),$("body,html").animate({scrollTop:0},o)})}},navManager={init:function(){$(".toggle-overlay").click(function(){$("aside").toggleClass("open"),$(".visible").toggleClass("visible")}),$("nav li.nav-subnav a").click(function(){$(this).next("ul").toggleClass("visible")}),$(".nav-back-one-step").on("click",function(){$(this).parent().parent().toggleClass("visible")})}},rankingChoice={groupCount:0,init:function(n){rankingChoice.groupCount=n,rankingChoice.hideRankings(),$("#global, #global-standard").length>0?$("#global, #global-standard").show():$("#group1-standard").show(),rankingChoice.groupChoice()},groupChoice:function(){$("#group-choice, #rank-choice").on("change",function(){rankingChoice.hideRankings(),group=$("#group-choice option:selected").val(),rankingType=$("#rank-choice option:selected").val(),$("#"+group).show(),$("#"+group+"-"+rankingType).show()})},hideRankings:function(){for(var n=1;n<=rankingChoice.groupCount;n++)$("#group"+n).hide();$("#global, .ranking").hide()}},analyticsConfig={init:function(){$(".shop-product-checkout").on("click",function(n){ga("send",{hitType:"event",eventCategory:"Checkout",eventAction:"click",eventLabel:"Cadenza"}),fbq("track","InitiateCheckout")}),$(".private-ad").on("click",function(n){ga("send",{hitType:"event",eventCategory:"Ad-Click",eventAction:"click",eventLabel:"Cadenza"})}),$(".job-tease").on("click",function(n){ga("send",{hitType:"event",eventCategory:"Job-Tease-Click",eventAction:"click"})})}},snipcartConfig={init:function(){Snipcart.api.configure("split_firstname_and_lastname",!0),Snipcart.execute("registerLocale","fr",{company_name:"Société"})}},errorReportForm={init:function(){console.log("errorReportForm"),$("#errors-report-form").submit(function(n){n.preventDefault();var i=$(this),o=$.post(i.attr("action"),i.serialize());o.done(function(){$("errors-report-form-container").hide(),$("errors-report-form-success").show()}),o.fail(function(){$("errors-report-form-container").hide(),$("#errors-report-form-fail").show()})})}};