var lineColors = ['#F44336','#9C27B0','#3F51B5','#2196F3','#009688','#8BC34A','#FFEB3B','#FF9800','#795548','#E91E63','#673AB7','#00BCD4','#CDDC39']
$(document).ready(function(){

    var groups = []

    var group1DataSet = []
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
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero:true
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