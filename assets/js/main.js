!function(n){n(function(){console.log("Test"),"serviceWorker"in navigator&&navigator.serviceWorker.register("/service-worker.js",{scope:"/"}),analyticsConfig.init(),navManager.init(),n(".ligue-teams").length>0&&rankingChoice.init(),infiniteScroll.init(),backToTop.init(),errorReportForm.init(),contactForm.init(),n("#league-stats").length>0&&smoothState.init()})}(jQuery);var smoothState={init:function(){var n={prefetch:!0,cacheLength:2,onStart:{duration:250,render:function(n){n.addClass("is-exiting"),o.restartCSSAnimations()}},onReady:{duration:0,render:function(n,o){n.removeClass("is-exiting"),n.html(o)}},onAfter:function(n,o){$(".ligue-teams").length>0&&(rankingChoice.init(),backToTop.init())}},o=$("#league-stats").smoothState(n).data("smoothState")}},infiniteScroll={init:function(){$(window).scroll(function(){$(window).scrollTop()+$(window).height()>=$(document).height()-300&&infiniteScroll.loadMoreContent()})},loadMoreContent:function(){var n=$("a.next").first();n.each(function(o,i){var t=$(i).attr("href");n.remove();var e=$("<div></div>");e.load(t+" div.scroll-content",function(n,o,i){if("error"!=o){var t=$("div.scroll-content");e.children("div.scroll-content").children().each(function(n,o){t.append(o)})}})})}},backToTop={init:function(){var n=300,o=1200,i=700,t=$(".cd-top");$(window).scroll(function(){$(this).scrollTop()>n?t.addClass("cd-is-visible"):t.removeClass("cd-is-visible cd-fade-out"),$(this).scrollTop()>o&&t.addClass("cd-fade-out")}),t.on("click",function(n){n.preventDefault(),$("body,html").animate({scrollTop:0},i)})}},navManager={init:function(){$(".toggle-overlay").click(function(){$("aside").toggleClass("open"),$(".visible").toggleClass("visible")}),$("nav li.nav-subnav a").click(function(){$(this).next("ul").toggleClass("visible")}),$(".nav-back-one-step").on("click",function(){$(this).parent().parent().toggleClass("visible")})}},rankingChoice={groupCount:0,init:function(n){rankingChoice.groupCount=n,rankingChoice.hideRankings(),$("#global, #global-standard").length>0?$("#global, #global-standard").show():$("#group1-standard").show(),rankingChoice.groupChoice()},groupChoice:function(){$("#group-choice, #rank-choice").on("change",function(){rankingChoice.hideRankings(),group=$("#group-choice option:selected").val(),rankingType=$("#rank-choice option:selected").val(),$("#"+group).show(),$("#"+group+"-"+rankingType).show()})},hideRankings:function(){for(var n=1;n<=rankingChoice.groupCount;n++)$("#group"+n).hide();$("#global, .ranking").hide()}},analyticsConfig={init:function(){$(".shop-product-checkout").on("click",function(n){ga("send",{hitType:"event",eventCategory:"Checkout",eventAction:"click",eventLabel:"Cadenza"}),fbq("track","InitiateCheckout")}),$(".private-ad").on("click",function(n){ga("send",{hitType:"event",eventCategory:"Ad-Click",eventAction:"click",eventLabel:"Cadenza"})}),$(".job-tease").on("click",function(n){ga("send",{hitType:"event",eventCategory:"Job-Tease-Click",eventAction:"click"})})}},snipcartConfig={init:function(){Snipcart.api.configure("split_firstname_and_lastname",!0),Snipcart.execute("registerLocale","fr",{company_name:"Société"}),$(".shop-product-gallery").slick({arrows:!1,dots:!0})}},errorReportForm={init:function(){$("#errors-report-form").submit(function(n){n.preventDefault();var o=$(this),i=$.post(o.attr("action"),o.serialize());i.done(function(){$("#errors-report-form-container").hide(),$("#errors-report-form-success").show()}),i.fail(function(){$("#errors-report-form-container").hide(),$("#errors-report-form-fail").show()})})}},contactForm={init:function(){$("#contact-form").submit(function(n){n.preventDefault();var o=$(this),i=$.post(o.attr("action"),o.serialize());i.done(function(){$("#contact-form-container").hide(),$("#contact-form-success").show()}),i.fail(function(){$("#contact-form-container").hide(),$("#contact-form-fail").show()})})}};