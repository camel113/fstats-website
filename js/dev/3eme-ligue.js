var lineColors = ['#F44336','#9C27B0','#3F51B5','#2196F3','#009688','#8BC34A','#C6FF00','#FFEB3B','#FF9800','#795548','#E91E63','#00BCD4','#CDDC39','#FFC107','#673AB7']
$(document).ready(function(){

    var groups = []

    $('.team-standard').each(function(){
        var groupId = $(this).attr('id')
        groups[groupId] = []
        $(this).find('table tbody tr').each(function(){
            var teamName = ($(this).find("td:nth-child(2)").text())
            var evolution = ($(this).data('evolution'))
            groups[groupId].push({label:teamName,data:evolution,fill:false,borderColor:lineColors[groups[groupId].length],pointBackgroundColor:lineColors[groups[groupId].length],backgroundColor:lineColors[groups[groupId].length]})
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
        console.log(dataset)
        var ctx = $("#myChart");
        var myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: [1,2,3,4,5,6,7,8,9,10,11],
                datasets: dataset
            },
            options: {
                tooltips: {
                    enabled: true,
                    mode: 'single',
                    callbacks: {
                        label: function(tooltipItems, data) {
                            return data.datasets[tooltipItems.yLabel-1].label;
                        },
                        title: function(tooltipItems, data) { 
                            return tooltipItems[0].yLabel;
                        }
                    }
                },
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero:true,
                            max:12,
                            reverse: true
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
        $('#global, #global-standard').show()
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