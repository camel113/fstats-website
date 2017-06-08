var lineColors = ['#F44336','#9C27B0','#3F51B5','#2196F3','#009688','#8BC34A','#C6FF00','#FFEB3B','#FF9800','#795548','#E91E63','#00BCD4','#CDDC39','#FFC107','#673AB7']
$(document).ready(function(){

    $('#size-selector').change(function() {
        $('#buy').data('item-custom1-value', $(this).val());
    });
    
    $('.post-small-image-link').magnificPopup({type: 'image'});

    var groups = []
    var teamEvolutionSize = 0
    $('.team-standard').each(function(){
        var groupId = $(this).attr('id')
        groups[groupId] = []
        $(this).find('table tbody tr').each(function(){
            var teamName = ($(this).find(".team-short-name").text())
            var evolution = ($(this).data('evolution'))
            teamEvolutionSize = evolution.length
            console.log(teamEvolutionSize)
            groups[groupId].push({label:teamName,data:evolution,fill:false,lineTension: 0,borderColor:lineColors[groups[groupId].length],pointBackgroundColor:lineColors[groups[groupId].length],backgroundColor:lineColors[groups[groupId].length]})
        })
        $(this).find('.table tbody tr a').each(function(){
            $(this).on('click',function(e){
                event.preventDefault();
                console.log($(this))
                makeChart.init(groups[groupId])
            })
        })
    })
    rankingChoice.init(Object.keys(groups).length)

    /* ASSAN PART */ 

    //smooth scroll
    $(function () {
        $('.scroll-to a[href*="#"]:not([href="#"])').on('click',function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });

    //Flexslider
    $('.flexslider').flexslider({
        animation: "fade",
        touch: true,
        directionNav: false
    });

    //screen shot slider
    $("#owl-screenshots").owlCarousel({
    autoPlay: 3000, //Set AutoPlay to 3 seconds
    pagination:false,
    navigation:true,
        items: 4,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [979, 3],
        navigationText: ["<i class='fa fa-angle-left'>", "<i class='fa fa-angle-right'>"]
    });
        
    //wow animations
    var wow = new WOW({
        boxClass: 'wow', // animated element css class (default is wow)
        animateClass: 'animated', // animation css class (default is animated)
        offset: 100, // distance to the element when triggering the animation (default is 0)
        mobile: false        // trigger animations on mobile devices (true is default)
    });
    wow.init();

})

var makeChart = {
    init: function(dataset){
        console.log("###")
        var myLabels = ["08.09","15.09","22.09","29.09","06.10","13.10","20.10","27.10","03.11","10.11","30.03","07.04","12.04","19.04","26.04","03.05","10.05","17.05","24.05","29.05","08.06"]
        var labelsToRemoveToFitData = (myLabels.length - dataset[0].data.length)
        if( labelsToRemoveToFitData > 0){
            for (i = 0; i < labelsToRemoveToFitData; i++) { 
                myLabels.shift()
            }
        }
        console.log(dataset[0].data.length)
        console.log(dataset.length)
        console.log(dataset[0].data.length)
        console.log("###")
        var ctx = $("#myChart");
        var myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: myLabels,
                datasets: dataset,
                lineTension: 0
            },
            options: {
                lineTension: 0,
                tooltips: {
                    enabled: true,
                    mode: 'single'
                },
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero:true,
                            min:1,
                            max:dataset.length,
                            reverse: true,
                            autoSkip: false,
                            stepSize: 1,
                            maxTicksLimit:dataset.length
                        }
                    }]
                }
            }
        });
        makeChart.display()
    },
    display: function(){
        $("#myModal").modal()
    }
}

var rankingChoice = {
    groupCount: 0,
    init: function(nbGroups){
        var group, rankingType;
        rankingChoice.groupCount = nbGroups;
        rankingChoice.hideRankings()
        if($('#global, #global-standard').length > 0){
            $('#global, #global-standard').show()
        }else{
            $('#group1-standard').show()
        }
        rankingChoice.groupChoice()
    },
    groupChoice: function(){
        $("#group-choice, #rank-choice").on('change',function() {
            rankingChoice.hideRankings();
            group = $("#group-choice option:selected").val()
            rankingType = $("#rank-choice option:selected").val()
            $('#'+group).show()
            $('#'+group+'-'+rankingType).show() 
        });
    },
    hideRankings: function(){
        for (var i = 1; i <= rankingChoice.groupCount; i++) {
            $('#group'+i).hide()
        };
        $('#global, .ranking').hide()
    }
}


$("#product-single").owlCarousel({
    navigation : true, 
    slideSpeed : 300,
    pagination : false,
    singleItem:true,
    navigationText: ["<i class='pe-7s-angle-left'>", "<i class='pe-7s-angle-right'>"]
});