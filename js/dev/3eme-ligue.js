var lineColors = ['#F44336','#9C27B0','#3F51B5','#2196F3','#009688','#8BC34A','#C6FF00','#FFEB3B','#FF9800','#795548','#E91E63','#00BCD4','#CDDC39','#FFC107','#673AB7']
$(document).ready(function(){

    $('.post-small-image-link').magnificPopup({type: 'image'});

    var groups = []

    $('.team-standard').each(function(){
        var groupId = $(this).attr('id')
        groups[groupId] = []
        $(this).find('table tbody tr').each(function(){
            var teamName = ($(this).find(".team-short-name").text())
            var evolution = ($(this).data('evolution'))
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
})

var makeChart = {
    init: function(dataset){
        console.log(dataset.length)
        var ctx = $("#myChart");
        var myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ["10.08","16.08","23.08","30.08","06.09","13.09","20.09","27.09","04.10","11.10","18.10","25.10","01.11","08.11"],
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